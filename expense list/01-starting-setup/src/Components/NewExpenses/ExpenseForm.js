import { useState } from 'react';
import './ExpenseForm.css';


export default function ExpenseForm(Props){
const [title,setTitle]=useState('');
const [date,setDate]=useState('');
const [Amount,setAmount]=useState('');


//Using single useState
// const [obj,changedobj]=useState({ChangedTitle : '',
// ChangedAmount :'',
// ChangedDate : ''})

  

    function TitleChange(event)
    {
       setTitle(event.target.value);
      // changedobj({...obj,ChangedTitle:event.target.value});
      

    }
    function AmountChange(event)
    {
       setAmount(event.target.value);
      // changedobj({...obj,ChangedAmount:event.target.value});
    }
    function DateChange(event)
    {
       setDate(event.target.value);
       console.log(event.target.value);
      // changedobj({...obj,ChangedDate:event.target.value});
    }
    const Aftersubmit=(event)=>{
      event.preventDefault();
      const obj={title:title,
        amount:Amount,
        date: new Date(date)}
    
        setTitle('');
        setAmount('');
        setDate('');
        Props.Passingfunction(obj);
        Props.itemsubmit();

    }

  return (

      <form onSubmit={Aftersubmit}>

        <div className='new-expense__controls' >
          <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' value={title} onChange={TitleChange}></input>
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input type='Date' value={date} min='2019-01-01' max='2022-12-31' onChange={DateChange}></input>
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input type='Number' value={Amount} min='0.01' step='0.01' onChange={AmountChange}></input>
          </div>
        </div>
        
        <div className='new-expense__actions'>
          <button onClick={Props.item}>Cancel</button>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
  
  )
}