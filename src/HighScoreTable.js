import React from "react";

const HighScoreTable = (props) => {
  return (
    <div>
      <h3 className="highScoreCountry">High Scores: {props.name}</h3>
    </div>
  );
};
export default HighScoreTable;
