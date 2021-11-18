import React, { useState, useEffect, useRef } from "react";

export default function Countries() {
  const countriesRef = useRef();
  const countryCodeRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  let randInt;
  if (!isLoading) {
    randInt = Math.floor(Math.random() * 256);
  }
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
  }, []);

  const onRandomize = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  return (
    <div>
      {!isLoading && (
        <img
          src={`https://flagcdn.com/${countryCodeRef.current[randInt]}.svg`}
          width="300"
          alt={`${countriesRef.current[countryCodeRef.current[randInt]]}`}
          onClick={onRandomize}
        />
      )}
      {!isLoading && `${countriesRef.current[countryCodeRef.current[randInt]]}`}
      <button onClick={onRandomize}>Randomize</button>
    </div>
  );
}
