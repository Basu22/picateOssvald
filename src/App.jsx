import React from 'react'
import NavBar from './Componentes/Navegador/NavBar'
import ItemDetailContainer from './Componentes/Productos/ItemDetailContainer'
import ItemListContainer from './Componentes/Productos/ItemListContainer'

export default function App() {
  return (
    <>
    <React.StrictMode>
      <NavBar />
      <ItemListContainer gretting="Nuestros Productos"/>
      <ItemDetailContainer />
    </React.StrictMode>
    </>
  )
}