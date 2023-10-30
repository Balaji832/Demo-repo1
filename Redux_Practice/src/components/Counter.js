import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../Store/counter';

const Counter = () => {
  const counter=useSelector(state=>state.counter.counter)
  const show= useSelector(state=>state.counter.showCounter)
  const dispatch=useDispatch()

  function increment(){
    // dispatch({type:'increment'})
    dispatch(counterActions.increment())
  }
  function increaseHandler(){
    // dispatch({type:'increasevalue',amount:5})
    dispatch(counterActions.increasevalue(5))
  }
  function decrement(){
    // dispatch({type:'decrement'})
    dispatch(counterActions.decrement())
  }
  const toggleCounterHandler = () => {
    // dispatch({type:'showCounter'})
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={increaseHandler}>Increase By 5</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
