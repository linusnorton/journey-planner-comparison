import * as React from "react";
import { useState } from "react";
import { StopTime, StopTimeResult } from "./StopTimeResult/StopTimeResult";
import { stopName } from "../../../../Util/stop";
import { toTimeString } from "../../../../Util/time";

export function LegResult({ index, leg }: LegResultProps) {
  const [open, setOpen] = useState(false);

  const transferText = leg.segmentType !== 0 ? "(" + leg.durationMinutes + " mins transfer)": "";
  const departureTime = leg.departureDateTime && "(" + toTimeString(leg.departureDateTime) + ")";
  const arrivalTime = leg.arrivalDateTime && "(" + toTimeString(leg.arrivalDateTime) + ")";
  const stops = open && leg.tisCallingPointList && <div className="row pl-4">
    <div className="col-12">
      <div className="container">
        {leg.tisCallingPointList.map((st, i) => <StopTimeResult key={i} stopTime={st} />)}
      </div>
    </div>
  </div>;

  const onClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="row selectable pl-4" onClick={onClick}>
        <div className="col-12">
          {stopName(leg.dptStation)} {departureTime} - {stopName(leg.arrStation)} {arrivalTime} {transferText}
        </div>
      </div>
      {stops}
    </>
  );
}

export interface LegResultProps {
  leg: Leg,
  index: number
}

export interface Leg {
  segmentType: SegmentType,
  dptStation: Station,
  arrStation: Station,
  tisCallingPointList: StopTime[]
  durationMinutes: number,
  departureDateTime?: string,
  arrivalDateTime?: string
}

export interface Station {
  "crsCode": string,
  "nlcCode": string,
}

export enum SegmentType {
  Rail = 0,
  Walk = 1,
  Tube = 4,
}