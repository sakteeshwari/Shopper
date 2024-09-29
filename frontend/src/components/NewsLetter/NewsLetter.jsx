import React from 'react'
import "./NewsLetter.css"

const NewsLetter = () => {
  return (
    <div className='newsletter rounded-xl '>
      <h1 className=' mt-20'>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our new letter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button>Subcribe</button>

      </div>
    </div>
  )
}

export default NewsLetter
