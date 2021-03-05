import React, { useState, useContext, useEffect } from "react";

const citiesUrl = "https://countriesnow.space/api/v0.1/countries/cities";
const weatherUrl =
  "http://api.weatherapi.com/v1/forecast.json?key=4cb8917c56064111877215447210602&q=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [country, setCountry] = useState("");
  const [defaultCountry, setDefaultCountry] = useState("None");
  const [defaultCity, setDefaultCity] = useState("None");

  const fetchCities = async () => {
    setCities([]);
    setDefaultCity("None");
    try {
      const response = await fetch(citiesUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          country: country,
        }),
      });
      const cityList = await response.json();
      setCities(cityList.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const fetchWeather = async () => {
    setIsLoading(true);
    setDefaultCountry(country);
    setDefaultCity(city);
    try {
      const response = await fetch(
        weatherUrl + city + ", " + country + "&days=1"
      );
      const weatherResp = await response.json();
      console.log(weatherResp);
      setWeather(weatherResp);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCities();
  }, [country]);

  useEffect(() => {
    fetchWeather();
  }, [city]);

  useEffect(() => {
    document.title = "World Weather";
  }, []);

  return (
    <AppContext.Provider
      value={{
        cities,
        setCities,
        setIsLoading,
        isLoading,
        city,
        setCity,
        weather,
        country,
        setCountry,
        defaultCountry,
        defaultCity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
