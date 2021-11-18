import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Grid(props) {
  const [size, setSize] = useState(2);
  const randInts = [];

  // useEffect(() => {
  //   setSize(parseInt(props.level) + 1);
  // }, [props.level]);

  while (randInts.length < size ** 2) {
    const int = Math.floor(Math.random() * 10);
    if (!(int in randInts)) {
      randInts.push(int);
    }
    console.log(randInts, int);
  }

  console.log(randInts);
  return (
    <div>
      {randInts.map((int) => {
        return <Card key={int} index={int} />;
      })}
    </div>
  );
}
