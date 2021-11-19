// import React, { useState, useEffect, useRef } from "react";
// import Card from "./components/Card";
import Grid from "./components/Grid";
import "./styles/App.css";

function App() {
  // const countriesRef = useRef();
  // const countryCodeRef = useRef();
  // const [isLoading, setIsLoading] = useState(true);
  // let randInt;
  // if (!isLoading) {
  //   randInt = Math.floor(Math.random() * 256);
  // }
  // useEffect(() => {
  //   fetch("https://flagcdn.com/en/codes.json").then((res) => {
  //     res.json().then((data) => {
  //       countriesRef.current = JSON.parse(JSON.stringify(data));
  //       countryCodeRef.current = Object.keys(countriesRef.current).filter(
  //         (key) => !key.includes("us-")
  //       );
  //       setIsLoading(false);
  //     });
  //   });
  // }, []);

  // const onRandomize = () => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 100);
  // };

  const int = Math.floor(Math.random() * 2) + 1;
  console.log(int);
  return (
    <div className="App">
      {/* <Card /> */}
      <Grid level={int} />
    </div>
  );
}

export default App;
