import "./index.css";

// Insira a prop onAdd.
export const InputArea = () => {
  // Crie um state dateField iniciando com string vazia.

  // Crie um state categoryField iniciando com string vazia.

  // Crie um state titleField iniciando com string vazia.

  // Crie um state de valuefield começando com 0.

  // Crie uma let categoryKeys que recebe o valor de Object.keys(categories);

  /* 
    Crie uma função handleaddEvent.
    Dentro crie uma  let errors = [];
    Faça as verificações se os campos estão vazios. Caso esteja vazio dê um push em error com a mensagem de erro.
    Faça uma verificação se errors.length > 0, insira alert(errors.join("\n"));
    Se for false, no else chame a função onAdd passando o objeto com os valores dos inputs e chame a função clearFields.
  */

  // Crie uma função clearFields e limpe todos os campos do formulário.

  return (
    <div className="form-container">
      <label className="inputLabel">
        <div className="inputTitle">Data</div>
        {/*
            Crie um input do tipo date com value={dateField}. No onChange utilize (e) => setDateField(e.target.value).
        */}
      </label>
      <label className="inputLabel">
        <div className="inputTitle">Categoria</div>
        <select
          className="select"
          /*
             Insira no value o categoryField e no onChange  (e) => setCategoryField(e.target.value).
          */
          value=""
          onChange=""
        >
          <>
            <option></option>
            {/*
            Crie um map em categoryKeys.
            Dentro do map insira a tag <option  key={index} value={key}></option>.
            Dentro da tag insira {categories[key].title}.
        */}
          </>
        </select>
      </label>
      <label className="inputLabel">
        <div className="inputTitle">Título</div>
        {/*
            Crie um input  com value={titleField}. No onChange utilize (e) => setTitleField(e.target.value).
        */}
      </label>
      <label className="inputLabel">
        <div className="inputTitle">Valor</div>
        {/*
            Crie um input do tipo number com value={valueField}. No onChange utilize (e) => setValueField(parseFloat(e.target.value)).
        */}
      </label>
      <label className="inputLabel">
        <div>&nbsp;</div>
        {/* 
          Crie um button para adicionar os valores. No onclick chame a função handleAddEvent
        */}
      </label>
    </div>
  );
};
