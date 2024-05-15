
import React from 'react';
import './App.css';
import { TemperatureInput } from "./TemperatureInput";
import { BoilingState } from "./Boilingstate";


export const Calculator = () => {

  const [unit, setUnit] = React.useState('celsiusUnit')
  const [temperature, setTemperature] = React.useState('');
  const changeInCelsius = (value) => {
    setUnit('celsiusUnit');
    setTemperature(value);
  }
  const changeInFarenheit = (value) => {
    setUnit('farenheitUnit');
    setTemperature(value);
  }

  const celsius = unit === 'farenheitUnit' ? parseFloat(((temperature - 32) * 5) / 9).toFixed(2) : temperature;
  const farenheit = unit === 'celsiusUnit' ? parseFloat((temperature * 9) / 5 + 32).toFixed(2) : temperature;


  return (
    <div>
      <TemperatureInput unit='Celsius' temperature={celsius} onChangeOfTemperature={changeInCelsius} />
      <TemperatureInput unit='Farenheit' temperature={farenheit} onChangeOfTemperature={changeInFarenheit} />
      <BoilingState celsius={parseInt(celsius)} />
    </div>
  );
}






