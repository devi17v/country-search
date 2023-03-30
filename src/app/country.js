import React from "react";
const Country = ({ country }) => {
  const { name, flags, population, languages = {} } = country;
  const langVal = Object.values(languages);
  const spokenLang = langVal.join(",");
  return (
    <>
      <div className="country-details">
        <div className="country-name">
          <h3>{name.common.toUpperCase()}</h3>
        </div>
        <div className="flag-image">
          <img src={flags.png} alt="flag" />
        </div>
        <div className="details">
          <div className="population">
            <span className="title-wrapper">POPULATION:</span>
            <span>{population}</span>
          </div>
          <div className="languages"></div>
          <span className="title-wrapper">LANGUAGES:</span>
          <span>{spokenLang}</span>
        </div>
      </div>
    </>
  );
};
export default Country;
