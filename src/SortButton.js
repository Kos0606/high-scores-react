import React from "react";

const SortButton = (props) => {
  return (
    <div>
      <button className="bg-primary" onClick={props.handler}>
        {props.buttonName}
      </button>
    </div>
  );
};

export default SortButton;
