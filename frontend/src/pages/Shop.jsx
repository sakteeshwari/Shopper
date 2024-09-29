import React from 'react'
import Hero from "../components/Hero/Hero.jsx"
import Popular from "../components/Popular/Popular.jsx"
import Offers from '../components/Offers/Offers.jsx'
import NewCollections from '../components/NewCollections/NewCollections.jsx'
import NewsLetter from '../components/NewsLetter/NewsLetter.jsx'

const Shop = () => {
  return (
    <div>
        <Hero></Hero>
        <Popular></Popular>
        <Offers></Offers>
        <NewCollections></NewCollections>
        <NewsLetter></NewsLetter>
        
    </div>
  )
}

export default Shop
