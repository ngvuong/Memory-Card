import React, { useState } from "react";
import Country from "./Country";

export default function Card(props) {
  const [randInt, setRandInt] = useState(Math.floor(Math.random() * 256));
  return (
    <div className="flag-card">
      <Country
        randInt={randInt}
        onClick={() => setRandInt(Math.floor(Math.random() * 256))}
      />
    </div>
  );
}
