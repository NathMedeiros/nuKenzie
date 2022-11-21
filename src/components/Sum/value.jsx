import React from "react";

const Value = ({ index, element, dados }) => {
  return (
    <div className="divValueBox">
      <div className="valueContainer">
        <div className="divValue">
          <h3>Valor total:</h3>
          <p key={index}>
            $
            {dados.reduce((acc, act) => {
              return act.optionValue === "Entrada"
                ? act.value * 1 + acc
                : acc - act.value * 1;
            }, 0)}
            ,00
          </p>
        </div>
        <p>O valor se refere ao saldo</p>
      </div>
    </div>
  );
};

export default Value;
