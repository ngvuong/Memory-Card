import React from "react";

export default function Card({ countries, countryCodes, index, onClick }) {
  return (
    // Pass back index identifier to parent component on click
    <div className="card" onClick={(e) => onClick(index)}>
      <img
        src={`https://flagcdn.com/${countryCodes[index]}.svg`}
        alt={`${countries[countryCodes[index]]}`}
      />

      <span>{countries[countryCodes[index]]}</span>
    </div>
  );
}
