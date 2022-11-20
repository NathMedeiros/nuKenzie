import React, { useState } from "react";

const Form = ({ setDados }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [optionValue, setOptionValue] = useState("");

  function handleSbmit(event) {
    event.preventDefault();

    const dados = {
      description,
      value,
      optionValue,
    };
    console.log(dados);
    const setLocation = JSON.stringify(dados);
    localStorage.setItem("data", setLocation);

    setDados((allDados) => [...allDados, dados]);
    setDescription("");
    setValue("");
    setOptionValue("");
  }
  const getLocal = (chave) => {
    localStorage.getItem(chave);
  };
  return (
    <form onSubmit={handleSbmit}>
      <div className="divForm">
        <label htmlFor="description">Descrição</label>

        <input
          value={description}
          className="descriptionInput"
          required
          id="description"
          type="text"
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setDescription(event.target.value)}
        />
        <p>Ex: Compra de roupas</p>
        <div className="divOptions">
          <div className="value">
            <label htmlFor="value">Valor</label>
            <div className="divReal">
              <input
                value={value}
                required
                id="value"
                className="inputValue"
                type="text"
                onChange={(event) => setValue(event.target.value)}
              />
              <span className="real">R$</span>
            </div>
          </div>
          <div className="divSelect">
            <span>Tipo de valor</span>
            <select
              value={optionValue}
              className="entryOption"
              onChange={(event) => setOptionValue(event.target.value)}
            >
              <option value="Seleciona" hidden>
                Selecione
              </option>
              <option value="Entrada">Entrada</option>
              <option value="Despesas">Despesas</option>
            </select>
          </div>
        </div>
        <button onClick={() => getLocal("data")} className="btSubmit">
          Inserir valor
        </button>
      </div>
    </form>
  );
};

export default Form;
