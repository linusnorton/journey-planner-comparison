import React, { FormEvent, useState } from "react";
import './StopSelector.css';
import Autosuggest, {
  ChangeEvent, SuggestionHighlightedParams,
  SuggestionSelectedEventData,
  SuggestionsFetchRequestedParams
} from "react-autosuggest";
import { Stop } from "../../../Data/stops";

export function StopSelector({ id, stops, onChange }: StopSelectorProps) {
  const [suggestions, setSuggestions] = useState(stops);
  const [inputValue, setInputValue] = useState("");
  const [highlighted, setHighlighted] = useState();

  const onSelectedChange = (event: FormEvent<any>, selected: SuggestionSelectedEventData<Stop>) => {
    setHighlighted(undefined);
    onChange(selected.suggestion.code);
  };

  const onInputChange = (event: FormEvent<any>, { newValue }: ChangeEvent) => {
    setInputValue(newValue);
  };

  const onBlur = (event: React.FocusEvent<any>, params?: Autosuggest.BlurEvent<Stop>) => {
    if (highlighted) {
      onChange(highlighted.code);
      setInputValue(highlighted.name);
    }
  };

  const onHighlighted = (params: SuggestionHighlightedParams) => {
    setHighlighted(params.suggestion);
  }

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
      highlightFirstSuggestion={false}
      suggestions={suggestions}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionSelected={onSelectedChange}
      onSuggestionHighlighted={onHighlighted}
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