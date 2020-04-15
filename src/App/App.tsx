import React, { useState } from 'react';
import './App.css';
import { Form, FormData } from "./Form/Form";
import axios from "axios";
import { stops } from "../Data/stops";
import { Results } from "./Results/Results";
import { Journey } from "./Results/JourneyResult/JourneyResult";
import { Leg } from "./Results/JourneyResult/LegResult/LegResult";

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

function convertOtrl(response: any) {
  return {
    outboundJourneyList: response.result.outward
      .map((j: any) => convertJourney(j, response.links))
      .sort((a: Journey, b: Journey) => a.departureDateTime > b.departureDateTime ? 1 : -1)
  };
}

function convertJourney(jf: any, links: any): Journey {
  return {
    departureDateTime: otrlDateTime(links[jf.journey].origin.time.scheduledTime),
    arrivalDateTime: otrlDateTime(links[jf.journey].destination.time.scheduledTime),
    journeyFareList: [{
      farePrice: jf.fares.cheapest.totalPrice / 100,
      cheapest: true
    }],
    tisSegmentList: links[jf.journey].legs.map((l: any) => convertLeg(l, links))
  };
}

function otrlDateTime(dateTime: string) {
  return dateTime.replace("T", " ");
}

function convertLeg(leg: any, links: any): Leg {
  return {
    departureDateTime: leg.fixed ? "" : otrlDateTime(leg.origin[0].time.scheduledTime),
    arrivalDateTime: leg.fixed ? "" : otrlDateTime(leg.destination[0].time.scheduledTime),
    dptStation: {
      nlcCode: links[leg.origin[0].station].nlc,
      crsCode: links[leg.origin[0].station].crs,
    },
    arrStation: {
      nlcCode: links[leg.destination[0].station].nlc,
      crsCode: links[leg.destination[0].station].crs,
    },
    segmentType: leg.fixed ? 1 : 0,
    durationMinutes: leg.transferTime,
    tisCallingPointList: []
  }
}
