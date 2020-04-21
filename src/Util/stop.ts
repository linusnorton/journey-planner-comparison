import { stopsByCrs, stopsByNlc } from "../Data/stops";

export function stopName(stop: Stop): string {
  return stop.crsCode ? stopsByCrs[stop.crsCode].name : stopsByNlc[stop.nlcCode!].name;
}

interface Stop {
  crsCode?: string,
  nlcCode?: string
}
