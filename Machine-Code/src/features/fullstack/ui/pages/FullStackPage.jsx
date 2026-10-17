import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, Plus } from 'lucide-react';
import FullStackQuestionList from '../components/FullStackQuestionList';
import FullStackDetailView from '../components/FullStackDetailView';
import FullStackEmptyState from '../components/FullStackEmptyState';

const fullStackQuestionsData = [
  {
    id: 'opt-ui-1',
    tag: 'API Reliability & Distributed State',
    category: 'API Reliability',
    title: 'Optimistic UI Updates and Idempotency Keys',
    lastRevised: '2 days ago',
    difficulty: 'Medium',
    summary:
      'Pattern for immediate local state transitions during asynchronous mutations while guaranteeing exactly-once side-effects on intermittent networks.',
    points: [
      {
        label: 'Idempotency Key Scope',
        text: 'Generated strictly on the client (UUIDv4 or cryptographic timestamp hash) and injected via the X-Idempotency-Key header. Stored in Redis using an atomic distributed lock ( SET NX EX 120 ).',
        code: 'SET NX EX 120',
        takeaway: 'Prevents duplicate credit billing during HTTP timeout resets.',
      },
      {
        label: 'Deterministic Rollback Strategy',
        text: 'Mutate client state immediately, but keep an immutable in-memory snapshot of prior Zustand/TanStack store. On any 4xx/5xx network rejection, silently restore snapshot and surface a non-blocking toast warning.',
        takeaway: 'Guarantees zero ghost updates or inconsistent client-side UI states.',
      },
      {
        label: 'Offline IndexedDB Buffering',
        text: 'If mutations dispatch while navigator.onLine === false, queue payloads within browser IndexedDB with original timestamps to prevent lost writes upon reconnection.',
        takeaway: 'Preserves causal consistency across flaky cellular connections.',
      },
      {
        label: 'Server Deduplication Replay',
        text: 'When a duplicate idempotency key hits an API worker, do NOT re-execute downstream SQL queries. Instead, retrieve the stored 200 payload directly from the cache key and return it verbatim with an Idempotent-Replay: true response header.',
        takeaway: 'Ensures idempotent semantic contracts across all edge replicas.',
      },
    ],
  },
  {
    id: 'rate-limiter-2',
    tag: 'System Design & Concurrency',
    category: 'System Design',
    title: 'Designing a Distributed Rate Limiter (Token Bucket vs Leaky Bucket)',
    lastRevised: 'Oct 23',
    difficulty: 'Hard',
    summary:
      'Architectural comparison for enforcing client request quotas across distributed gateway proxies without single-point bottlenecks.',
    points: [
      {
        label: 'Sliding Window Log',
        text: 'Store request timestamps in a Redis Sorted Set (ZSET) to achieve millisecond-precision throttling.',
        takeaway: 'Eliminates edge-case burst vulnerabilities present in fixed-window algorithms.',
      },
    ],
  },
  {
    id: 'concurrent-mode-3',
    tag: 'Frontend Architecture',
    category: 'Frontend Arch',
    title: 'React Concurrent Mode & Fiber Reconciler Lifecycle',
    lastRevised: 'Oct 20',
    difficulty: 'Hard',
    summary:
      'Internal mechanics of React 18 time-slicing, non-blocking rendering transitions, and double-buffering fiber tree structures.',
    points: [
      {
        label: 'Work Loop Slicing',
        text: 'Yield control back to the main thread browser event loop every 5ms using MessageChannel schedulers.',
        takeaway: 'Keeps UI input responses fluid under heavy re-render pressures.',
      },
    ],
  },
  {
    id: 'db-indexing-4',
    tag: 'Databases & Storage',
    category: 'Databases & Storage',
    title: 'Database Indexing: B-Tree vs LSM-Tree Storage Engines',
    lastRevised: 'Oct 18',
    difficulty: 'Medium',
    summary:
      'Read-optimized vs write-optimized storage layouts, WAL mechanics, and compaction trade-offs in relational vs NoSQL engines.',
    points: [
      {
        label: 'Write Amplification',
        text: 'LSM-trees convert random write disk I/O into sequential append-only writes via MemTable and SSTables.',
        takeaway: 'Ideal for high-throughput write-heavy workloads.',
      },
    ],
  },
  {
    id: 'event-loop-5',
    tag: 'Node.js Runtimes',
    category: 'Node.js Runtimes',
    title: 'Event Loop Starvation & Worker Threads in Node.js',
    lastRevised: 'Oct 15',
    difficulty: 'Hard',
    summary:
      'Avoiding libuv threadpool blocking when executing synchronous CPU-bound operations in single-threaded JavaScript runtimes.',
    points: [
      {
        label: 'Worker Pool Isolation',
        text: 'Offload heavy crypto / compression passes into separate worker_threads with SharedArrayBuffer IPC.',
        takeaway: 'Prevents latency spikes in HTTP I/O callbacks.',
      },
    ],
  },
];

export const FullStackPage = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState('opt-ui-1');
  const [activeFilter, setActiveFilter] = useState('All');

  const selectedQuestion = fullStackQuestionsData.find(
    (q) => q.id === selectedId
  );

  return (
    <div className="space-y-8">
      {/* Page Title & Breadcrumb Header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-1">
          <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-(--color-text-secondary)">
            PRACTICE / FULL-STACK QUESTIONS • SOLO LIBRARY
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-(--color-neutral)">
            Full-Stack Questions
          </h1>
          <p className="text-xs font-sans text-(--color-text-secondary) max-w-xl">
            In-depth architectural patterns, runtime mechanics, and deterministic interview responses.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 bg-(--color-surface-muted) border border-(--color-border)/80 rounded-xl text-xs font-mono font-bold text-(--color-text-secondary)">
            Queue: <span className="text-(--color-neutral)">38 Mastered</span> / <span className="text-(--color-tertiary)">4 In Revision</span>
          </div>
          <button
            type="button"
            onClick={() => navigate('/fullstack/add')}
            className="px-4 py-2 bg-(--color-primary) text-(--color-neutral) rounded-xl text-xs font-mono font-bold flex items-center gap-2 hover:brightness-95 transition-all shadow-xs cursor-pointer"
          >
            <Plus className="w-4 h-4" /> Add Question
          </button>
        </div>
      </div>

      {/* Main 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        {/* Left Column: Search, Filter Pills & List (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-(--color-text-secondary) absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search full-stack questions..."
              className="w-full bg-(--color-surface) border border-(--color-border) rounded-2xl pl-10 pr-4 py-2.5 text-xs font-sans text-(--color-neutral) focus:outline-none focus:ring-2 focus:ring-(--color-primary) transition-all shadow-xs"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs font-mono">
            {['All (38)', 'System Design (14)', 'Node.js'].map((pill, idx) => {
              const isActive = (idx === 0 && activeFilter === 'All') || activeFilter === pill;
              return (
                <button
                  key={pill}
                  type="button"
                  onClick={() => setActiveFilter(idx === 0 ? 'All' : pill)}
                  className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${isActive
                    ? 'bg-(--color-neutral) text-white shadow-xs'
                    : 'bg-(--color-surface-muted) text-(--color-text-secondary) hover:text-(--color-neutral) border border-(--color-border)/60'
                    }`}
                >
                  {pill}
                </button>
              );
            })}
          </div>

          {/* Question List Component */}
          <FullStackQuestionList
            questions={fullStackQuestionsData}
            selectedId={selectedId}
            onSelectQuestion={(id) => setSelectedId(id)}
          />
        </div>

        {/* Right Column: Detailed View (7 Cols) */}
        <div className="lg:col-span-7">
          <FullStackDetailView question={selectedQuestion} />
        </div>
      </div>

      {/* Interactive Unselected / Empty Filter State Specification Frame */}
      <FullStackEmptyState onAddClick={() => navigate('/fullstack/add')} />
    </div>
  );
};

export default FullStackPage;