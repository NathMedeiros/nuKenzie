import React from "react";
import illustration from "../../img/illustration.svg";
import logo from "../../img/Nu Kenzie.png";

const Index = ({ setState }) => {
  return (
    <div className="app-box">
      <div className="container">
        <div className="divInformation">
          <img src={logo} alt="" />
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <button className="btEntry" onClick={() => setState(true)}>
            Iniciar
          </button>
        </div>
        <div className="divImg">
          <img id="imgIllustration" src={illustration} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Index;
