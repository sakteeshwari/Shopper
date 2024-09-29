import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/Frontend_Assets/logo.png"
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const Navbar = () => {

  //usestate for underline when clicked the shop,men,womens and kids 
  // onclick event for underline
  const[menu,setMenu]=useState("shop")

  // show data how many cart added in the red circle
  const{getTotalCartItems}=useContext(ShopContext)

  return (
    <div className=' flex justify-around p-2 shadow-lg'>
      <div className=' md:flex flex-row items-center gap-2'>
      <img src={logo}></img>
      <p className=' font-semibold md:text-2xl'>SHOPPER</p>
      </div>
    <ul className='nav-menu flex gap-4 justify-center items-center cursor-pointer lg:gap-8'>
      <Link to={"/shop"}> <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr />:<></>} </li></Link>
      <Link to={"/mens"}> <li onClick={()=>{setMenu("mens")}} >Men{menu==="mens"?<hr/>:<></>}</li> </Link>
      <Link to={"/womens"}> <li onClick={()=>{setMenu("womens")}} >Women{menu==="womens"?<hr/>:<></>}</li> </Link>
      <Link to={"/kids"}> <li onClick={()=>{setMenu("kids")}} >Kids{menu==="kids"?<hr/>:<></>}</li></Link> 
    </ul>
    <div className=' flex gap-3 items-center lg:gap-16  '>
      <Link to={"/login"}><button className=' border border-solid h-8 w-16 rounded-full active:bg-[#f3f3f3]'>Login</button></Link>
      
     <Link to={"/cart"}> <img src={cart_icon} className='h-8 nav-cart-merge' alt="" /></Link>
     <div className='nav-cart-count '>{getTotalCartItems()}</div>
    </div>
    </div>
  )
}

export default Navbar
