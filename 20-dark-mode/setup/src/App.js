import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'
import styles from './styling.module.css';
const localstorageFunction=()=>{
  const initvalue='light-theme'
  const item=localStorage.getItem('theme')
  if(item){
    return item
  }
  return initvalue
}
function App() {
const [colors,setColor]=useState(localstorageFunction());

  const toggleButtonFunction=()=>{
    if(colors==="light-theme"){
      setColor('dark-theme')
    }else{
      setColor('light-theme')
    }
  }

  useEffect(()=>{
    document.documentElement.className = colors;
    localStorage.setItem('theme',colors)
  },[colors])
  return (
  <div >
    <div className={styles.box} >
      <h1>Overreacted</h1>
      <div>
      <button onClick={toggleButtonFunction}>Toggle</button>
      </div>
    </div>
    <div className={styles.box2}>
      <ul>
       {data.map(element=><div 
       className={styles.box3} 
       key={element.id}>
        <Article title={element.title} 
        date={element.date} 
        length={element.length}
        snippet={element.snippet}
        propColor={colors}/></div>)} 
      </ul>
    </div>
  </div>
  )
}

export default App
