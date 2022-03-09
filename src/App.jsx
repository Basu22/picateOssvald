import React from 'react'
import NavBar from './Componentes/Navegador/NavBar'
import NuestrosProductos from './Componentes/Productos/ItemListContainer'

function App() {
  return (
    <>
    <NavBar />
    <NuestrosProductos gretting="Nuestros Productos"/>
    </>
  )
}

export default App