import { useState } from "react";
import { categories } from "../../data/categories";
import "./index.css";

// Insira a prop onAdd.
export const InputArea = ({onAdd}) => {

  // Crie um state dateField iniciando com string vazia.
  const [dateField, setDateField] = useState("");
  // Crie um state categoryField iniciando com string vazia.
  const [categoryField, setCategoryField] = useState("");
  // Crie um state titleField iniciando com string vazia.
  const [titleField, setTitleField] = useState("");
  // Crie um state de valuefield começando com 0.
  const [valueField, setValueField] = useState(0);
  // Crie uma let categoryKeys que recebe o valor de Object.keys(categories);
  let categoryKeys = Object.keys(categories);

  // Crie uma função handleaddEvent.
  const handleAddEvent = () => {
    // Dentro crie uma  let errors = [];
    let errors = [];
    // Faça as verificações se os campos estão vazios. Caso esteja vazio dê um push em error com a mensagem de erro.
    if (isNaN(new Date(dateField).getTime())) {
      errors.push("Data inválida!");
    }
    if (!categoryKeys.includes(categoryField)) {
      errors.push("Categoria inválida!");
    }
    // Faça as verificações se os campos estão vazios. Caso esteja vazio dê um push em error com a mensagem de erro.

    if (titleField === "") {
      errors.push("Título vazio!");
    }
    if (valueField <= 0) {
      errors.push("Valor inválido!");
    }

    // Faça uma verificação se errors.length > 0, insira alert(errors.join("\n"));

    if (errors.length > 0) {
      alert(errors.join("\n"));

      // Se for false, no else chame a função onAdd passando o objeto com os valores dos inputs e chame a função clearFields.
    } else {
      onAdd({
        date: new Date(dateField.concat("T00:00")),
        category: categoryField,
        title: titleField,
        value: valueField,
      });
      clearFields();
    }
  };
  // Crie uma função clearFields e limpe todos os campos do formulário.
  const clearFields = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField(0);
  };

  return (
    <div className="form-container">
      <label className="inputLabel">
        <div className="inputTitle">Data</div>
        <input
          className="input"
          type="date"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
      </label>
      <label className="inputLabel">
        <div className="inputTitle">Categoria</div>
        <select
          className="select"
          /*
             Insira no value o categoryField e no onChange  (e) => setCategoryField(e.target.value).
          */
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        >
          <>
            <option></option>
            {/*
            Crie um map em categoryKeys.
            Dentro do map insira a tag <option  key={index} value={key}></option>.
            Dentro da tag insira {categories[key].title}.
        */}
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>
                {categories[key].title}
              </option>
            ))}
          </>
        </select>
      </label>
      <label className="inputLabel">
        <div className="inputTitle">Título</div>
        {/*
            Crie um input  com value={titleField}. No onChange utilize (e) => setTitleField(e.target.value).
        */}
        <input
          className="input"
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
        />
      </label>
      <label className="inputLabel">
        <div className="inputTitle">Valor</div>
        {/*
            Crie um input do tipo number com value={valueField}. No onChange utilize (e) => setValueField(parseFloat(e.target.value)).
        */}
        <input
          className="input"
          type="number"
          value={valueField}
          onChange={(e) => setValueField(parseFloat(e.target.value))}
        />
      </label>
      <label className="inputLabel">
        <div>&nbsp;</div>
        {/* 
          Crie um button para adicionar os valores. No onclick chame a função handleAddEvent
        */}
        <button className="button" onClick={handleAddEvent}>
          Adicionar
        </button>
      </label>
    </div>
  );
};
