import React from "react";

export default function Card({ countries, countryCodes, index, onClick }) {
  console.log(index, countries[countryCodes[index]]);
  return (
    <div className="flag-card">
      <img
        src={`https://flagcdn.com/${countryCodes[index]}.svg`}
        width="300"
        alt={`${countries[countryCodes[index]]}`}
        onClick={() => onClick(index)}
      />

      <span>{countries[countryCodes[index]]}</span>
    </div>
  );
}
