import React, { createContext,useContext,useState } from 'react'

export const Context=createContext(null);

const GlobalHandler=(Props)=>{
  const [modal,setModal]=useState(false);
  const [sidebar,setSidebar]=useState(false);

  const modelHandler=()=>{
    setModal(!modal)
  }
  const sidebarHandler=()=>{
    setSidebar(!sidebar);
  }
  const sidebarCloseHandler=()=>{
    setSidebar(!sidebar)
  }
  const modalCloseHandler=()=>{
    setModal(!modal)
  }

  return <Context.Provider value={{modal,sidebar,modelHandler,sidebarHandler
  ,sidebarCloseHandler,modalCloseHandler}}>{Props.children}</Context.Provider>
}

export const useStateHandler=()=>{
return useContext(Context);
}
export default GlobalHandler;