import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/Frontend_Assets/logo.png"
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import { useRef } from 'react'
import nav_dropdown from "../Assets/Frontend_Assets/nav_dropdown.png"
const Navbar = () => {

  //usestate for underline when clicked the shop,men,womens and kids 
  // onclick event for underline
  const[menu,setMenu]=useState("shop")

  // show data how many cart added in the red circle
  const{getTotalCartItems}=useContext(ShopContext)

  // creating a small menu
  const menuRef=useRef();

  const dropdown_toggle=(e)=>{
      menuRef.current.classList.toggle("nav-menu-visible");
      e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className='nav-logo '>
      <img src={logo}></img>
      <p className=''>SHOPPER</p>
      </div>
      <img className='nav-dropdown' src={nav_dropdown} onClick={dropdown_toggle} alt="" />
    <ul ref={menuRef} className='nav-menu'>
      <Link to={"/shop"}> <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr />:<></>} </li></Link>
      <Link to={"/mens"}> <li onClick={()=>{setMenu("mens")}} >Men{menu==="mens"?<hr/>:<></>}</li> </Link>
      <Link to={"/womens"}> <li onClick={()=>{setMenu("womens")}} >Women{menu==="womens"?<hr/>:<></>}</li> </Link>
      <Link to={"/kids"}> <li onClick={()=>{setMenu("kids")}} >Kids{menu==="kids"?<hr/>:<></>}</li></Link> 
    </ul>
    <div className='nav-login-cart '>
      {
        localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        : <Link to={"/login"}><button className=''>Login</button></Link>
      }
     
      
     <Link to={"/cart"}> <img src={cart_icon} className='' alt="" /></Link>
     <div className='nav-cart-count '>{getTotalCartItems()}</div>
    </div>
    </div>
  )
}

export default Navbar
