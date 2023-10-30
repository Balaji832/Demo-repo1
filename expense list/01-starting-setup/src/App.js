import Expenses from './Components/expenses/Expenses';
import NewExpnese from './Components/NewExpenses/NewExpense';
import React,{ useState } from 'react';

let dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2019, 3, 17),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2019, 2, 17)},
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2020, 2, 17),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 2, 17),
  },
];

function App() {

  const  [expensearr,setExpense]=useState(dummy_expenses);
  console.log(expensearr);
   const finaloutput=(expense)=>{
    setExpense((preexpense)=>{
     return  [expense,...preexpense]
    })
    
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpnese importobj={finaloutput}></NewExpnese>
      <Expenses array={expensearr}/>
    </div>
  );
}

export default App;
