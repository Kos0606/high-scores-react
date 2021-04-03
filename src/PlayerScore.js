import React from "react";
 
const PlayerScore = (props) => {
  return (
    <div>
      <table className="table table-stripped  text-center">
        <tbody>
          <tr>
            <td>{props.n} </td>
            <td>{props.s}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

    export default PlayerScore;