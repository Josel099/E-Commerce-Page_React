import './productListComponent.css'
import ProductComponent from '../product/ProductComponent';
import { useContext } from 'react';
import { MyContext } from '../../ContextProvider';




export default function ProductListComponent() {

  const {productArray,selectRef} = useContext(MyContext);




return (
  <>
  <h2>Market</h2>
<div className='card-container'>

{productArray.map((product)=>(
  <ProductComponent key={product.id} product={product} selectRef={selectRef}/>))}
   
    </div>
    </>);
}
