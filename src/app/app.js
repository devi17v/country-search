import React, { useEffect, useState } from "react";
import Country from "./country";
import "./app.css";
const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const url = "https://restcountries.com/v3.1/all";
    try {
      const response = await fetch(url);
      const countryList = await response.json();
      countryList.sort(function (a, b) {
        const nameA = a.name.common.toLowerCase();
        const nameB = b.name.common.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

      setCountryData(countryList);
      setCountries(countryList);
    } catch (error) {
      console.log(error);
    }
  };
  const sortCountries = () => {};
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value && value.length >= 1) {
      const filterData = countries.filter((country) => {
        const { name: { common: countryName } = {} } = country;
        const nameLower = countryName.toLowerCase();
        return nameLower.startsWith(value.toLowerCase());
      });
      setCountryData(filterData);
    }

    if (!value) {
      setCountryData(countries);
    }
  };
  return (
    <>
      <h1>World Countries Data</h1>
      <h3>currently, we have {countries.length} countries </h3>
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search countries here"
          onChange={handleInputChange}
        />
      </div>
      <div className="display-all">
        {countryData.map((country) => (
          <Country country={country} />
        ))}
      </div>
    </>
  );
};
export default App;
