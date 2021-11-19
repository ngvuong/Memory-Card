import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";

export default function Grid(props) {
  const [size, setSize] = useState(2);
  const [isShuffled, setIsShuffled] = useState(false);
  const randIntsRef = useRef();
  const randInts = [];

  useEffect(() => {
    setSize(parseInt(props.level) + 1);
  }, [props.level]);

  while (randInts.length < size ** 2) {
    const int = Math.floor(Math.random() * 256);
    if (!randInts.includes(int)) {
      randInts.push(int);
    }
  }

  randIntsRef.current = randInts;

  return (
    <div>
      {randInts.map((int) => {
        return <Card key={int} index={int} />;
      })}
      {randIntsRef.current.map((int) => {
        return <Card key={int} index={int} />;
      })}
    </div>
  );
}
