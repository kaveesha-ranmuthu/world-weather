import React from "react";
import { useGlobalContext } from "./context";
import { WiSunrise, WiSunset, WiMoonrise, WiMoonset } from "react-icons/wi";

const Weather = () => {
  const { city, weather, defaultCountry } = useGlobalContext();
  try {
    const todayForecast = weather.forecast.forecastday[0].day;
    const astro = weather.forecast.forecastday[0].astro;
    return (
      <div className="forecast">
        <div className="weather-cont">
          <h3>
            {city}, {defaultCountry}
          </h3>
          <h1>{weather.current.temp_c}&#176;C</h1>
          <h4>{weather.current.condition.text}</h4>
          <p>Feels like: {weather.current.feelslike_c}&#176;C</p>
          <p>Humidity: {weather.current.humidity}% </p>
          <p>Pressure: {weather.current.pressure_mb} hPa</p>
          <p>Chance of rain: {todayForecast.daily_chance_of_rain}%</p>
          <p>
            Wind: {weather.current.wind_dir} {weather.current.wind_kph} km/h
          </p>
        </div>
        <div className="sunrise-cont">
          <WiSunrise size={50} />
          <p>{astro.sunrise}</p>
          <br />
          <WiSunset size={50} style={{ marginTop: "-10px" }} />
          <p>{astro.sunset}</p>
          <br />
          <WiMoonrise size={50} style={{ marginTop: "-10px" }} />
          <p>{astro.moonrise}</p>
          <br />
          <WiMoonset size={50} style={{ marginTop: "-10px" }} />
          <p>{astro.moonset}</p>
        </div>
      </div>
    );
  } catch (error) {
    return <div></div>;
  }
};

export default Weather;
