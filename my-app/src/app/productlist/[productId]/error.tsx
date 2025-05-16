"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Error = ({error,reset}:{error:Error,reset:()=>void}) => {
  const route=useRouter();
  
  const clickHandler=()=>{
    route.refresh()
    reset()
  }
  return (
    <div>
      <div>{error.message}</div>
      <button onClick={clickHandler}>reload</button>
    </div>
  )
}

export default Error;
