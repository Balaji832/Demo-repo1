import React from 'react'

type param={
    params:{colorName:string,productId:string}
  };
const ColorName = ({params}:param) => {
  return (
    <div>
      product {params.productId} {params.colorName}
    </div>
  )
}

export default ColorName;
