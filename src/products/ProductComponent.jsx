import React, { useState } from 'react'
import './product.css'

export default function (props) {

const [count,setCount]=useState(1);

const handleSelectChange = (e) => {
  const selectedCount = parseInt(e.target.value);
  setCount(selectedCount);
  // console.log("Selected count:", count); // Log the selected count
};

return (
  <>
  <h2>Market</h2>
<div className='card-container'>
  
{props.productArray.map((product)=>(
   <div className="card" key={product.id}>
   <img src={product.img}
    alt="" />
   <h3>{product.title}</h3>
   <h4>{product.price} ₹</h4>
   <p className='description' >{product.description}</p>

   <select name="" id="" onChange={handleSelectChange}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    </select>

   <button onClick={()=>{props.addtoCart(product,count)}}>Add to cart</button>
 </div>
 
)

)}
    </div>
    </>);
}

