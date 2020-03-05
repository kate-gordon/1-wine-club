import React from "react";

// Type is the type of info it is and description is for the info of a specific wine

const WineInfoItem = props => {
  return (
    <li style={{ listStyleType: "none" }}>
      {props.type} : {props.description}
    </li>
  );
};

export default WineInfoItem;
