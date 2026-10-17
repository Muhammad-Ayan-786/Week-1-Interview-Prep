import { Search } from 'lucide-react';

export const DriveFilterBar = ({ search, onSearchChange }) => {
  return (
    <div className="bg-(--color-surface) p-4 sm:p-5 rounded-2xl border border-(--color-border)/80 shadow-xs space-y-4">
      {/* Search Bar */}
      <div className="lg:col-span-6 relative">
        <Search className="w-4 h-4 text-(--color-text-secondary) absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search sheets by company, week, or topic..."
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          className="w-full bg-(--color-bg) border border-(--color-border) rounded-xl pl-10 pr-4 py-3 text-xs font-sans text-(--color-neutral) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-primary) transition-all"
        />
      </div>
    </div>
  );
};

export default DriveFilterBar;