import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";

export default function Grid(props) {
  const [size, setSize] = useState(2);
  const [isShuffled, setIsShuffled] = useState(false);
  const [skip, setSkip] = useState(true);
  const levelRef = useRef();
  const randIntsRef = useRef();
  const randInts = randIntsRef.current || [];

  useEffect(() => {
    setSize(parseInt(props.level) + 1);
  }, [props.level]);

  // useEffect(() => {
  //   if (!skip) {
  //     randIntsRef.current = [];
  //   }
  //   // setSkip(false);
  // }, [skip, size]);
  console.log(props.level);

  if (props.level !== levelRef.current) {
    randIntsRef.current = [];
  }
  levelRef.current = props.level;
  if (isShuffled) {
    setIsShuffled(false);
  }

  while (randInts.length < size ** 2) {
    const int = Math.floor(Math.random() * 256);
    if (!randInts.includes(int)) {
      randInts.push(int);
    }
  }
  randIntsRef.current = randInts;
  console.log(randIntsRef);
  const onRandomize = () => {
    for (let i = randIntsRef.current.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randIntsRef.current[i], randIntsRef.current[j]] = [
        randIntsRef.current[j],
        randIntsRef.current[i],
      ];
    }
    // setSkip(false);
    setIsShuffled(true);
  };

  return (
    <div>
      {randIntsRef.current.map((int) => {
        return <Card key={int} index={int} onClick={onRandomize} />;
      })}
    </div>
  );
}
