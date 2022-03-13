import '../../SCSS/productos.scss';
import { useState } from "react";

export default function ItemCount({stock,inicio, onAdd}) {
const [contador, setContador]=useState(inicio);

const sumarProducto = ()=>{
  (contador<stock)&&setContador(contador+1)
}
const restarProducto=()=>{
  (contador>0)&&setContador(contador-1)

}
  return (
    <section className="cajaProducto">
        <section className="cajaBotones">
          <button className="botones" onClick={restarProducto}> - </button>
          <span>{contador}</span>
          <button className="botones" onClick={sumarProducto}> + </button>
        </section>
        <section className="cajaStock">
          <p>Stock: {stock-contador} productos</p>
        </section>
        <section className='cajaAgregar'>
          <button className="botonAgregar" onClick={onAdd}>Agregar Carrito</button>
        </section>
    </section>
  )
}

