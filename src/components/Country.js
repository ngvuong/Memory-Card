import React, { useState, useEffect, useRef } from "react";

export default function Country(props) {
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
  }, []);

  return (
    <React.Fragment>
      {!isLoading && (
        <img
          src={`https://flagcdn.com/${countryCodeRef.current[props.index]}.svg`}
          width="300"
          alt={`${countriesRef.current[countryCodeRef.current[props.index]]}`}
        />
      )}
      <span>
        {!isLoading &&
          `${countriesRef.current[countryCodeRef.current[props.index]]}`}
      </span>
    </React.Fragment>
  );
}
