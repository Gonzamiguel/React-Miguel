
import './App.css';
import Nav from './componente/nav/Nav';
import Header from './componente/header/Header';
import ItemListContainer from "./componente/itemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from './componente/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>

      <Nav/>
      {/* <Header/> */}

      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>

</BrowserRouter>
  )
}

export default App
