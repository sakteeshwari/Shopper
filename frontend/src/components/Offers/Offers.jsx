import React from 'react'
import "./Offers.css"
import exclusive_image from "../Assets/Frontend_Assets/exclusive_image.png"

const Offers = () => {
  return (
    <div className='offers  mt-80 rounded-lg mx-3 flex sm:mt-[550px] md:mt-[500px] lg:mt-[500px]  lg:mx-24 xl:mt-[20px] xl:p-16 2xl:mt-20'>
        <div className='offers-left p-3 pt-16 md:p-20' style={{width:"80%"}}>
            <h1 className=' font-extrabold tracking-wide text-3xl md:text-5xl '>Exclusive</h1>
            <h1 className='font-extrabold tracking-wide text-3xl md:text-5xl md:mt-5 '>Offers For You</h1>
            <p className='mt-5 lg:font-semibold'>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className=''>Check Now</button>
        </div>
        <div className='offer-right pt-8'>
            <img className='' src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers
