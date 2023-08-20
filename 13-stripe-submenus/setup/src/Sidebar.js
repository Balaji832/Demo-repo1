import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useContextProvider } from './context'
const Sidebar = () => {
  const {isSideBarOpen,sidebarHandler}=useContextProvider();
  return (
    <div className={`${isSideBarOpen?'sidebar-wrapper show':'sidebar-wrapper'}`}>
      <aside className='sidebar'> 
        <button className='close-btn' onClick={sidebarHandler}><FaTimes/></button>
        <div className='sidebar-links'>
          {sublinks.map((item,index)=>{
            const {page,links}=item
            return <article key={index}>
              <h4>{page}</h4>
              <div className='sidebar-sublinks'>
              {links.map((element,index)=><a key={index} href={element.url}>{element.icon}{element.label}</a>)}
              </div>
            </article>
          })}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
