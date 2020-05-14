import * as React from "react";
import { Journey, JourneyResult } from "./JourneyResult/JourneyResult";

import "./Results.css";

export function Results({ results, loading, error }: FormResultsProps) {
  const errorMessage = error && <p>Error</p>;
  const loadingMessage = loading && <p>Loading</p>;
  const outwardResults = results && results.outboundJourneyList && results.outboundJourneyList.length > 0 && renderResults(results.outboundJourneyList);
  const inwardResults = results && results.inboundJourneyList && results.inboundJourneyList.length > 0 && renderResults(results.inboundJourneyList);
  const journeys = !outwardResults
    ? <p>No results</p>
    : <>{outwardResults} {inwardResults}</>;

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
    outboundJourneyList: Journey[],
    inboundJourneyList: Journey[],
  },
  loading: boolean,
  error: boolean
}