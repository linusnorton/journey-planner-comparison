import React, { FormEvent, useState } from "react";
import './StopSelector.css';
import Autosuggest, {
  ChangeEvent,
  SuggestionSelectedEventData,
  SuggestionsFetchRequestedParams
} from "react-autosuggest";
import { Stop } from "../../../Data/stops";

export function StopSelector({ id, stops, onChange }: StopSelectorProps) {
  const [suggestions, setSuggestions] = useState(stops);
  const [inputValue, setInputValue] = useState("");

  const onSelectedChange = (event: FormEvent<any>, selected: SuggestionSelectedEventData<Stop>) => {
    onChange(selected.suggestion.code);
  };

  const onInputChange = (event: FormEvent<any>, { newValue }: ChangeEvent) => {
    setInputValue(newValue);
  };

  const onBlur = (event: React.FocusEvent<any>, params?: Autosuggest.BlurEvent<Stop>) => {
    if (params && params.highlightedSuggestion) {
      onChange(params.highlightedSuggestion.code);
      setInputValue(params.highlightedSuggestion.name);
    }
  };

  const onSuggestionsFetchRequested = ({ value } : SuggestionsFetchRequestedParams) => {
    const inputValue = value.trim().toUpperCase();
    const results = inputValue.length < 3 ? [] : stops.filter(stop =>
      stop.crs === inputValue || stop.name.toUpperCase().includes(inputValue)
    );

    results.sort((a, b) => a.name.length - b.name.length);

    setSuggestions(results);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions(stops);
  };

  return (
    <Autosuggest
      id={id}
      highlightFirstSuggestion={true}
      suggestions={suggestions}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionSelected={onSelectedChange}
      inputProps={{
        value: inputValue,
        id: id,
        placeholder: id,
        onChange: onInputChange,
        className: "form-control",
        onBlur: onBlur
      }}
    />
  );
}

function getSuggestionValue(stop: Stop) {
  return stop.name;
}

function renderSuggestion(stop: Stop) {
  return (
    <span>{stop.name}</span>
  );
}

export type StopData = Stop[];

export interface StopSelectorProps {
  id: string,
  stops: StopData,
  onChange: (value: string) => any
}