import { useNavigate } from 'react-router';
import { Inbox, Plus } from 'lucide-react';
import DsaWeekHeader from '../components/DsaWeekHeader';
import DsaBenchmarkCards from '../components/DsaBenchmarkCards';
import DsaApproachList from '../components/DsaApproachList';
import { useDsaEntries } from '../../hooks/useDsaEntries';

export const DsaPage = () => {
  const navigate = useNavigate();
  const {
    entries,
    isLoaded,
    selectedWeek,
    setSelectedWeek,
    availableWeeks,
  } = useDsaEntries();
  const weekEntries = entries.filter((entry) => entry.assignedWeek === selectedWeek);

  console.log(weekEntries);


  return (
    <div className="space-y-8">
      {/* Top Page Title & Action Header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-1">
          <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-(--color-text-secondary)">
            PRACTICE / DATA STRUCTURES & ALGORITHMS • WEEKLY REHEARSAL
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-(--color-neutral)">
            DSA Repository
          </h1>
          <p className="text-xs font-sans text-(--color-text-secondary) max-w-xl">
            Weekly deliberate practice logs, benchmark problem screenshots, and tactical algorithmic intuition.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate('/dsa/add')}
          className="px-5 py-2.5 bg-(--color-primary) text-(--color-neutral) rounded-xl text-xs font-mono font-bold flex items-center gap-2 hover:brightness-95 transition-all shadow-xs cursor-pointer"
        >
          <Plus className="w-4 h-4" /> Add DSA Entry
        </button>
      </div>

      {/* Week Filter Header */}
      <DsaWeekHeader
        weeks={availableWeeks}
        selectedWeek={selectedWeek}
        onSelectWeek={setSelectedWeek}
        entries={weekEntries}
      />

      {!isLoaded ? (
        <div className="rounded-3xl border border-(--color-border) bg-(--color-surface) p-10 text-center text-sm text-(--color-text-secondary)">
          Loading DSA entries...
        </div>
      ) : weekEntries.length === 0 ? (
        <div className="flex flex-col items-center gap-4 rounded-3xl border border-(--color-border)/80 bg-(--color-surface) px-6 py-12 text-center shadow-xs">
          <div className="rounded-2xl bg-(--color-surface-muted) p-3 text-(--color-text-secondary)">
            <Inbox className="h-6 w-6" />
          </div>
          <div className="space-y-1">
            <h2 className="font-serif text-xl text-(--color-neutral)">
              No DSA questions for {selectedWeek.replace('W', 'Week ')}
            </h2>
            <p className="text-xs text-(--color-text-secondary)">
              Choose another week or add five questions to this week.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/dsa/add')}
            className="inline-flex items-center gap-2 rounded-xl bg-(--color-primary) px-4 py-2 text-xs font-mono font-bold text-(--color-neutral)"
          >
            <Plus className="h-4 w-4" /> Add DSA entries
          </button>
        </div>
      ) : (
        <>
          <DsaBenchmarkCards entries={weekEntries} />

          <DsaApproachList entries={weekEntries} />
        </>
      )}
    </div>
  );
};

export default DsaPage;