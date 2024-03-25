import React, { useContext } from 'react'
import './cart.css'
import { MyContext } from '../../ContextProvider'
function CartComponent() {
  
  const {cartCount,cartItems,removeCart} = useContext(MyContext);
    return (
    <>
    <h2>Cart</h2>
    <h3>cart count: {cartCount}</h3>
    <div className='card-cart-container'>
  
   {cartItems.map((product)=>(
   <div className="card-cart" key={product.id}>
   <img src={product.img}
    alt="" />
   <h3>{product.title} X {product.count}</h3>
   <h4>{product.price * product.count} ₹</h4>
   <p className='description' >{product.description}</p>
   <button className='remove-button' onClick={()=>removeCart(product)}>Remove</button>
 </div>

)
)}  </div>

    </>
  )
}


export default CartComponent

