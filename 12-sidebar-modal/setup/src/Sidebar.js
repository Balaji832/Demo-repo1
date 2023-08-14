import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useStateHandler } from './context'
const Sidebar = () => {
  const {sidebar,sidebarHandler}=useStateHandler();

  return <aside className={`${sidebar?'sidebar show-sidebar':'sidebar'}`}>
    <div className='sidebar-header'>
      <img src={logo} alt='logo' className='logo'></img>
      <button className='close-btn' onClick={sidebarHandler}><FaTimes/></button>
    </div>
    <ul className={'links'}>
      {links.map(element=>
      <li key={element.id}>
        <a href={element.url}>{element.icon}{element.text}</a>
      </li>)}
    </ul>
    <ul className={'social-icons'}>
      {social.map(element=>
      <li key={element.id}>
        <a href={element.url}>{element.icon}</a>
      </li>)}
    </ul>
  </aside>
}

export default Sidebar
