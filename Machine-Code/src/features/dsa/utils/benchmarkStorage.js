const STORAGE_KEY = 'dsa-benchmark-proofs';

export const getSavedDsaBenchmarks = () => {
  const storedBenchmarks = window.localStorage.getItem(STORAGE_KEY);
  if (!storedBenchmarks) return [];

  const benchmarks = JSON.parse(storedBenchmarks);
  if (!Array.isArray(benchmarks)) {
    throw new Error('Saved DSA benchmarks are not in the expected format.');
  }

  return benchmarks;
};

export const saveDsaBenchmark = (benchmark) => {
  const benchmarks = getSavedDsaBenchmarks();
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...benchmarks, benchmark]));
};
