import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./context";

const ChooseCity = () => {
  const { setCity, cities, defaultCity } = useGlobalContext();

  if (!cities) {
    return (
      <div className="select-container">
        <label htmlFor="cityList">Choose a city:</label>
        <select name="cityList" id="cityList">
          <option value="">None</option>
        </select>
      </div>
    );
  }

  const handleSelect = (e) => {
    if (e.target.value) {
      setCity(e.target.value);
    }
  };

  return (
    <div className="select-container">
      <label htmlFor="cityList">Choose a city:</label>
      <select
        name="cityList"
        id="cityList"
        onChange={handleSelect}
        defaultValue=""
      >
        <option value="" disabled={true}>
          {defaultCity}
        </option>
        {cities.map((city, index) => {
          return (
            <option key={index} value={city}>
              {city}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ChooseCity;
