export const ItemCount=({stock,onAdd,cantidad,setCantidad}) =>{

const sumarProducto = ()=>{
  (cantidad<stock)&&setCantidad(cantidad+1)
}
const restarProducto=()=>{
  (cantidad>0)&&setCantidad(cantidad-1)
}

  return (
    <section className="cajaProducto">
        <section className="cajaBotones">
          <button className="botones" onClick={restarProducto}> - </button>
          <span>{cantidad}</span>
          <button className="botones" onClick={sumarProducto}> + </button>
        </section>
        <section className="cajaStock">
          <p>Stock: {stock-cantidad} productos</p>
        </section>
        <section className='cajaAgregar'>
          <button className="botonAgregar" onClick={onAdd}>Agregar Carrito</button>
        </section>
    </section>
  )
}

