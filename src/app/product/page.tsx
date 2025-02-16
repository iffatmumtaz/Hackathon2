import React from 'react'
import NewsletterInstagram from '../components/Instagram'
import AllProduct from '../components/allProducts'
import Cart from '../cart/page'
import Checkout from '../checkout/page'
import Wishlist from '../wishlist/page'
import OrderConfirmation from '../order-confirmation/page'


const page = () => {
  return (
      <div>
          
          <AllProduct />
          <NewsletterInstagram />
         
      <Cart/>
      <Checkout/>
      <Wishlist/>
      <OrderConfirmation/>
    </div>
  )
}

export default page