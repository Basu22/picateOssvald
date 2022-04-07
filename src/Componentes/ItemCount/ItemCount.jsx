import { useState } from "react"

export const ItemCount=({stock,onAdd}) =>{

  const [cantidad, setCantidad] = useState(0)

  const sumarProducto = (stock)=>{
    return (cantidad<stock)&&setCantidad(cantidad+1)
  }

  const restarProducto=()=>{
      return (cantidad>0)&&setCantidad(cantidad-1)
  }

  return (
    <section className="cajaProducto">
        <section className="cajaBotones">
          <button className="botones" onClick={restarProducto}> - </button>
          <span>{cantidad}</span>
          <button className="botones" onClick={()=>sumarProducto(stock)}> + </button>
        </section>
        <section className="cajaStock">
          <p>Stock: {stock} productos</p>
        </section>
        <section className='cajaAgregar'>
          <button className="botonAgregar" disabled={(cantidad===0)} onClick={()=>{onAdd(cantidad); setCantidad(0)}}>Agregar Carrito</button>
        </section>
    </section>
  )
}

