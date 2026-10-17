import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDrives } from './useDrives';

export const useDriveLibrary = () => {
  const navigate = useNavigate();
  const { drives, isLoaded } = useDrives();
  const [search, setSearch] = useState('');
  const filteredDrives = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return drives;

    return drives.filter((drive) => [
      drive.title,
      drive.rehearsalFocus,
      drive.week,
      drive.resourceUri,
    ].some((value) => value?.toLowerCase().includes(query)));
  }, [drives, search]);

  return {
    drives: filteredDrives,
    totalDrives: drives.length,
    latestWeek: drives[0]?.week || 'W01',
    isLoaded,
    search,
    setSearch,
    openAddDrive: () => navigate('/drives/add'),
  };
};

export default useDriveLibrary;
