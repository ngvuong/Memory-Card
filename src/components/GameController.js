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

  return (
    <div>
      {!isLoading && (
        <Grid
          countries={countriesRef.current}
          countryCodes={countryCodeRef.current}
        />
      )}
    </div>
  );
}
