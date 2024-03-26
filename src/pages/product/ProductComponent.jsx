import { React, useContext,  useState } from "react";
import "./productComponent.css";
import { MyContext } from "../../ContextProvider";



function ProductComponent({ product, selectRef}) {

const {addtoCart}= useContext(MyContext);
const [count, setCount] = useState(1);



  /**
   * Handles the change event of the select input.
   * Sets the count state to the selected value.
   * @returns {void}
   * @param {Object} e - The event object.
   */
  const handleSelectChange = (e) => {
    const selectedCount = parseInt(e.target.value);
    setCount(selectedCount);
  };

  return (
    <div className="card" key={product.id}>
      <img src={product.img} alt="" />
      <h3>{product.title}</h3>
      <h4>{product.price } ₹</h4>
      <p className="description">{product.description}</p>

      {/* Renders a select input for selecting the quantity */}
      <select  ref={selectRef} onChange={handleSelectChange}>
        {[1, 2, 3, 4, 5].map((value) => (
          <option key={value} value={value}> {value} </option>))}
      </select>
   
      <button onClick={() => {addtoCart(product, count);}}>
        Add to cart
      </button>
    </div>
  );
}

export default ProductComponent;
