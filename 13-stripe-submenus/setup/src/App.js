import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import ContextProvider from './context';
function App() {
  return (
    <ContextProvider>
      <Navbar/>
      <Sidebar/>
      <Hero/>
      <Submenu/>
    </ContextProvider>
  )
}

export default App
