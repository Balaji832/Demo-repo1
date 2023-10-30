import { createSlice } from "@reduxjs/toolkit"

const rdxtoolkit=createSlice({
  name:'counter',
  initialState:{counter:0,showCounter:true},
  reducers:{
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    increasevalue(state,action){
      state.counter=state.counter+action.payload
    },
    toggleCounter(state){
      state.showCounter=!state.showCounter;
    }
  }
})
export const counterActions=rdxtoolkit.actions;
export default rdxtoolkit;
