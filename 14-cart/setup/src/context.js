import React, { useState, useContext, useReducer, useEffect } from 'react'
import {cartItems} from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

export const initState={
  cart:cartItems,
  loading:false,
  amount:0,
  total:0
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initState);
  useEffect(()=>{
    dispatch({type:'REDUCE'})
  },[state.cart])
  const dataFetch=async ()=>{
    dispatch({type:"LOADING"})
    const response=await fetch(url);
    const data = await response.json();
    dispatch({type:"FETCHING",payload:data})
  }
  useEffect(()=>{
    dataFetch();
  },[])
  const clearCart=()=>{
    dispatch({type:"CLEAR-CART"})
  }
  const removeItem=(data)=>{
    dispatch({type:"REMOVE-ITEM",payload:data})
  }
  const increaseQuantity=(id)=>{
    dispatch({type:"INCREASE",payload:id})
  }
  const decreaseQuantity=(id)=>{
    dispatch({type:"DECREASE",payload:id})
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

