import React from "react";
import Button from "./Button";
import WineName from "./WineName";
import WineInfoItem from "./WineInfoItem";

const SingleWineInfoBox = () => {
  return (
    <>
      <div>
        <WineName name='EURYDICE' />
        <ul>
          <WineInfoItem type='Grape variety' description='Garnatxa' />
          <WineInfoItem type='Denomination of origin' description='Garnatxa' />
          <WineInfoItem type='Producer' description='Garnatxa' />
          <WineInfoItem type='Quantity' description='Garnatxa' />
          <WineInfoItem type='Alcohol' description='Garnatxa' />
        </ul>
        <Button name='More Details' />
      </div>
    </>
  );
};

export default SingleWineInfoBox;
