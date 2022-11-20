import React from "react";

import trash from "../../img/ButtonTrash.png";

const Finance = ({ description, value, optionValue, removeCard }) => {
  if (optionValue === "Entrada") {
    return (
      <div className="listContainer">
        <ul className="ulList">
          <li className="list">
            <div className="divList">
              <h3>{description}</h3>
              <span>R${value},00</span>
              <button onClick={removeCard} className="btTrash">
                <img src={trash} alt="" />
              </button>
            </div>
            <p>{optionValue}</p>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="listContainer">
      <ul className="ulList-negative">
        <li className="list">
          <div className="divList">
            <h3>{description}</h3>
            <span>R${value},00</span>
            <button onClick={removeCard} className="btTrash">
              <img src={trash} alt="" />
            </button>
          </div>
          <p>{optionValue}</p>
        </li>
      </ul>
    </div>
  );
};
export default Finance;
