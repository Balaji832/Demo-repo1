"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks=[{name:"Login",path:"/Login"},{name:"SignUp",path:"/SignUp"}]

const Layout = ({children}:{children:React.ReactNode}) => {

    const path=usePathname();
    
  return (
    <div>
      <div><input type='text'/></div>
        {
            navLinks.map((link)=>{
            
                const isActive= path===link.path||((path.startsWith(link.path) && link.path!=="/"))
             return <p key={link.name}><Link style={{color:`${isActive?"red":""}`}} href={link.path}>{link.name}</Link></p>})
            
        }
      {children}
    </div>
  )
}

export default Layout
