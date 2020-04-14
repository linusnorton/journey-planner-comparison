import * as React from "react";
import { ChangeEvent, useState } from "react";
import { StopData, StopSelector } from "./StopSelector/StopSelector";

import "./Form.css";

export function Form({ onSubmit, stops }: FormInputProps) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const defaultDate = new Date();
  defaultDate.setMonth(defaultDate.getMonth() + 1);

  const [date, setDate] = useState(defaultDate);
  const [time, setTime] = useState("14:00");

  const onChangeOrigin = (value: string) => {
    setOrigin(value);
    detectFormComplete(value, destination, date, time);
  }

  const onChangeDestination = (value: string) => {
    setDestination(value);
    detectFormComplete(origin, value, date, time);
  }

  const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    const d = new Date(e.target.value)
    setDate(d);
    detectFormComplete(origin, destination, d, time);
  }

  const onChangeTime = (e: ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
    detectFormComplete(origin, destination, date, e.target.value);
  }

  const detectFormComplete = (o: string, d: string, dt: Date, t: string) => {
    if (o.length > 2 && d.length > 2 && t.length === 5) {
      onSubmit({ origin: o, destination: d , time: t, date: dt.toISOString().substr(0, 10) });
    }
  }

  return (
    <div className="row">
      <div className="col-3 px-0">
        <StopSelector id="origin" onChange={onChangeOrigin} stops={stops} />
      </div>
      <div className="col-3 pr-0">
        <StopSelector id="destination" onChange={onChangeDestination} stops={stops} />
      </div>
      <div className="col-3 pr-0">
        <input className="form-control" placeholder="date" value={date.toJSON().slice(0, 10)} onChange={onChangeDate} name="date" type="date"/>
      </div>
      <div className="col-3 pr-0">
        <input className="form-control" placeholder="time" value={time} onChange={onChangeTime} name="time" type="text"/>
      </div>
    </div>
  )
}

export interface FormInputProps {
  onSubmit: (form: FormData) => any,
  stops: StopData
}

export interface FormData {
  origin: string,
  destination: string,
  date: string,
  time: string
}