import React, { useContext } from 'react'
import './productListComponent.css'
import { MyContext } from '../ContextProvider';
import ProductComponent from '../product/ProductComponent';




export default function ProductListComponent(props) {

const productArray = useContext(MyContext)




return (
  <>
  <h2>Market</h2>
<div className='card-container'>
{productArray.map((product)=>(
  <ProductComponent key={product.id} product={product} addtoCart={props.addtoCart} />
 
)
)
}
    </div>
    </>);
}

