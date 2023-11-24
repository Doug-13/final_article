import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../../data/categories";
import { getCurrentMonth, filterListByMonth } from "../../helpers/dateFilter";
import { TableArea } from "../../components/TableArea";
import { InfoArea } from "../../components/InfoArea";
import { InputArea } from "../../components/InputArea";
import "./index.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const isAuthenticated = JSON.parse(localStorage.getItem("authenticated"));
  // Crie um state para list iniciando com um array vazio.
  const [list, setList] = useState([]);
  // Crie um state para filteredList iniciando com um array vazio.
  const [filteredList, setFilteredList] = useState([]);
  // Crie um state para currentMonth iniciando com a função getCurrentMonth.
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  // Crie um state para income iniciando como 0.
  const [income, setIncome] = useState(0);
  // Crie um state para expense iniciando como 0.
  const [expense, setExpense] = useState(0);
  /*
      Crie um useEffect que tenha list, currentMonth e setFilteredList como dependência.
      Dentro dele crie uma const monthList que recebe o valor da função filterListByMonth(list, currentMonth)- OK
      Use setFilteredList com o valor da monthList.
  */
  useEffect(() => {
    const monthList = filterListByMonth(list, currentMonth);
    setFilteredList(monthList);
  }, [list, currentMonth, setFilteredList]);

  /*
    Crie um useEffect que tenha filteredList como dependência.
    Crie uma let incomeCount que recebe 0.
    Crie uma let expenseCount que recebe 0.
    Crie um laço for (let i in filteredList) {}.
    Dentro do laço crie um if e verifique se categories[filteredList[i].category].expense.
    Se for verdadeiro incremente expenseCount com filteredList[i].value.
    Se for falso, incremente incomeCount com filteredList[i].value.
    Use o setIncome com o valor de incomeCount.
    Use o setExpense com o valor de expenseCount.
  */
  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;
    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense === true)
        expenseCount += filteredList[i].value
      else ((categories[filteredList[i].category].expense === false))
      incomeCount += filteredList[i].value
    }
    setIncome(incomeCount)
    setExpense(expenseCount)
  }, [filteredList]);


  // Crie uma função handleMonthChange que recebe um newMonth. Dentro dela use o setCurrentMonth com o valor recebido na função

  const handleMonthChange = (newMonth) => {
    setCurrentMonth(newMonth)
  }
  /* Crie uma função handleAddItem que recebe um item. Dentro dela crie uma let newList que recebe uma cópia do array list.
      Em seguida dê push em newList com o valor de item.
      Em seguida use setList com o valor de newList.
  */
  const handleAddItem = (item) => {
    let newList = [...list]
    newList.push(item)
    setList(newList)
  }

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem("authenticated", "false");
    navigate("/login");
  };

  if (!isAuthenticated) {
    navigate("/login");
  }

  return (
    <div>
      <div className="header">
        <h1 className="headerText">Sistema Financeiro</h1>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="body">
        {}
        
        <InfoArea currentMonth={currentMonth} onMonthChange = {handleMonthChange} income={income} expense = {expense}/>

        {/* Insira a InputArea e sua prop */}
        <InputArea onAdd = {handleAddItem}/>

        {/* Insira a TableArea e sua prop */}
        <TableArea list={filteredList} />
      </div> 
    </div>
  );
};

export default Dashboard;
