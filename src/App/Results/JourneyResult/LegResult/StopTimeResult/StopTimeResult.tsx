import * as React from "react";
import { toTimeString } from "../../../../../Util/time";
import { stopName } from "../../../../../Util/stop";

export function StopTimeResult({ stopTime }: StopTimeResultProps) {
  return (
    <div className="row">
      <div className="col-2">
        {stopTime.publicArrivalTime ? toTimeString(stopTime.publicArrivalTime) : "--:--" }
      </div>
      <div className="col-2">
        {stopTime.publicDepartureTime ? toTimeString(stopTime.publicDepartureTime) : "--:--" }
      </div>
      <div className="col-8">
        {stopName(stopTime)}
      </div>
    </div>
  );
}

export interface StopTimeResultProps {
  stopTime: StopTime
}

export interface StopTime {
  crsCode: string,
  publicDepartureTime: string,
  publicArrivalTime: string
}