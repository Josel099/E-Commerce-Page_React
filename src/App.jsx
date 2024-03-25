import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductListComponent from "./pages/productList/ProductListComponent";
import ContactFormComponent from "./pages/contactForm/ContactFormComponent";
import Home from "./pages/home/Home"
import MainLayout from "./mainLayout/MainLayout";
import CartComponent from "./pages/cart/CartComponent";



const router = createBrowserRouter([
  {
    element:<MainLayout/>,
    children:[
      {
        path:'/',
        element: <Home/>,
      },{
        path:'/products',
        element: <ProductListComponent/>
      },{
          path:'/cart',
          element: <CartComponent/>
      },
      {
        path:'/contactForm',
        element:<ContactFormComponent/>
      }]
  },
])



function App() {
  return (
  <RouterProvider router={router}/>
  )

}
export default App;
