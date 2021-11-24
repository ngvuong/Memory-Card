import React, { useRef, useEffect } from "react";

export default function Card({ countries, countryCodes, index, onClick }) {
  console.log(index, countries[countryCodes[index]]);
  const cardRef = useRef();
  useEffect(() => {
    // cardRef.current.addEventListener(
    //   "click",
    //   (e) => (e.target.style.backgroundColor = "red")
    // );
  });
  return (
    <div
      className="flag-card"
      onClick={(e) => {
        e.currentTarget.style.backgroundColor = "red";
        console.log(e.currentTarget);
        onClick(index);
      }}
      ref={cardRef}
    >
      <img
        src={`https://flagcdn.com/${countryCodes[index]}.svg`}
        alt={`${countries[countryCodes[index]]}`}
      />

      <span>{countries[countryCodes[index]]}</span>
    </div>
  );
}
