import React, { useState, useEffect, useRef } from "react";
import Grid from "./Grid";

export default function GameController() {
  const countriesRef = useRef();
  const countryCodeRef = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://flagcdn.com/en/codes.json").then((res) => {
      res.json().then((data) => {
        countriesRef.current = JSON.parse(JSON.stringify(data));
        countryCodeRef.current = Object.keys(countriesRef.current).filter(
          (key) => !key.includes("us-")
        );
        setIsLoading(false);
      });
    });
    console.log("fetched");
  }, []);

  const [level, setLevel] = useState(1);
  const [size, setSize] = useState(2);
  const [isShuffled, setIsShuffled] = useState(false);
  const randIntsRef = useRef();
  const [randNums, setRandNums] = useState([]);
  const randInts = randNums;
  const [isClicked, setIsClicked] = useState({});
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setSize(parseInt(level) + 1);
    setRandNums([]);
    console.log("set size");
  }, [level]);

  // useEffect(() => {
  //   if (!skip) {
  //     randIntsRef.current = [];
  //   }
  //   // setSkip(false);
  // }, [skip, size]);

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
    // console.log(randNums);
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
    setIsClicked((prevState) => {
      const newState = { ...prevState, [index]: true };
      console.log(newState);
      const allClicked = Object.keys(newState).every(
        (key) => newState[key] === true
      );
      if (allClicked) {
        console.log("all clicked");
      }
      return newState;
    });
    // console.log(isClicked);
    // setSkip(false);
    setIsShuffled(true);
  };

  return (
    <div>
      {!isLoading && (
        <Grid
          countries={countriesRef.current}
          countryCodes={countryCodeRef.current}
          randNums={randNums}
          onCardClick={onCardClick}
        />
      )}
    </div>
  );
}
