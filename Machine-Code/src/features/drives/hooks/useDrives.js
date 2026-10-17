import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { driveAdded, drivesLoaded } from '../states/drivesSlice';

const STORAGE_KEY = 'interview-drives';

const readSavedDrives = () => {
  const storedDrives = window.localStorage.getItem(STORAGE_KEY);
  if (!storedDrives) return [];

  const drives = JSON.parse(storedDrives);
  if (!Array.isArray(drives)) {
    throw new Error('Saved interview drives are not in the expected format.');
  }

  return drives;
};

const getNextWeekNumber = (drives) => drives.reduce((latestWeek, drive) => {
  const weekNumber = Number(String(drive.week).replace(/\D/g, ''));
  return Number.isFinite(weekNumber) ? Math.max(latestWeek, weekNumber) : latestWeek;
}, 0) + 1;

export const useDrives = () => {
  const dispatch = useDispatch();
  const { entries: drives, isLoaded } = useSelector((state) => state.drives);

  useEffect(() => {
    try {
      dispatch(drivesLoaded(readSavedDrives()));
    } catch (error) {
      console.error('Could not load saved interview drives:', error);
      toast.error('Could not load saved interview drives from this browser.');
      dispatch(drivesLoaded([]));
    }
  }, [dispatch]);

  const nextWeek = `W${String(getNextWeekNumber(drives)).padStart(2, '0')}`;

  const addDrive = useCallback((drive) => {
    if (!isLoaded) {
      throw new Error('Interview drives are still loading.');
    }

    const savedDrives = readSavedDrives();
    const assignedWeek = `W${String(getNextWeekNumber(savedDrives)).padStart(2, '0')}`;
    const savedDrive = {
      ...drive,
      id: crypto.randomUUID(),
      week: assignedWeek,
      createdAt: new Date().toISOString(),
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([savedDrive, ...savedDrives]));
    dispatch(driveAdded(savedDrive));

    return savedDrive;
  }, [dispatch, isLoaded]);

  return { drives, isLoaded, nextWeek, addDrive };
};

export default useDrives;
