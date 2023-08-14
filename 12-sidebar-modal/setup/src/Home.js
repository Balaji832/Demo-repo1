import React, { useContext, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { useStateHandler } from './context';
const Home = (Props) => {
const { modelHandler,sidebarHandler }=useStateHandler();
  return (<main>
    <button className='sidebar-toggle' onClick={sidebarHandler}>
      <FaBars/>
    </button>
    <button className='btn' onClick={modelHandler}>
      Show Modal
    </button>
  </main>)
}

export default Home
