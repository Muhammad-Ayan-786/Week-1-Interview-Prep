import ReadinessHeroCard from '../components/ReadinessHeroCard';
import MetricCards from '../components/MetricCards';
import RecentActivityList from '../components/RecentActivityList';
import { useDashboardData } from '../../hooks/useDashboardData';

export const HomePage = () => {
  const dashboard = useDashboardData();
  const greeting = new Date().getHours() < 12
    ? 'Good morning'
    : new Date().getHours() < 18
      ? 'Good afternoon'
      : 'Good evening';

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div className="space-y-1">
          <p className="text-[11px] font-mono font-bold tracking-widest uppercase text-(--color-text-secondary)">
            {new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-(--color-neutral) tracking-tight">
            {greeting}
          </h1>
        </div>

        <p className="text-xs font-mono text-(--color-text-secondary)">
          Your interview preparation overview
        </p>
      </div>

      {!dashboard.isLoaded ? (
        <p className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 text-sm text-(--color-text-secondary)">
          Loading your dashboard...
        </p>
      ) : (
        <>
          <ReadinessHeroCard
            readiness={dashboard.readiness}
            total={dashboard.total}
            completed={dashboard.completedCount}
          />

          <MetricCards
            total={dashboard.total}
            completed={dashboard.completedCount}
            inProgress={dashboard.inProgressCount}
            pending={dashboard.pendingCount}
          />

          <RecentActivityList
            activities={dashboard.recentQuestions}
            isLoaded={dashboard.isLoaded}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;