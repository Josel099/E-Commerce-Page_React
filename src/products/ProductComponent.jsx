import React from 'react'
import './product.css'

export default function (props) {

function addtoCart(){
  alert("add to cart")
}
return (
<div className='card-container'>
  <h2 id='count'>hi </h2>
{props.productArray.map((product)=>(
   <div className="card" key={product.id}>
   <img src={product.img}
    alt="" />
   <h3>{product.title}</h3>
   <h4>{product.price} ₹</h4>
   <p className='description' >{product.description}</p>
   <button onClick={addtoCart}>Add to cart</button>
 </div>
)
)}
    </div>
  );
}
