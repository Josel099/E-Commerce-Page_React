import './App.css'
import Header from './header/HeaderComponent'
import Footer from './footer/FooterComponent'
import Product from './products/ProductComponent'
import CartComponent from './cart/CartComponent'
import { useState,useEffect } from 'react'
import ContextProvider from './ContextProvider'


function App() {

  const [cartItems,setCart] = useState([]);
  const [cartCount,setCount] = useState(0);




/**===========================================================================
 * Retrieves cart data from localStorage when the component mounts.
 * If cart data exists, it is parsed and used to initialize the cart state.
 * The cart count is updated based on the length of the cart data.
 * If cart data is not found, the cart count is set to 0.
 ===============================================================================*/
  useEffect(() => {
     // Retrieve cart data from localStorage
    let cartData = localStorage.getItem("cartData");
   
  // If cart data exists, parse and initialize the cart state
    if (cartData) {
      try {
        cartData = JSON.parse(cartData);
        setCart(cartData);
        setCount(cartData.length);

      } catch (error) {
        console.error("Error parsing JSON data:", error);
        alert("server is down");
      }
    } else setCount(0); // If cart data is not found, set the cart count to 0
    
    
  }, []);
  




/**====================================================================================================
 * Adds a product to the shopping cart.
 * Updating the Total count in it . 
 * Storing the added cart items in local storage  . 
 * @param {Object} product - The product to be added to the cart. It should contain at least an 'id' property.
 *                          Example: { id: 1, name: 'Product A', price: 10 }
 * @param {number} countOfProduct - The quantity of the product to be added to the cart.
 * @returns {void}
 ========================================================================================================*/
const addtoCart = (product, countOfProduct) => {
  // Check if the product is already in the cart
  const isProductInCart = cartItems.some((item) => product.id === item.id);

  // If the product is not already in the cart, add it
  if (!isProductInCart) {
    // Set the quantity of the product
    product.count = countOfProduct;
    
    // Add the product to the cart and update cart count
    const updatedCart = [...cartItems, product];
    setCart(updatedCart);
    setCount(cartCount + 1);

    // Update cart data in localStorage
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
  } else {
    // If the product is already in the cart, update its count
    const updatedCartItems = cartItems.map((item) =>
      item.id === product.id ? { ...item, count: item.count + countOfProduct } : item
    );

    // Update the cart with the updated items
    setCart(updatedCartItems);

    // Update cart data in localStorage
    localStorage.setItem("cartData", JSON.stringify(updatedCartItems));
  }
};







/**======================================================================================================
 * Function for removing the products from the cart 
 * @param {object} product The product which want to be removed from the cart.
 *                         This should contain at least an 'id' property.
 *                         It represents the product being added to the cart.
 *                         Example: { id: 1, name: 'Product A', price: 10 }
 * After removing the product from the state , the cartCount is also updated : it will decremented by 1 .
 * after that the updated cart items sotre it in the local storage 
 * @returns {void}
 =========================================================================================================*/
const removeCart=(product)=>{
  // Decrement the cart count
setCount(cartCount-1);
// Filter out the product to be removed from the cart
const updatedCart=cartItems.filter((item)=>product.id !== item.id);
// Update the cart with the filtered cart items
setCart(updatedCart);
// Update cart data in localStorage
localStorage.setItem("cartData",JSON.stringify(updatedCart));
}






  return (
    

    <>
    <ContextProvider>

     <Header/>
    <Product   addtoCart={addtoCart} />
    {/* <ContactForm/> */}
    <CartComponent cartItems={cartItems} cartCount={cartCount} removeCart={removeCart}/>
     <Footer/>


     </ContextProvider>
    </>

    
  )
}
export default App