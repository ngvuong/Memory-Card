import React from "react";
import GameController from "./components/GameController";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Memory Master</h1>
      <GameController />
    </div>
  );
}

export default App;
