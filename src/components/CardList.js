import React from "react";
import Card from "./Card";

export default function CardList({
  countries,
  countryCodes,
  randNums,
  onCardClick,
}) {
  return (
    <div className="card-list">
      {randNums.map((int) => {
        return (
          <Card
            key={int}
            index={int}
            onClick={onCardClick}
            countries={countries}
            countryCodes={countryCodes}
          />
        );
      })}
    </div>
  );
}
