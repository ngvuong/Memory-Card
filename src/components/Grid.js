import React from "react";
import Card from "./Card";

export default function Grid({
  countries,
  countryCodes,
  randNums,
  onCardClick,
  size,
}) {
  // const [size, setSize] = useState(2);
  // const [isShuffled, setIsShuffled] = useState(false);
  // const randIntsRef = useRef();
  // const [randNums, setRandNums] = useState([]);
  // const randInts = randNums;
  // const [isClicked, setIsClicked] = useState({});
  // const isFirstRender = useRef(true);
  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     return;
  //   }
  //   setSize(parseInt(props.level) + 1);
  //   setRandNums([]);
  //   console.log("set size");
  // }, [props.level]);

  // // useEffect(() => {
  // //   if (!skip) {
  // //     randIntsRef.current = [];
  // //   }
  // //   // setSkip(false);
  // // }, [skip, size]);

  // if (isShuffled) {
  //   setIsShuffled(false);
  // }

  // while (randInts.length < size ** 2) {
  //   const int = Math.floor(Math.random() * 256);
  //   if (!randInts.includes(int)) {
  //     randInts.push(int);
  //     setIsClicked((prevState) => {
  //       return { ...prevState, [int]: false };
  //     });
  //   }
  // }
  // randIntsRef.current = randInts;
  // useEffect(() => {
  //   setRandNums(randInts);
  //   // console.log(randNums);
  // }, [randInts]);
  // console.log(randIntsRef);

  // const onCardClick = (index) => {
  //   for (let i = randIntsRef.current.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [randIntsRef.current[i], randIntsRef.current[j]] = [
  //       randIntsRef.current[j],
  //       randIntsRef.current[i],
  //     ];
  //   }
  //   setIsClicked((prevState) => {
  //     const newState = { ...prevState, [index]: true };
  //     console.log(newState);
  //     const allClicked = Object.keys(newState).every(
  //       (key) => newState[key] === true
  //     );
  //     if (allClicked) {
  //       console.log("all clicked");
  //     }
  //     return newState;
  //   });
  //   // console.log(isClicked);
  //   // setSkip(false);
  //   setIsShuffled(true);
  // };

  return (
    <div
      className="card-grid"
      style={{ gridTemplateColumns: `repeat(${size},1fr)` }}
    >
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
