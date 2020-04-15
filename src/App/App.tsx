import React, { useState } from 'react';
import './App.css';
import { Form, FormData } from "./Form/Form";
import axios from "axios";
import { stops } from "../Data/stops";
import { Results } from "./Results/Results";
import { convertOtrl } from "../Util/otrl";

export function App() {
  const [results1, setResults1] = useState();
  const [results2, setResults2] = useState();
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (form: FormData) => {
    setLoading1(true);
    setLoading2(true);
    setError("");

    try {
      await Promise.all([
        fetchTrip(form)
          .then(results => setResults1(results))
          .then(() => setLoading1(false)),
        fetchOtrl(form)
          .then(results => setResults2(results))
          .then(() => setLoading2(false))
      ]);
    } catch (e) {
      console.log(e);
      setError("Could not load journeys");
    }
  }

  return (
    <main>
      <div className="container">
        <Form onSubmit={onSubmit} stops={stops}/>
        <div className="results row">
          <div className="col-6 pl-0">
            <h2>cTrip</h2>
            <Results loading={loading1} results={results1}/>
          </div>
          <div className="col-6 pr-0">
            <h2>Southern</h2>
            <Results loading={loading2} results={results2}/>
          </div>
          {error}
        </div>
      </div>
    </main>
  );
}

async function fetchOtrl(form: FormData) {
  const url = "https://cors-anywhere.herokuapp.com/https://api.southernrailway.com/jp/journey-plan";
  const headers = {
    "x-access-token": "otrl|a6af56be1691ac2929898c9f68c4b49a0a2d930849770dba976be5d792a"
  };
  const data = {
    "adults": 1,
    "children": 0,
    "destination": form.destination,
    "disableGroupSavings": true,
    "doRealTime": false,
    "filterFares": true,
    "keepAllZoneFares": false,
    "numJourneys": 8,
    "openReturn": false,
    "origin": form.origin,
    "outward": { "arriveDepart": "Depart", "rangeEnd": form.date + "T23:59:59", "rangeStart": form.date + "T" + form.time + ":00"},
    "showCheapest": false
  };

  const response = await axios.post(url, data, { headers });

  return convertOtrl(response.data);
}

async function fetchTrip(form: FormData) {
  const data = {
    "adultCount": 1,
    "arrCrsCode": form.destination.length === 3 ? form.destination : "",
    "arrNlcCode": form.destination.length === 4 ? form.destination : "",
    "childCount": 0,
    "departureDate": form.date + " " + form.time,
    "dptCrsCode": form.origin.length === 3 ? form.origin : "",
    "dptNlcCode": form.origin.length === 4 ? form.origin : "",
    "keepOvertaken": false,
    "maxJourney": -1,
    "openReturn": false,
    "railCardList": [""],
    "returnDate": "",
    "showRouteingDetail": false
  }
  const url = "https://cors-anywhere.herokuapp.com/http://apiproxy-fws.ctripqa.com/apiproxy/train/tisuk/fare/fare/tisSearch";
  const response = await axios.post(url, data);

  return response.data;
}

