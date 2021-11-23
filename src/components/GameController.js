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
  const gridSize = level + 1;
  // const [isShuffled, setIsShuffled] = useState(false);
  const randIntsRef = useRef([]);
  // const [randNums, setRandNums] = useState([]);
  const randInts = randIntsRef.current;
  const setIsClicked = useState({})[1];
  // const isFirstRender = useRef(true);

  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     return;
  //   }
  //   randIntsRef.current = [];
  //   setIsClicked({});

  //   console.log("set gridSize");
  // }, [level, setIsClicked]);

  // if (isShuffled) {
  //   setIsShuffled(false);
  // }

  useEffect(() => {
    while (randInts.length < gridSize ** 2) {
      const int = Math.floor(Math.random() * 256);
      if (!randInts.includes(int)) {
        randInts.push(int);
        setIsClicked((prevState) => {
          return { ...prevState, [int]: false };
        });
      }
    }
    randIntsRef.current = randInts;
  }, [randInts, gridSize, setIsClicked]);

  console.log(randIntsRef.current);

  const shuffle = () => {
    for (let i = randIntsRef.current.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      while (i === j) {
        j = Math.floor(Math.random() * (i + 1));
      }

      [randIntsRef.current[i], randIntsRef.current[j]] = [
        randIntsRef.current[j],
        randIntsRef.current[i],
      ];
    }
  };

  const restartGame = () => {
    randIntsRef.current = [];
    setIsClicked({});
    setLevel(1);
  };

  const onCardClick = (index) => {
    shuffle();
    setIsClicked((prevState) => {
      if (prevState[index] === true) {
        restartGame();
      }
      const newState = { ...prevState, [index]: true };
      console.log(newState);
      const allClicked = Object.keys(newState).every(
        (key) => newState[key] === true
      );
      if (allClicked) {
        randIntsRef.current = [];
        setIsClicked({});

        setLevel(level + 1);
        console.log("all clicked");
      }
      return newState;
    });
    // console.log(isClicked);
    // setSkip(false);
    // setIsShuffled(true);
  };

  return (
    <div>
      {!isLoading && (
        <Grid
          countries={countriesRef.current}
          countryCodes={countryCodeRef.current}
          randNums={randIntsRef.current}
          onCardClick={onCardClick}
          size={gridSize}
        />
      )}
    </div>
  );
}
