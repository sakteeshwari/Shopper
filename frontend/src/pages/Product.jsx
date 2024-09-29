import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadgrum from '../components/Breadgrums/Breadgrum'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../components/DecriptionBox/DescriptionBox'
import RealatedProducts from '../components/RelatedProducts/RelatedProducts'

const Product = () => {
    const{all_product}=useContext(ShopContext)
    const{productId}=useParams()
    const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadgrum product={product} ></Breadgrum>
      <ProductDisplay product={product} ></ProductDisplay>
      <DescriptionBox></DescriptionBox>
      <RealatedProducts></RealatedProducts>
    </div>
  )
}

export default Product
