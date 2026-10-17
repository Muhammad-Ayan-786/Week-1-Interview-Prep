import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { dsaEntriesAdded, dsaEntriesLoaded } from '../states/dsaSlice';

const STORAGE_KEY = 'dsa-benchmark-proofs';

const readSavedEntries = () => {
  const savedEntries = window.localStorage.getItem(STORAGE_KEY);
  if (!savedEntries) return [];

  const entries = JSON.parse(savedEntries);
  if (!Array.isArray(entries)) {
    throw new Error('Saved DSA entries are not in the expected format.');
  }

  return entries;
};

export const useDsaEntries = () => {
  const dispatch = useDispatch();
  const { entries, isLoaded } = useSelector((state) => state.dsa);
  const [selectedWeek, setSelectedWeek] = useState(null);

  useEffect(() => {
    try {
      dispatch(dsaEntriesLoaded(readSavedEntries()));
    } catch (error) {
      console.error('Could not load saved DSA entries:', error);
      toast.error('Could not load saved DSA entries from this browser.');
      dispatch(dsaEntriesLoaded([]));
    }
  }, [dispatch]);

  const addEntries = useCallback((newEntries) => {
    if (!isLoaded) {
      throw new Error('DSA entries are still loading.');
    }

    const currentEntries = readSavedEntries();
    const entriesWithMetadata = newEntries.map((entry) => ({
      ...entry,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }));

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...entriesWithMetadata, ...currentEntries]),
    );
    dispatch(dsaEntriesAdded(entriesWithMetadata));

    return entriesWithMetadata;
  }, [dispatch, isLoaded]);

  const availableWeeks = Array.from({ length: Math.max(9, ...entries.map((entry) => {
    const weekNumber = Number(String(entry.assignedWeek).replace(/\D/g, ''));
    return Number.isFinite(weekNumber) ? weekNumber : 0;
  })) }, (_, index) => `W${index + 1}`);
  const latestWeek = entries.reduce((latest, entry) => {
    const weekNumber = Number(String(entry.assignedWeek).replace(/\D/g, ''));
    return Number.isFinite(weekNumber) ? Math.max(latest, weekNumber) : latest;
  }, 0);

  return {
    entries,
    isLoaded,
    selectedWeek: selectedWeek || `W${latestWeek || 1}`,
    setSelectedWeek,
    availableWeeks,
    addEntries,
  };
};

export default useDsaEntries;
