import './NewExpense.css';
import Expenseform from './ExpenseForm';
import React,{ useState } from 'react';

export default function NewExpnese(Props){
const Objectdata=(obj)=>{
  const completeobj={
    ...obj,id: Math.random().toString()
  }
  Props.importobj(completeobj);

  
}
const [showform,hideform]=useState(false);
function formedit(){
  hideform(true);

}
function hiddenform(){
  hideform(false);
}
function Aftersubmit(){
  hideform(false);
}

  return (
    <div className='new-expense'>
     {showform && <Expenseform itemsubmit={Aftersubmit} item={hiddenform} Passingfunction={Objectdata}></Expenseform>}
     {!showform && <button onClick={formedit}>Add New Expense</button>
}

    </div>
  )
}