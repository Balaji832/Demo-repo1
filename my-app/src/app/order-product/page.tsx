"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const OrderProduct = () => {
  
const route=useRouter()
    const orderHandler=()=>{
        route.push("/productlist/999/color/red")
    }
  return (
    <div>
      Order Products
      <button onClick={orderHandler}>Order</button>
    </div>
  )
}

export default OrderProduct;
