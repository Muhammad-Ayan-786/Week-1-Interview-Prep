import { Plus, Database } from 'lucide-react';
import DriveFilterBar from '../components/DriveFilterBar';
import DriveTable from '../components/DriveTable';
import { useDriveLibrary } from '../../hooks/useDriveLibrary';

export const InterviewDrivesPage = () => {
  const driveLibrary = useDriveLibrary();

  return (
    <div className="space-y-8">
      {/* Top Header & Breadcrumb */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-1">
          <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-(--color-text-secondary)">
            LIBRARY / INTERVIEW DRIVE LINKS • WEEKLY REHEARSAL ASSETS
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-(--color-neutral)">
            Interview Drive Links
          </h1>
          <p className="text-xs font-sans text-(--color-text-secondary) max-w-xl">
            Weekly interview sheets, audio recordings, problem briefs, and company rehearsal packs stored securely in Google Drive.
          </p>
        </div>

        <button
          type="button"
          onClick={driveLibrary.openAddDrive}
          className="px-5 py-2.5 bg-(--color-primary) text-(--color-neutral) rounded-xl text-xs font-mono font-bold flex items-center gap-2 hover:brightness-95 transition-all shadow-xs cursor-pointer"
        >
          <Plus className="w-4 h-4" /> Add Drive Link
        </button>
      </div>

      {/* Archive Status Banner Card */}
      <div className="bg-(--color-surface) p-6 rounded-3xl border border-(--color-border)/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-(--color-text-secondary)">
              STORAGE STATUS
            </span>
            <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-800 border border-emerald-500/20 rounded-full text-[10px] font-mono font-bold inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Local
            </span>
          </div>
          <div className="font-serif text-3xl font-normal text-(--color-neutral)">
            {driveLibrary.totalDrives} {driveLibrary.totalDrives === 1 ? 'Drive Link' : 'Drive Links'} Archived
          </div>
        </div>

        <div className="bg-(--color-bg) px-4 py-3 rounded-2xl border border-(--color-border) flex items-center gap-3 text-xs font-mono text-(--color-neutral)">
          <div className="p-2 rounded-xl bg-(--color-primary)/30">
            <Database className="w-4 h-4 text-(--color-neutral)" />
          </div>
          <div>
            <span className="font-bold">{driveLibrary.latestWeek}</span>
            <span className="text-(--color-text-secondary) ml-1.5">Latest assigned week</span>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <DriveFilterBar
        search={driveLibrary.search}
        onSearchChange={driveLibrary.setSearch}
      />

      {/* Drive Links Table */}
      <DriveTable
        drives={driveLibrary.drives}
        totalDrives={driveLibrary.totalDrives}
        latestWeek={driveLibrary.latestWeek}
        isLoaded={driveLibrary.isLoaded}
      />
    </div>
  );
};

export default InterviewDrivesPage;