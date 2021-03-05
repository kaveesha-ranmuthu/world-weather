import React from "react";
import Weather from "./Weather";
import ChooseCity from "./ChooseCity";
import ChooseCountry from "./ChooseCountry";
import { useGlobalContext } from "./context";
import Loading from "./Loading";

function App() {
  const { isLoading, city, country } = useGlobalContext();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      {city && <Weather />}
      <ChooseCountry />
      {country && <ChooseCity />}
    </div>
  );
}

export default App;
