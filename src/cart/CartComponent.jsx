import React from 'react'
import './cart.css'
function CartComponent(props) {
  
    return (
    <>
    <h2>Cart</h2>
    <h3>cart count: {props.cartCount}</h3>
    <div className='card-cart-container'>
  
{props.cartItems.map((product)=>(
   <div className="card-cart" key={product.id}>
   <img src={product.img}
    alt="" />
   <h3>{product.title}</h3>
   <h4>{product.price} ₹</h4>
   <p className='description' >{product.description}</p>
 </div>

)
)}  </div>

    </>
  )
}


export default CartComponent