import React from "react";

const Footer = () => {
  return (
    <>
      <div
        style={{
          height: "10vh",
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <div> CONNECT WITH US </div>
        <ul style={{ listStyleType: "none", display: "flex" }}>
          <li>facebook</li>
          <li>twitter</li>
          <li>instagram</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
