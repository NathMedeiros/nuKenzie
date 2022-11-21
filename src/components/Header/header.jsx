import React from "react";
import logo from "../../img/Nu Kenzie (1).png";

const Header = ({ setState }) => {
  return (
    <div className="headerContainer">
      <div className="divHeader">
        <img src={logo} alt="" />
        <button className="btHeader" onClick={() => setState(false)}>
          Inicio
        </button>
      </div>
    </div>
  );
};
export default Header;
