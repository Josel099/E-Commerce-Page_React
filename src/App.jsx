import "./App.css";
import Header from "./header/HeaderComponent";
import Footer from "./footer/FooterComponent";
import Product from "./productList/ProductListComponent";
import CartComponent from "./cart/CartComponent";
import ContactForm from './contactForm/ContactFormComponent'

function App() {
  return (
    <>
      <Header />
      <Product />
      <CartComponent />
      <ContactForm/>
      <Footer />
    </>
  );
}
export default App;
