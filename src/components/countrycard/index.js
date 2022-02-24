import React from "react";
import "./style.css";

const CountryCard = ({ country, onClick, id }) => {
  if (!country) {
    return <div>BBBB</div>;
  }

  return (
    <div key={id} className="country-card" onClick={onClick}>
      <div className="country-card-image">
        <img
          src={country.flags.png}
          height={200}
          width={300}
          alt={country.name + " " + "flag"}
        />
      </div>
      <div className="country-card-content">
        <h2>{country.name}</h2>
        <div className="card_text">
          <span>Population:</span> {country.population}
        </div>
        <div className="card_text">
          <span>Region:</span> {country.region}
        </div>
        <div className="card_text">
          <span>Capital:</span> {country.capital}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
