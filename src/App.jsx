import React from 'react'
import {NavBar} from './Componentes/NavBar/NavBar'
import {ItemDetailContainer} from './Componentes/ItemDetailContainer/ItemDetailContainer'
import {ItemListContainer} from './Componentes/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//ESTILOS SASS
import './SCSS/styles.scss';
import  {CartProvider}  from './Context/CartContext'
import { Cart } from './Componentes/Cart/Cart'

export default function App() {
  return (
    <>
    <React.StrictMode>

      <CartProvider>

        <BrowserRouter>
          
          <NavBar />
          
          <Routes>
            <Route path="/" element={<ItemListContainer gretting="Nuestros Productos"/>} />
            <Route path="/tablas/:categoryId" element={<ItemListContainer gretting="Tabla"/>} />
            <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>

        </BrowserRouter>
      
      </CartProvider>
    
    </React.StrictMode>
    </>
  )
}