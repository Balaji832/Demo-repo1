import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js'
import Card from '../UI/Card';
export default function ExpenseItem(Props){  

  return (<Card className="expense-item">
    <div>
      <ExpenseDate date={Props.date}/>
    </div>
    <div className="expense-item__description">
      <h2>{Props.title}</h2>
      <div className="expense-item__price">${Props.amount}</div>
    </div>
    </Card>);

}