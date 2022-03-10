import '../../SCSS/productos.scss';
import { useState } from "react";


export default function ItemCount({stock,inicio, onAdd}) {
const [counter, setCounter]=useState(inicio);

const add = ()=>{
  (counter<stock)&&setCounter(counter+1)
}
const resta=()=>{
  (counter>0)&&setCounter(counter-1)





}
  return (
    <section className="cajaProducto">
        <section className="cajaBotones">
          <button className="botones" onClick={resta}> - </button>
          <span>{counter}</span>
          <button className="botones" onClick={add}> + </button>
        </section>
        <section className="cajaStock">
          <p>Stock: {stock-counter} productos</p>
        </section>
        <section className='cajaAgregar'>
          <button className="botonAgregar" onClick={onAdd}>Agregar Carrito</button>
        </section>
    </section>
  )
}

