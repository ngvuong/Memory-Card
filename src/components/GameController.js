import React, { useState, useEffect, useRef } from "react";
import CardList from "./CardList";
import ScoreBoard from "./ScoreBoard";

export default function GameController() {
  const countryRef = useRef();
  const countryCodeRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  // Fetching and saving country data on mount
  useEffect(() => {
    fetch("https://flagcdn.com/en/codes.json").then((res) => {
      res.json().then((data) => {
        countryRef.current = JSON.parse(JSON.stringify(data));
        countryCodeRef.current = Object.keys(countryRef.current).filter(
          (key) => !key.includes("us-")
        );
        setIsLoading(false);
      });
    });
    console.log("fetched");
  }, []);

  const [level, setLevel] = useState(1);
  const [isClicked, setIsClicked] = useState({});
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const randIntsRef = useRef([]);

  const size = level * 2;
  const randInts = randIntsRef.current;

  useEffect(() => {
    while (randInts.length < size) {
      const int = Math.floor(Math.random() * 256);
      if (!randInts.includes(int)) {
        randInts.push(int);
        setIsClicked((prevState) => {
          return { ...prevState, [int]: false };
        });
      }
    }
    randIntsRef.current = randInts;
  }, [randInts, size]);

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
    setScore(0);
  };

  const onCardClick = (index) => {
    if (isClicked[index] === true) {
      restartGame();
      return;
    }
    shuffle();
    setIsClicked((prevState) => {
      const newState = { ...prevState, [index]: true };
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
    setScore((prevScore) => {
      const newScore = prevScore + 1;
      console.log(prevScore, newScore);
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
      return newScore;
    });
  };

  return (
    <main>
      <ScoreBoard level={level} score={score} bestScore={bestScore} />
      {!isLoading && (
        <CardList
          countries={countryRef.current}
          countryCodes={countryCodeRef.current}
          randNums={randIntsRef.current}
          onCardClick={onCardClick}
          size={size}
        />
      )}
    </main>
  );
}
