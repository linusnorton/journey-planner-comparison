import * as React from "react";
import {ChangeEvent, useState} from "react";
import {StopData, StopSelector} from "./StopSelector/StopSelector";

import "./Form.css";
import {railcards} from "../../Data/railcards";

export function Form({ onSubmit, stops }: FormInputProps) {
  const urlParams = new URLSearchParams(window.location.search);
  const defaultOrigin = urlParams.get("origin");
  const defaultDestination = urlParams.get("destination");
  const defaultDate = urlParams.get("date") ? new Date(urlParams.get("date")!) : onceMonthFromNow();
  const defaultTime = urlParams.get("time");

  const [origin, setOrigin] = useState(defaultOrigin || "");
  const [destination, setDestination] = useState(defaultDestination || "");
  const [date, setDate] = useState(defaultDate);
  const [time, setTime] = useState(defaultTime || "14:00");
  const [extraOptionsOpen, setExtraOptionsOpen] = useState(false);
  const [numAdults, setNumAdults] = useState(+(urlParams.get("adults") || 1));
  const [numChildren, setNumChildren] = useState(+(urlParams.get("children") || 0));
  const [railcard, setRailcard] = useState(urlParams.get("railcard") || "");

  const onChangeOrigin = (value: string) => {
    setOrigin(value);
    detectFormComplete(value, destination, date, time, numAdults, numChildren, railcard);
  }

  const onChangeDestination = (value: string) => {
    setDestination(value);
    detectFormComplete(origin, value, date, time, numAdults, numChildren, railcard);
  }

  const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    const d = new Date(e.target.value)
    setDate(d);
    detectFormComplete(origin, destination, d, time, numAdults, numChildren, railcard);
  }

  const onChangeTime = (e: ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
    detectFormComplete(origin, destination, date, e.target.value, numAdults, numChildren, railcard);
  }

  const onNumAdultsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumAdults(+e.target.value);
    detectFormComplete(origin, destination, date, time, +e.target.value, numChildren, railcard);
  }

  const onNumChildrenChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumChildren(+e.target.value);
    detectFormComplete(origin, destination, date, time, numAdults, +e.target.value, railcard);
  }

  const onRailcardChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRailcard(e.target.value);
    detectFormComplete(origin, destination, date, time, numAdults, numChildren, e.target.value);
  }

  const detectFormComplete = (o: string, d: string, dt: Date, t: string, na: number, nc: number, rc: string) => {
    if (o.length > 2 && d.length > 2 && t.length === 5) {
      onSubmit({
        origin: o,
        destination: d ,
        time: t,
        date: dt.toISOString().substr(0, 10),
        adults: na,
        children: nc,
        railcards: rc
      });
    }
  }

  const onExtraOptionsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setExtraOptionsOpen(!extraOptionsOpen);
  }

  const extraOptions = extraOptionsOpen && <div className="row pt-4">
    <div className="col-1 px-0">
      <label htmlFor="adults">
        Adults
      </label>
      <input id="adults" className="form-control" placeholder="adults" value={numAdults} onChange={onNumAdultsChange} name="adults" type="number"/>
    </div>
    <div className="col-1 pr-0">
      <label htmlFor="children">
        Children
      </label>
      <input id="children" className="form-control" placeholder="children" value={numChildren} onChange={onNumChildrenChange} name="children" type="number"/>
    </div>
    <div className="col-3 pr-0">
      <label htmlFor="railcard">
        Railcard
      </label>
      <select id="railcard" className="form-control" placeholder="railcard" name="railcard" onChange={onRailcardChange}>
        <option value="">None</option>
        { railcards.map(r => <option id={r.value} value={r.value}>{r.label}</option> )}
      </select>
    </div>
  </div>;

  return (
    <>
      <div className="row">
        <div className="col-3 px-0">
          <StopSelector id="origin" onChange={onChangeOrigin} stops={stops} defaultValue={defaultOrigin} />
        </div>
        <div className="col-3 pr-0">
          <StopSelector id="destination" onChange={onChangeDestination} stops={stops} defaultValue={defaultDestination}/>
        </div>
        <div className="col-3 pr-0">
          <input className="form-control" placeholder="date" value={date.toJSON().slice(0, 10)} onChange={onChangeDate} name="date" type="date"/>
        </div>
        <div className="col-2 pr-0">
          <input className="form-control" placeholder="time" value={time} onChange={onChangeTime} name="time" type="text"/>
        </div>
        <div className="col-1 pr-0 pt-2">
          <a href="#" onClick={onExtraOptionsClick}>{ extraOptionsOpen ? " less ^" : "more v" }</a>
        </div>
      </div>
      { extraOptions }
    </>
  )
}

function onceMonthFromNow() {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);

  return date;
}

export interface FormInputProps {
  onSubmit: (form: FormData) => any,
  stops: StopData
}

export interface FormData {
  origin: string,
  destination: string,
  date: string,
  time: string,
  adults: number,
  children: number,
  railcards: string
}