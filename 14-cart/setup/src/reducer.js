import { initState } from "./context"
const reducer=(state=initState,action)=>{
  //clear cart
  if(action.type==='CLEAR-CART'){
    return {...state,cart:[]}
  }
  //remove item from the cart
  else if(action.type==='REMOVE-ITEM'){
    return {...state,cart:state.cart.filter((element)=>element.id!==action.payload)}
  }
  //increase quantity
  else if(action.type==='INCREASE'){
    const finalValue=state.cart.map(element=>{
      if(element.id===action.payload){
        return {...element,amount:element.amount+1}
      }
      else return element
    })
    return {...state,cart:finalValue}
  }
  //decrease quantity
  else if(action.type==='DECREASE'){
    const finalValue=state.cart.map(element=>{
      if(element.id===action.payload){
        return {...element,amount:element.amount-1}
      }
      else return element
    }).filter(element=>element.amount!==0)
    return {...state,cart:finalValue}
  }
  //total quantity
  else if(action.type==='REDUCE'){
    let {total,amount}=state.cart.reduce((cartTotal,cartItem)=>{
      cartTotal.amount+=cartItem.amount
      const finalValue=cartItem.price*cartItem.amount
      cartTotal.total+=finalValue
      return cartTotal
    },{total:0,amount:0})
    total=parseFloat(total.toFixed(2))
    return {...state,total,amount}
  }
  //loading
  else if(action.type==='LOADING'){
    return {...state,loading:true}
  }
  //fetching
  else if(action.type==='FETCHING'){
    return {...state,cart:action.payload,loading:false}
  }
return state
}
export default reducer;