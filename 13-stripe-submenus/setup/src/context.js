import React, { useState, useContext } from 'react'
import sublinks from './data';

export const globalContext=React.createContext();

const ContextProvider=({children})=>{
const [isSideBarOpen,setSideBarOpen]=useState(false);
const [isSubMenuOpen,setSubMenuOpen]=useState(false);
const [location,setLocation]=useState({});
const [name,setName]=useState({page:'',links:[]});

const sidebarHandler=()=>{
  setSideBarOpen(!isSideBarOpen);
}
const openMenuHandler=(text,coordinates)=>{
  const obj=sublinks.find(element=>element.page===text);
  setLocation(coordinates)
  setName(obj)
  setSubMenuOpen(true);
}
const closeMenuHandler=()=>{
  setSubMenuOpen(false);
}
  return (
  <globalContext.Provider value={{
    isSideBarOpen,
    isSubMenuOpen,
    sidebarHandler,
    openMenuHandler,
    closeMenuHandler,
    location,
    name}}>
    {children}
  </globalContext.Provider>)
}
export const useContextProvider=()=>{
  return useContext(globalContext);
}
export default ContextProvider;
