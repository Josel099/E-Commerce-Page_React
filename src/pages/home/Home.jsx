import React, { useContext } from 'react'
import './home.css'
import ProductComponent from '../product/ProductComponent';
import { MyContext } from '../../ContextProvider';

function Home() {

const {productsData }= useContext(MyContext);
 
  return (
    <>
    <h2> Holy Sale... 50%off </h2>
  <div className='card-container'>
  
  {productsData.slice(0,4).map((product)=>(
    <ProductComponent key={product.id} product={product}/>))}
     
      </div>
      </>);
  }


export default Home;
