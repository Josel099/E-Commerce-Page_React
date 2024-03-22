import './App.css'
import Header from './header/HeaderComponent'
import Footer from './footer/FooterComponent'
import Product from './products/ProductComponent'
import CartComponent from './cart/CartComponent'
import { useState,useEffect } from 'react'

function App() {
  const productArray = [
    {id: 1,img:"src/assets/product_airJordan-1.jpeg",title: "Nike Air Jordan",price: 56150,description:"Air Jordan is a type or brand of basketball shoes produced by Nike, Inc. since 1984. In the name “Air” means air cushion technology. "},
    {id: 2,img:"src/assets/product_bag-6.jpg",title: "Williamson Satchel Bag",price: 21150,description:"This pvc coated fabric satchel features 1 slide pocket and 1 adjustable & detachable crossbody strap."},
    {id: 3,img:"src/assets/iphone15.jpg",title: "Iphone 15",price: 85150,description:"Get ₹3000.0-₹62300.00 off a new iPhone 15 or iPhone 15 Plus when you trade in an iPhone 6s or newer. Buy now with free shipping."},
    {id: 4,img:"src/assets/laptopOmen.jpg",title: "HP Omen Laptop",price: 91150,description:" The future of Gaming — Delivering your every gaming wish With 13th Gen Intel Core. Shop Now! Long-lasting battery life with Fast Charge."},
    {id: 5,img:"src/assets/ssd.jpg",title: "Samsung SSD 1TB",price: 11150,description:"Buy Samsung 1TB SSD  online. Learn all about Portable Solid State Drive 870 QVO SATA including prices & offers."},
    {id: 6,img:"src/assets/toycar.jpg",title: "Hybrid Toy car",price: 7150,description:"Buy Toy cars, trucks, planes, slot cars, race tracks for Kids at low prices in India.Toy car for childres they can play."}
  ];


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
     <Header/>
    <Product productArray={productArray} addtoCart={addtoCart}/>
    {/* <ContactForm/> */}
    <CartComponent cartItems={cartItems} cartCount={cartCount} removeCart={removeCart}/>
     <Footer/>
    
    </>
  )
}
export default App