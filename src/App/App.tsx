import React, {Dispatch, SetStateAction, useState} from 'react';
import './App.css';
import {Form, FormData} from "./Form/Form";
import axios, {CancelTokenSource} from "axios";
import {stops, stopsByCrs} from "../Data/stops";
import {Results} from "./Results/Results";
import {convertOtrl} from "../Util/otrl";

export function App() {
  const [firstLoad, setFirstLoad] = useState(true);
  const [results1, setResults1] = useState();
  const [results2, setResults2] = useState();
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);

  const onSubmit = (form: FormData) => {
    const params = new URLSearchParams(window.location.search);

    for (const [key, value] of Object.entries(form)) {
      params.set(key, value);
    }

    window.history.replaceState({}, "", decodeURIComponent(`${window.location.pathname}?${params}`));

    getResults(fetchTrip(form), setLoading1, setError1, setResults1);
    getResults(fetchOtrl(form), setLoading2, setError2, setResults2);
  }

  const urlParams = new URLSearchParams(window.location.search);
  const origin = urlParams.get("origin");
  const destination = urlParams.get("destination");
  const outwardDate = urlParams.get("outwardDate");
  const outwardTime = urlParams.get("outwardTime");
  const adults = +(urlParams.get("adults") || 1);
  const children = +(urlParams.get("children") || 0);
  const railcards = urlParams.get("railcards") || "";
  const returnDate = urlParams.get("returnDate") || "";
  const returnTime = urlParams.get("returnTime") || "";

  if (firstLoad && origin && destination && outwardDate && outwardTime) {
    setFirstLoad(false);
    onSubmit({ origin, destination, outwardDate, outwardTime, adults, children, railcards, returnDate, returnTime });
  }

  return (
    <main>
      <div className="container">
        <Form onSubmit={onSubmit} stops={stops}/>
        <div className="results row">
          <div className="col-6 pl-0">
            <h2>cTrip</h2>
            <Results loading={loading1} results={results1} error={error1}/>
          </div>
          <div className="col-6 pr-0">
            <h2>Southern</h2>
            <Results loading={loading2} results={results2} error={error2}/>
          </div>
        </div>
      </div>
    </main>
  );
}

async function getResults(query: Promise<any>, setLoading: Setter<boolean>, setError: Setter<boolean>, setResults: Setter<any>) {
  setLoading(true);
  setError(false);

  try {
    const results = await query;
    setResults(results);
    setLoading(false);
  } catch (e) {
    if (!axios.isCancel(e)) {
      console.error(e);
      setError(true);
    }
  }
}

let otrlSource: CancelTokenSource | undefined;
async function fetchOtrl(form: FormData) {
  const url = "https://cors-anywhere.herokuapp.com/https://api.southernrailway.com/jp/journey-plan";
  const headers = {
    "x-access-token": "otrl|a6af56be1691ac2929898c9f68c4b49a0a2d930849770dba976be5d792a"
  };

  const origin = form.origin.length === 4 ? form.origin : stopsByCrs[form.origin].code;
  const destination = form.destination.length === 4 ? form.destination : stopsByCrs[form.destination].code;

  const data = {
    "adults": form.adults,
    "children": form.children,
    "destination": destination,
    "disableGroupSavings": true,
    "doRealTime": false,
    "filterFares": true,
    "keepAllZoneFares": false,
    "numJourneys": 8,
    "openReturn": false,
    "railcards": form.railcards ? form.railcards.split(",") : undefined,
    "origin": origin,
    "outward": { "arriveDepart": "Depart", "rangeEnd": form.outwardDate + "T23:59:59", "rangeStart": form.outwardDate + "T" + form.outwardTime + ":00"},
    "return": form.returnDate && form.returnTime
        ? { "arriveDepart": "Depart", "rangeEnd": form.returnDate + "T23:59:59", "rangeStart": form.returnDate + "T" + form.returnTime + ":00"}
        : undefined,
    "showCheapest": false
  };

  if (otrlSource) {
    otrlSource.cancel('Another request');
  }

  otrlSource = axios.CancelToken.source()
  const response = await axios.post(url, data, { headers, cancelToken: otrlSource.token });

  return convertOtrl(response.data);
}

let cTripSource: CancelTokenSource | undefined;

async function fetchTrip(form: FormData) {
  const urlParams = new URLSearchParams(window.location.search);
  const isTimetableOnly = urlParams.get("tt") && urlParams.get("tt") !== "false";
  const url = isTimetableOnly
      ? "https://cors-anywhere.herokuapp.com/http://apiproxy-fws.ctripqa.com/apiproxy/train/tisuk/fare/fare/journeySearch"
      : "https://cors-anywhere.herokuapp.com/http://apiproxy-fws.ctripqa.com/apiproxy/train/tisuk/fare/fare/tisSearch";

  const data = {
    "adultCount": form.adults,
    "arrCrsCode": form.destination.length === 3 ? form.destination : "",
    "arrNlcCode": form.destination.length === 4 ? form.destination : "",
    "childCount": form.children,
    "departureDateTime": form.outwardDate + " " + form.outwardTime,
    "dptCrsCode": form.origin.length === 3 ? form.origin : "",
    "dptNlcCode": form.origin.length === 4 ? form.origin : "",
    "keepOvertaken": false,
    "maxJourney": isTimetableOnly ? 100 : -1,
    "openReturn": false,
    "railCardList": form.railcards.split(","),
    "returnDepartureDateTime": form.returnDate && form.returnTime ? form.returnDate + " " + form.returnTime : "",
    "showRouteingDetail": false
  };

  if (cTripSource) {
    cTripSource.cancel('Another request');
  }

  cTripSource = axios.CancelToken.source()

  const response = await axios.post(url, data, { cancelToken: cTripSource.token });

  response.data.outboundJourneyList = response.data.outboundJourneyList.slice(0, 8);
  response.data.inboundJourneyList = response.data.inboundJourneyList?.slice(0, 8);

  return response.data;
}

type Setter<T> = Dispatch<SetStateAction<T>>;