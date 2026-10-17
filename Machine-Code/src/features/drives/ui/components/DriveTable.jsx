import { ExternalLink, Link2, Plus } from 'lucide-react';
import { Link } from 'react-router';

export const DriveTable = ({ drives, totalDrives, isLoaded, latestWeek }) => {
  return (
    <div className="bg-(--color-surface) rounded-3xl border border-(--color-border)/80 shadow-xs overflow-hidden">
      {!isLoaded ? (
        <p className="p-8 text-center text-sm text-(--color-text-secondary)">Loading interview drives...</p>
      ) : drives.length === 0 ? (
        <div className="flex flex-col items-center gap-3 px-6 py-12 text-center">
          <h2 className="font-serif text-xl text-(--color-neutral)">
            {totalDrives ? 'No matching drive links' : 'No drive links yet'}
          </h2>
          <p className="text-xs text-(--color-text-secondary)">
            {totalDrives
              ? 'Try another search term.'
              : 'Add a drive link to start your interview rehearsal library.'}
          </p>
          {!totalDrives && (
            <Link
              to="/drives/add"
              className="inline-flex items-center gap-2 rounded-xl bg-(--color-primary) px-4 py-2 text-xs font-mono font-bold text-(--color-neutral)"
            >
              <Plus className="h-4 w-4" /> Add first drive link
            </Link>
          )}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-(--color-border) bg-(--color-surface-muted)/40 text-[10px] font-mono font-bold tracking-wider uppercase text-(--color-text-secondary)">
                <th className="py-3.5 px-5">WEEK</th>
                <th className="py-3.5 px-5">DOCUMENT TITLE & SCOPE</th>
                {/* <th className="py-3.5 px-5">ASSET TYPE</th> */}
                <th className="py-3.5 px-5">LAST SYNCED</th>
                <th className="py-3.5 px-5 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-(--color-border)/60 text-xs font-sans">
              {drives.map((row) => {
                return (
                  <tr key={row.id} className="hover:bg-(--color-surface-muted)/30 transition-colors">
                    {/* Week Badge */}
                    <td className="py-4 px-5">
                      <span
                        className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold inline-block ${row.week === latestWeek
                          ? 'bg-(--color-primary) text-(--color-neutral) shadow-2xs'
                          : 'bg-(--color-surface-muted) text-(--color-text-secondary) border border-(--color-border)/60'
                          }`}
                      >
                        {row.week}
                      </span>
                    </td>

                    {/* Title & Scope */}
                    <td className="py-4 px-5 space-y-1 max-w-md">
                      <div className="font-semibold text-sm text-(--color-neutral)">
                        {row.title}
                      </div>
                      <div className="text-xs font-sans text-(--color-text-secondary) truncate">
                        {row.rehearsalFocus || 'No rehearsal summary provided.'}
                      </div>
                    </td>

                    {/* Last Synced */}
                    <td className="py-4 px-5 font-mono text-xs text-(--color-text-secondary) whitespace-nowrap">
                      {new Date(row.createdAt).toLocaleDateString()}
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-5 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-2">
                        <a
                          href={row.resourceUri}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-(--color-surface-muted) border border-(--color-border) rounded-xl text-xs font-mono font-bold text-(--color-neutral) hover:bg-(--color-surface) inline-flex items-center gap-1.5 transition-all shadow-2xs"
                        >
                          <Link2 className="w-3.5 h-3.5" /> Open in Drive <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {isLoaded && drives.length > 0 && (
        <div className="p-4 sm:p-5 border-t border-(--color-border) flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-(--color-text-secondary)">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Saved in this browser</span>
          </div>
          <div>Showing {drives.length} of {totalDrives} drive links</div>
        </div>
      )}
    </div>
  );
};

export default DriveTable;