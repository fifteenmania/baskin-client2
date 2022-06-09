import { useEffect, useState } from "react";

const matchLargeQuery = "(min-width: 1024px)" as const;

export function useWidthMatch(query: string): boolean {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener)
  }, [matches, query])
  return matches;
}

export function useLargeWidthMatch() {
  return useWidthMatch(matchLargeQuery);
}
