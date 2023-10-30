import { createSlice } from "@reduxjs/toolkit";

const authenticate=createSlice({
  name:'Auth',
  initialState:{Authentication:false},
  reducers:{
    login(state){
      state.Authentication=true;
    },
    logout(state){
      state.Authentication=false;
    }
  }
})
export const authActions=authenticate.actions;
export default authenticate;
