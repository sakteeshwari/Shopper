import React from 'react'
import "./Hero.css"
import hand_icon from "../Assets/Frontend_Assets/hand_icon.png"
import arrow_icon from "../Assets/Frontend_Assets/arrow.png"
import hero_image from "../Assets/Frontend_Assets/hero_image.png"

const Hero = () => {
    return (
        <div className='flex bg-gradient-to-b pt-5 from-[#fde1ff] to-[#e1ffea22] '>
            <div className='hero-left'>
                <h2 className=''>NEW ARRIVALS ONLY</h2>

                <div>
                    <div className='hero-hand-icon'>
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>

                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>Latest Collections</div>
                    <img src={arrow_icon} className='text-red-500' alt="" />
                </div>
            </div>
            <div className='girl-pic'>
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero
