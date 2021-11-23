import React from "react";

export default function Card({ countries, countryCodes, index, onClick }) {
  return (
    <div className="flag-card">
      <img
        src={`https://flagcdn.com/${countryCodes[index]}.svg`}
        width="300"
        alt={`${countries[countryCodes[index]]}`}
        onClick={onClick}
      />

      <span>{countries[countryCodes[index]]}</span>
    </div>
  );
}
