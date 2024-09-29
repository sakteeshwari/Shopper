import React from 'react'
import "./Popular.css"
import data_product from "../Assets/Frontend_Assets/data.js"
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular mt-10'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className='popular-item'>
            {
                data_product.map((item,i)=>{
                    return <Item className="item" key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} ></Item>
                })
            }
        </div>
    </div>
  )
}

export default Popular
