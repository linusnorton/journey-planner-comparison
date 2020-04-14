import React, { useState } from 'react';
import './App.css';
import { Form, FormData } from "./Form/Form";
import axios from "axios";
import { stops } from "../Data/stops";
import { Results } from "./Results/Results";

export function App() {
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (form: FormData) => {
    setLoading(true);

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
    const url = "http://apiproxy-fws.ctripqa.com/apiproxy/train/tisuk/fare/fare/tisSearch";

    try {
      const response = await axios.post(url, data);

      setLoading(false);
      setResults(response.data);
    } catch (e) {
      setLoading(false);
      setError(e);
    }

  }

  return (
    <main>
      <div className="container">
        <Form onSubmit={onSubmit} stops={stops}/>
        <Results loading={loading} results={results}/>
        {error}
      </div>
    </main>
  );
}

