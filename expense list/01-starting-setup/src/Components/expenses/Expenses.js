import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpenses/ExpenseFilter";
import React,{ useState } from "react";
import Expenselist from "./ExpenseList";
import Expenseschart from "./ExpensesChart";
export default function Expenses(Props){
  
  const [years,setyear]=useState("2020");
  
  const Dropdownhandler=(year)=>
  {
    setyear(year);
  }

  const newarr=Props.array.filter((element)=>{
    return element.date.getFullYear()==years;
  })
  
  return (
    <li>
    <Card className="expenses">
    <ExpensesFilter defaultyear={years} importyear={Dropdownhandler}></ExpensesFilter>
    <Expenseschart expenses={newarr}></Expenseschart>
    <Expenselist items={newarr} >

    </Expenselist>
    </Card>
    </li>

  )

}