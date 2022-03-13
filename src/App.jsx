import React from 'react'
import NavBar from './Componentes/Navegador/NavBar'
import ItemListContainer from './Componentes/Productos/ItemListContainer'

export default function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer gretting="Nuestros Productos"/>
    </>
  )
}