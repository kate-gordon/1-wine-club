import React from "react";
import NavBarItem from "./NavBarItem";
import PageTitle from "./PageTitle";

const NavBar = () => {
  return (
    <>
      <PageTitle />
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <NavBarItem item='Catalog' />
        <NavBarItem item='About' />
        <NavBarItem item='News' />
        <NavBarItem item='Wine Club' />
      </ul>
    </>
  );
};

export default NavBar;
