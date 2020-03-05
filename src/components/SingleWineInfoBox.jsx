import React from "react";
import WineName from "./WineName";
import WineInfoItem from "./WineInfoItem";
import Button from "./Button";

const SingleWineInfoBox = () => {
  return (
    <>
      <WineName name='PRIORAT' />
      <ul>
        <WineInfoItem type='Grape variety' description='Garnatxa' />
        <WineInfoItem type='Denomination of origin' description='Garnatxa' />
        <WineInfoItem type='Producer' description='Garnatxa' />
        <WineInfoItem type='Quantity' description='Garnatxa' />
        <WineInfoItem type='Alcohol' description='Garnatxa' />
      </ul>
      <Button name='More Details' />
    </>
  );
};

export default SingleWineInfoBox;
