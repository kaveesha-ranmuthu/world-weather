import React from "react";
import { useGlobalContext } from "./context";
import countries from "./countries";

const ChooseCountry = () => {
  const { setCountry, defaultCountry } = useGlobalContext();
  const handleSelect = (e) => {
    if (e.target.value) {
      setCountry(e.target.value);
    }
  };
  return (
    <div className="select-container">
      <label htmlFor="countryList">Choose a country:</label>
      <select
        name="countryList"
        id="countryList"
        onChange={handleSelect}
        defaultValue=""
      >
        <option value="" disabled={true}>
          {defaultCountry}
        </option>
        {countries.map((country, index) => {
          return (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ChooseCountry;
