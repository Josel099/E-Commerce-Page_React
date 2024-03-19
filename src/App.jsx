import './App.css'
import Header from './header/HeaderComponent'
import Footer from './footer/FooterComponent'
import Product from './products/ProductComponent'

function App() {

  const productArray = [
    {id: 1,img:"src/assets/product_airJordan-1.jpeg",title: "Nike Air Jordan",price: 56150,description:"Air Jordan is a type or brand of basketball shoes produced by Nike, Inc. since 1984. In the name “Air” means air cushion technology. "},
    {id: 2,img:"src/assets/product_bag-6.jpg",title: "Williamson Satchel Bag",price: 21150,description:"This pvc coated fabric satchel features 1 slide pocket and 1 adjustable & detachable crossbody strap."},
    {id: 3,img:"src/assets/iphone15.jpg",title: "Iphone 15",price: 85150,description:"Get ₹3000.0-₹62300.00 off a new iPhone 15 or iPhone 15 Plus when you trade in an iPhone 6s or newer. Buy now with free shipping."},
    {id: 4,img:"src/assets/laptopOmen.jpg",title: "HP Omen Laptop",price: 91150,description:" The future of Gaming — Delivering your every gaming wish With 13th Gen Intel Core. Shop Now! Long-lasting battery life with Fast Charge."},
    {id: 5,img:"src/assets/ssd.jpg",title: "Samsung SSD 1TB",price: 11150,description:"Buy Samsung 1TB SSD  online. Learn all about Portable Solid State Drive 870 QVO SATA including prices & offers."},
    {id: 6,img:"src/assets/toycar.jpg",title: "Hybrid Toy car",price: 7150,description:"Buy Toy cars, trucks, planes, slot cars, race tracks for Kids at low prices in India.Toy car for childres they can play."},
    {id: 7,img:"src/assets/product_airJordan-1.jpeg",title: "Nike Air Jordan",price: 56150,description:"Air Jordan is a type or brand of basketball shoes produced by Nike, Inc. since 1984. In the name “Air” means air cushion technology. "},
    {id: 8,img:"src/assets/product_bag-6.jpg",title: "Williamson Satchel Bag",price: 21150,description:"This pvc coated fabric satchel features 1 slide pocket and 1 adjustable & detachable crossbody strap."},
    {id: 9,img:"src/assets/iphone15.jpg",title: "Iphone 15",price: 85150,description:"Get ₹3000.0-₹62300.00 off a new iPhone 15 or iPhone 15 Plus when you trade in an iPhone 6s or newer. Buy now with free shipping."}
    
  ];

  return (
    <>
     <Header/>
    <Product productArray={productArray}/>
     <Footer/>
    </>
  )
}

export default App
