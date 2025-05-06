"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
const Notfound = () => {
  const path=usePathname().split("/")[1];

  return (
    <div>
      Empty {path}
    </div>
  )
}

export default Notfound
