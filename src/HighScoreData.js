import React, { useState } from "react";
import HighScoreTable from "./HighScoreTable";
import CountriesInfo from "./CountriesInfo";
import PlayerScore from "./PlayerScore";
import SortButton from "./SortButton";


function sortByName(array) {
  array.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    return 1;
  });
}

const HighScoreData = () => {
  sortByName(CountriesInfo);

  const [order, setSortOrder] = useState(1);
  const [buttonName, setButtonName] = useState("Ascending");

  function changeSortOrder() {
    setSortOrder((order) => order * -1);
    if (buttonName === "Ascending") {
      setButtonName((buttonName) => "Descending");
    } else {
      setButtonName((buttonName) => "Ascending");
    }
  }

  return (
    <div className="card" style={{ width: "38rem" }}>
      <h1 className="card-title">High Scores Per Country</h1>

      <SortButton handler={changeSortOrder} buttonName={buttonName} />

      {CountriesInfo.map((item, index) => (
        <div className="countryTable ">
          <HighScoreTable key={index} name={item.name} />
          {item.scores
            .sort((a, b) => {
              if (a.s < b.s) {
                return order;
              }
              return order * -1;
            })
            .map((el, index) => (
              <PlayerScore key={index} n={el.n} s={el.s} order={order} />
            ))}
        </div>
      ))}
    </div>
  );
};
export default HighScoreData;
