

import React from 'react'
// import { redirect } from 'next/navigation';

type param={
  params:Promise<{productId:string}>
};
const Products = async ({params}:param) => {


  const {productId}=await params

  if(parseInt(productId)>1000){
    // return notFound()
    // redirect("/")
    throw new Error()
  }

  return (
    <div>
      <h3>Product count {productId}</h3>
    </div>
  )
}

export default Products
