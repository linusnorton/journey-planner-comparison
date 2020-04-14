import * as React from "react";
import { Journey, JourneyResult } from "./JourneyResult/JourneyResult";

import "./Results.css";

export function Results({ results, loading }: FormResultsProps) {
  return (
    <div className="results row">
      <div className="col-6 p-0">
        {
          loading
            ? <p>Loading</p>
            : !results || results.outboundJourneyList.length === 0
              ? <p>No results</p>
              : renderResults(results.outboundJourneyList)
        }
      </div>
    </div>
  );
}

function renderResults(journeys: Journey[]) {
  return (
    <div className="container p-0">
      <div className="row my-1">
        <div className="col-3 overflow-hidden">Origin</div>
        <div className="col-1">Dep</div>
        <div className="col-1">Arr</div>
        <div className="col-1">Chgs</div>
        <div className="col-3 overflow-hidden">Destination</div>
        <div className="col-2">Price</div>
      </div>
      {
        journeys.map((j, i) => <JourneyResult key={i} journey={j} />)
      }
    </div>
  )
}

export interface FormResultsProps {
  results?: {
    outboundJourneyList: Journey[]
  },
  loading: boolean
}