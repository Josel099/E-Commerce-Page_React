import {React,useState} from 'react'






function ProductComponent({product,addtoCart}) {

    const [count,setCount]=useState(1);

    const handleSelectChange = (e) => {
    const selectedCount = parseInt(e.target.value);
    setCount(selectedCount);
    };

  return (
    <div className="card" key={product.id}>
    <img src={product.img}
     alt="" />
    <h3>{product.title}</h3>
    <h4>{product.price} ₹</h4>
    <p className='description' >{product.description}</p>
 
    <select  name="" id="" onChange={handleSelectChange}>
     <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
     <option value="4">4</option>
     <option value="5">5</option>
     </select>
 
    <button onClick={()=>{addtoCart(product,count)}}>Add to cart</button>
  </div>
  )
}

export default ProductComponent