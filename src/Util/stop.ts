import { stopsByCode } from "../Data/stops";

export function stopName(stop: Stop): string {
  return stop.crsCode ? stopsByCode[stop.crsCode].name : stopsByCode[stop.nlcCode!].name;
}

interface Stop {
  crsCode: string,
  nlcCode?: string
}
