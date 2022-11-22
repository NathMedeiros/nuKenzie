import React, { useState } from "react";
import Header from "../Header/header";
import Form from "../Form/form";
import Finance from "../PageFinance/finance";
import Value from "../Sum/value";
import NotFound from "../NotFound-list/notFound";

const IndexHome = ({ setState }) => {
  const [dados, setDados] = useState([]);

  const [filTer, setFilTer] = useState("Todos");

  const filtered = dados.filter((element) => {
    if (filTer === "Todos") {
      return true;
    } else {
      return element.optionValue === filTer;
    }
  });

  function removeCard(deletCard) {
    const filterRemove = dados.filter((values) => values !== deletCard);
    setDados(filterRemove);
  }

  return (
    <div>
      <Header setState={setState} />

      <div className="bodyContainer">
        <div>
          <Form setDados={setDados} />

          {dados.length !== 0 && <Value dados={dados} />}
        </div>

        <div className="divButtons">
          <div className="resume" id="resume">
            <h3>Resumo Financeiro</h3>
            <button onClick={() => setFilTer("Todos")}>Todos</button>
            <button onClick={() => setFilTer("Entrada")}>Entrada</button>
            <button onClick={() => setFilTer("Despesas")}>Despesas</button>
          </div>
          {filtered.length === 0 && <NotFound />}

          {filtered.map((values, index) => (
            <Finance
              key={index}
              description={values.description}
              value={values.value}
              optionValue={values.optionValue}
              removeCard={() => removeCard(values)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndexHome;
