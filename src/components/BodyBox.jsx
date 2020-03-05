import React from "react";
import SingleWineInfoBox from "./SingleWineInfoBox";

const BodyBox = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        margin: "4rem",
        height: "45vh"
      }}
    >
      <SingleWineInfoBox />
    </div>
  );
};

export default BodyBox;
