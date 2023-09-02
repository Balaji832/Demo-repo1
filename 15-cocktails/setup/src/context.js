import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [searchterm,setSearchterm]=useState('a');
  const [loading,setLoading]=useState(true);
  const [cocktails,setCocktails]=useState([]);
  const fetchFunction=useCallback(async()=>{
    try{
      setLoading(true)
      const res=await fetch(`${url}${searchterm}`)
      const {drinks}=await res.json();
      console.log(drinks);
      if(drinks){
        const obj=drinks.map((item)=>{
          const {idDrink,strDrink,strAlcoholic,strDrinkThumb,strGlass}=item
          return {id:idDrink,
          name:strDrink,
          info:strAlcoholic,
          img:strDrinkThumb,
          glass:strGlass}})
          setCocktails(obj)
      }else{
        setCocktails([])
      }
      setLoading(false)
    }
    catch(error){
      console.log(error);
      setLoading(false)
    }
  },[searchterm])
  useEffect(()=>{
    fetchFunction();
  },[searchterm,fetchFunction])

  return <AppContext.Provider value={{searchterm,
    loading,
    cocktails,
    setSearchterm}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
