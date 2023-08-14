import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import  GlobalHandler  from './context';

function App() {
 
  return (
    <>
    <GlobalHandler>
      <Home  />
      <Modal />
      <Sidebar/>
      </GlobalHandler>
    </>
  )
}

export default App
