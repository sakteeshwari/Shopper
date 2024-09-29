import React from 'react'
import "./Breadgrum.css"
import arrow_icon from "../Assets/Frontend_Assets/breadcrum_arrow.png"

const Breadgrum = (props) => {
    const{product}=props;
  return (
    <div className='breadgrum'>
        HOME <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" />{product.name}
        
       
    </div>
  )
}

export default Breadgrum
