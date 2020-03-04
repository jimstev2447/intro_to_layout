import React from "react";

const ColourSquare = ({ colour }) => {
  return (
    <div
      style={{ width: "100px", height: "100px", backgroundColor: colour }}
    ></div>
  );
};

export default ColourSquare;
