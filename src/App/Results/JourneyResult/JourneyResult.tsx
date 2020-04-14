import * as React from "react";
import { useState } from "react";
import { LegResult, Leg } from "./LegResult/LegResult";
import { toTimeString } from "../../../Util/time";
import { stopName } from "../../../Util/stop";

export function JourneyResult({ journey }: JourneyResultProps) {
  const [open, setOpen] = useState(false);
  const [fLeg, lLeg] = firstAndLast(journey.tisSegmentList);

  const onClick = () => {
    setOpen(!open);
  };

  const details = open && <div className="row my-1">
    {journey.tisSegmentList.map((l, i) => <LegResult index={i} key={i} leg={l}/>)}
  </div>;

  const price = journey.journeyFareList.find(f => f.cheapest)!.farePrice.toFixed(2);

  return (
    <>
      <div className="row selectable" onClick={onClick}>
        <div className="col-3">{stopName(fLeg.dptStation)}</div>
        <div className="col-1">{toTimeString(journey.departureDateTime)}</div>
        <div className="col-1">{toTimeString(journey.arrivalDateTime)}</div>
        <div className="col-1">{journey.tisSegmentList.length}</div>
        <div className="col-3">{stopName(lLeg.arrStation)}</div>
        <div className="col-2">£{price}</div>
      </div>
      {details}
    </>
  )
}

export interface JourneyResultProps {
  journey: Journey
}

export interface Journey {
  tisSegmentList: Leg[],
  departureDateTime: string,
  arrivalDateTime: string,
  journeyFareList: JourneyFare[]
}

export interface JourneyFare {
  cheapest: boolean,
  farePrice: number
}

function firstAndLast<T>(items: T[]): [T, T] {
  return [items[0], items[items.length - 1]];
}