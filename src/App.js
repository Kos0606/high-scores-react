import React from "react";
import "./App.css";
import HighScoreData from "./HighScoreData";
import CountriesTable from "./CountriesTable";

function App() {
  return (
    <div className="App">
      <CountriesTable />
      <HighScoreData />
    </div>
  );
}

export default App;
