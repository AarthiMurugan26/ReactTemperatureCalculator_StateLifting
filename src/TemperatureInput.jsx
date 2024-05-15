import React from "react";
import './App.css';
export const TemperatureInput = ({ unit, temperature, onChangeOfTemperature }) => {
  const onChangeOfTemp = (event) => {
    onChangeOfTemperature(event.target.value)
  }

  return (
    <fieldset>
      <legend>Enter Temperature In {unit}</legend>
      <input value={temperature} onChange={onChangeOfTemp} />
    </fieldset>
  )
}
