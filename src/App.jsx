
import './App.css';
import Nav from './componente/nav/Nav';
import ItemListContainer from "./componente/itemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from './componente/itemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import CartView from './componente/cartView/CartView';
import Checkout from './componente/checkout/Checkout';

function App() {

  return (

    <CartProvider>

    <BrowserRouter>

      <Nav/>
      <Routes>
        
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/productos/:categoriaId" element={<ItemListContainer/>} />

        <Route path='/cart' element={<CartView/>} />
        <Route path="/checkout" element={<Checkout/>} />
        
      </Routes>

    </BrowserRouter>
    
    </CartProvider>
  )
}

export default App
