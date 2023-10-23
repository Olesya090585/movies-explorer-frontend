import { useMemo } from "react";

export function useFilter(arr, short) {
  const filter = useMemo(() => {
    if (short) {
      return arr.filter((item) => item.duration < 40);
    }
    return arr;
  }, [arr, short]);
  return filter;
}
