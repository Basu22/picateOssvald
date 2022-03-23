import React from 'react'
import {NavBar} from './Componentes/NavBar/NavBar'
import {ItemDetailContainer} from './Componentes/ItemDetailContainer/ItemDetailContainer'
import {ItemListContainer} from './Componentes/ItemListContainer/ItemListContainer'
//ESTILOS SASS
import './SCSS/styles.scss';




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