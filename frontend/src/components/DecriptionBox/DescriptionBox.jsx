import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews(122)</div>
            </div>
            <div className='descriptionbox-description'>
                <p>
                    An e-commerce website is an online store that allows customers to buy
                    and sell products and services over the internet. It's a digital storefront
                    that acts as a virtual equivalent
                    of a physical shop, with product listings, categories, and customer reviews.
                    An e-commerce website is one that allows people to buy and sell physical goods,
                    services, and digital products over the internet rather than at a brick-and-mortar location.
                    Through an e-commerce website, a business can process orders, accept
                    payments, manage shipping and logistics, and provide customer service.1
                </p>
                <p>
                    An eCommerce website allows visitors to find their product(s),
                    add them to their “cart,”
                    and securely enter their payment information to complete their purchase.
                    Each product usually has its own dedication with relevant information.           
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox
