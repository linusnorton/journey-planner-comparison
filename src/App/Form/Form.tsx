import * as React from "react";
import {ChangeEvent, useState} from "react";
import {StopData, StopSelector} from "./StopSelector/StopSelector";

import "./Form.css";
import {railcards} from "../../Data/railcards";

export function Form({ onSubmit, stops }: FormInputProps) {
  const urlParams = new URLSearchParams(window.location.search);
  const defaultOrigin = urlParams.get("origin");
  const defaultDestination = urlParams.get("destination");
  const defaultDate = urlParams.get("outwardDate") ? new Date(urlParams.get("outwardDate")!) : oneMonthFromNow();
  const defaultTime = urlParams.get("outwardTime");
  const defaultReturnDate = urlParams.get("returnDate") ? new Date(urlParams.get("returnDate")!) : null;
  const defaultReturnTime = urlParams.get("returnTime");

  const [origin, setOrigin] = useState(defaultOrigin || "");
  const [destination, setDestination] = useState(defaultDestination || "");
  const [outwardDate, setOutwardDate] = useState(defaultDate);
  const [outwardTime, setOutwardTime] = useState(defaultTime || "14:00");
  const [returnDate, setReturnDate] = useState(defaultReturnDate);
  const [returnTime, setReturnTime] = useState(defaultReturnTime || "");
  const [extraOptionsOpen, setExtraOptionsOpen] = useState(false);
  const [adults, setAdults] = useState(+(urlParams.get("adults") || 1));
  const [children, setChildren] = useState(+(urlParams.get("children") || 0));
  const [railcard, setRailcard] = useState(urlParams.get("railcard") || "");

  const currentValues =  {
    origin,
    destination,
    outwardDate: outwardDate.toISOString().substr(0, 10),
    outwardTime,
    returnDate: returnDate ? returnDate.toISOString().substr(0, 10) : "",
    returnTime,
    adults,
    children,
    railcards: railcard
  }

  const onChangeOrigin = (value: string) => {
    setOrigin(value);
    detectFormComplete({ origin: value });
  }

  const onChangeDestination = (value: string) => {
    setDestination(value);
    detectFormComplete({ destination: value });
  }

  const onChangeOutwardDate = (e: ChangeEvent<HTMLInputElement>) => {
    const d = new Date(e.target.value)
    setOutwardDate(d);
    detectFormComplete({ outwardDate: d.toISOString().substr(0, 10) });
  }

  const onChangeOutwardTime = (e: ChangeEvent<HTMLInputElement>) => {
    setOutwardTime(e.target.value);
    detectFormComplete({ outwardTime: e.target.value });
  }

  const onChangeReturnDate = (e: ChangeEvent<HTMLInputElement>) => {
    const d = new Date(e.target.value)
    setReturnDate(d);
    detectFormComplete({ returnDate: d.toISOString().substr(0, 10) });
  }

  const onChangeReturnTime = (e: ChangeEvent<HTMLInputElement>) => {
    setReturnTime(e.target.value);
    detectFormComplete({ returnTime: e.target.value });
  }

  const onNumAdultsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAdults(+e.target.value);
    detectFormComplete({ adults: +e.target.value });
  }

  const onNumChildrenChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChildren(+e.target.value);
    detectFormComplete({ children: +e.target.value });
  }

  const onRailcardChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRailcard(e.target.value);
    detectFormComplete({ railcards: e.target.value });
  }

  const detectFormComplete = (change: Partial<FormData>) => {
    const formData = { ...currentValues, ...change } as FormData;
    if (formData.origin.length > 2 && formData.destination.length > 2 && formData.outwardTime.length === 5) {
      onSubmit(formData);
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
      <input id="adults" className="form-control" placeholder="adults" value={adults} onChange={onNumAdultsChange} name="adults" type="number"/>
    </div>
    <div className="col-1 pr-0">
      <label htmlFor="children">
        Children
      </label>
      <input id="children" className="form-control" placeholder="children" value={children} onChange={onNumChildrenChange} name="children" type="number"/>
    </div>
    <div className="col-3 pr-0">
      <label htmlFor="railcard">
        Railcard
      </label>
      <select id="railcard" className="form-control" placeholder="railcard" name="railcard" onChange={onRailcardChange}>
        <option key="public" value="">None</option>
        { railcards.map(r => <option key={r.value} value={r.value}>{r.label}</option> )}
      </select>
    </div>
    <div className="col-3 pr-0">
      <label htmlFor="returnDate">
        Return Date
      </label>
      <input id="returnDate" className="form-control" placeholder="date" value={currentValues.returnDate} onChange={onChangeReturnDate} name="returnDate" type="date"/>
    </div>
    <div className="col-2 pr-0">
      <label htmlFor="returnTime">
        Return Time
      </label>
      <input id="returnTime" className="form-control" placeholder="time" value={returnTime} onChange={onChangeReturnTime} name="returnTime" type="text"/>
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
          <input className="form-control" placeholder="date" value={outwardDate.toJSON().slice(0, 10)} onChange={onChangeOutwardDate} name="date" type="date"/>
        </div>
        <div className="col-2 pr-0">
          <input className="form-control" placeholder="time" value={outwardTime} onChange={onChangeOutwardTime} name="time" type="text"/>
        </div>
        <div className="col-1 pr-0 pt-2">
          <a href="#advanced" onClick={onExtraOptionsClick}>{ extraOptionsOpen ? " less ^" : "more v" }</a>
        </div>
      </div>
      { extraOptions }
    </>
  )
}

function oneMonthFromNow() {
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
  outwardDate: string,
  outwardTime: string,
  returnDate: string,
  returnTime: string,
  adults: number,
  children: number,
  railcards: string
}