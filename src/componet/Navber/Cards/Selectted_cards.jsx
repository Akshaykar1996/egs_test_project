import React from "react";

export const Selectted_cards = ({logo,title}) => {
  return (
    <div className="selectCatrd">
      <img className="selectedLogo" src={logo} alt="" />
      <div>{title}</div>
      <div className="underline"></div>
    </div>
  );
};
