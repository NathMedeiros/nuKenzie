import React from "react";
import noCard from "../../img/NoCard.png";

const NoFound = ({ dados }) => {
  return (
    <div className="divNoCard">
      <h2>Você ainda não possui nenhum lançamento</h2>
      <img src={noCard} alt="" />
    </div>
  );
};

export default NoFound;
