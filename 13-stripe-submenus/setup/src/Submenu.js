import React, { useState, useRef, useEffect } from 'react'
import sublinks from './data';
import { useContextProvider } from './context';
const Submenu = () => {
const {location,name:{page,links},isSubMenuOpen}=useContextProvider();
const container=useRef()
const [columns,setColumns]=useState('col-2');

useEffect(()=>{
  setColumns('col-2');
  const submenu=container.current;
  submenu.style.left=`${location.center}`
  submenu.style.top=`${location.bottom}`
  if(links.length===3){
    setColumns('col-3')
  }else if(links.length > 3){
    setColumns('col-4')
  }
},[page,location,links])
  return (
    <aside className={`${isSubMenuOpen?'submenu show':'submenu'}`} ref={container}>
    <section >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
      {links.map((element,index)=>{ 
        return <a key={index} href={element.url}>{element.icon}{element.label}</a>
      })}
      </div>
    </section>
    </aside>
  )
}

export default Submenu
