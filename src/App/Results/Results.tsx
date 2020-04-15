import * as React from "react";
import { Journey, JourneyResult } from "./JourneyResult/JourneyResult";

import "./Results.css";

export function Results({ results, loading, error }: FormResultsProps) {
  const errorMessage = error && <p>Error</p>;
  const loadingMessage = loading && <p>Loading</p>;
  const journeys = !results || !results.outboundJourneyList || results.outboundJourneyList.length === 0
    ? <p>No results</p>
    : renderResults(results.outboundJourneyList.slice(0, 8));

  const content = errorMessage || loadingMessage || journeys;

  return (
    <>{content}</>
  );
}

function renderResults(journeys: Journey[]) {
  return (
    <div className="container p-0">
      <div className="row font-weight-bold my-1">
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
  loading: boolean,
  error: boolean
}