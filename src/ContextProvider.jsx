import { children, React,createContext,useState,useEffect,useRef } from "react";
export const MyContext = createContext();




export default function ContextProvider({children}) {

  const [cartItems,setCart] = useState([]); // state for the cart items 
  const [cartCount,setCount] = useState(0); // state for the total cartitems count . 
  const [productsData, setProductsData] = useState([]);  // state for the products data in the Home page 


  /**===========================================================================
 * Retrieves  data from  the local host (JSON server) for the home page when the component mounts . 
 * if the data exists paresed to json and update the productsData state 
 * If cart data is not found , the cart count is set to 0.intializing cart count is 0
 ===============================================================================*/
  useEffect(() => {
    fetch("http://localhost:3000/productsData")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductsData(data); // Update the state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


/**==========================================================
 * Reference for the select box in the product list.
 * useEffect will work when the productList component mounts 
 ==============================================================*/
  const selectRef = useRef(null); // Ref for the select input element
  useEffect(()=>{
    selectRef.current?.focus(); // option chaining 
  },[]);



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
     cartData = JSON.parse(cartData);
     setCart(cartData);
     setCount(cartData.length);
      }else setCount(0); // If cart data is not found, set the cart count to 0

}, []);



/**====================================================================================================
 * Adds a product to the shopping cart.
 * Updating the Total count in it . 
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

  } else {
    // If the product is already in the cart, update its count
    const updatedCartItems = cartItems.map((item) =>
      item.id === product.id ? { ...item, count: item.count + countOfProduct } : item
    );
    // Update the cart with the updated items
    setCart(updatedCartItems);

  }
};
    

/**======================================================================================================
 * Function for removing the products from the cart 
 * @param {object} product The product which want to be removed from the cart.
 *                         This should contain at least an 'id' property.
 * After removing the product from the state , the cartCount is also updated : it will decremented by 1 .
 * @returns {void}
 =========================================================================================================*/
 const removeCart=(product)=>{
  // Decrement the cart count
setCount(cartCount-1);
// Filter out the product to be removed from the cart
const updatedCart=cartItems.filter((item)=>product.id !== item.id);
// Update the cart with the filtered cart items
setCart(updatedCart);
}

/**====================================================================================== 
 * useEffect hook to update local storage whenever cartItems change
 *  It  converts the cartItems array into a JSON string and stores it in the 'cartData' key of the local storage.
 * This setup ensures that the local storage always updated with  the latest state of the  cart Items.
 =========================================================================================*/
 useEffect(()=>{
  console.log("cart updated...");
  localStorage.setItem("cartData", JSON.stringify(cartItems));
},[cartItems]);



  return (
    <MyContext.Provider  value={{cartItems,setCart,cartCount,setCount,addtoCart, removeCart,selectRef,productsData}}>

    {children}

    </MyContext.Provider>
  )
}

