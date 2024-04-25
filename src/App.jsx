import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";
import Checkout from "./components/Checkout";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";
import './style.css'

const App = () => {
  return (
    <div className="m-0 p-0">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path={"/"} element={<> <Carousel/> </>}/>
            <Route path={"/productos"} element={<ItemListContainer/>}/>  
            <Route path={"/category/:id"} element={<ItemListContainer/>}/>  
            <Route path={"/item/:id"} element={<ItemDetailContainer/>}/> 
            <Route path={"/cart"} element={<Cart/>}/>
            <Route path={"/checkout"} element={<Checkout/>}/>    
            <Route path={"*"} element={<Error404/>}/>  
          </Routes>
          <AboutUs/>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;