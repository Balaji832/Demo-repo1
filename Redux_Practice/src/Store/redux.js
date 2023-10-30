// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rdxtoolkit from './counter';
import authenticate from './auth';


// const reducer=(state={counter:0,showCounter:true},action)=>{
//   if(action.type==='increment')
//   {
//     return {
//       counter:state.counter+1,
//       showCounter:state.showCounter
//     }
//   }
//   if(action.type==='increasevalue')
//   {
//     return {
//       counter:state.counter+action.amount,
//       showCounter:state.showCounter
//     }
//   }
//   if(action.type==='showCounter'){
//     return {
//       counter:state.counter,
//       showCounter:!state.showCounter
//     }
//   }
//   if(action.type==='decrement')
//   {
//     return {
//       counter:state.counter-1,
//       showCounter:state.showCounter
//     }
//   }
//   return state;
// }

const store=configureStore({reducer:{counter:rdxtoolkit.reducer,auth:authenticate.reducer}});
// const store=createStore(reducer);


export default store;
