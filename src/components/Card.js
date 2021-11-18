import React from "react";
import Country from "./Country";

export default function Card(props) {
  return (
    <div className="flag-card">
      <Country index={props.index} />
    </div>
  );
}
