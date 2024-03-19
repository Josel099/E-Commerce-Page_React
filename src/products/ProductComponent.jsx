import React from 'react'
import './product.css'

export default function (props) {
  return (
<div className='card-container'>
{props.productArray.map((product)=>(
   <div className="card" key={product.id}>
   <img src={product.img}
    alt="" />
   <h3>{product.title}</h3>
   <h4>{product.price} ₹</h4>
   <p className='description'>{product.description}</p>

   <button>Add to cart</button>
 </div>
)
)}
    </div>
  );
}
