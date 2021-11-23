import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";

export default function Grid(props) {
  const [size, setSize] = useState(2);
  const [isShuffled, setIsShuffled] = useState(false);
  const [skip, setSkip] = useState(true);
  const levelRef = useRef();
  const randIntsRef = useRef();
  const [randNums, setRandNums] = useState([]);
  const randInts = randNums;
  const [isClicked, setIsClicked] = useState({});

  // useEffect(() => {
  //   setSize(parseInt(props.level) + 1);
  //   console.log("set size");
  // }, [props.level]);

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
      setIsClicked((prevState) => {
        return { ...prevState, [int]: false };
      });
    }
  }
  randIntsRef.current = randInts;
  useEffect(() => {
    setRandNums(randInts);
    console.log(randNums);
  }, [randInts]);
  console.log(randIntsRef);
  const onCardClick = (index) => {
    for (let i = randIntsRef.current.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randIntsRef.current[i], randIntsRef.current[j]] = [
        randIntsRef.current[j],
        randIntsRef.current[i],
      ];
    }
    setIsClicked({ ...isClicked, [index]: true });
    console.log(isClicked);
    // setSkip(false);
    setIsShuffled(true);
  };
  return (
    <React.Fragment>
      {randNums.map((int) => {
        return (
          <Card
            key={int}
            index={int}
            onClick={onCardClick}
            countries={props.countries}
            countryCodes={props.countryCodes}
          />
        );
      })}
    </React.Fragment>
  );
}
