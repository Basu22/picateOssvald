import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../../../../Context/CartContext"

export const ItemCount=({stock,onAdd}) =>{

  const { cart,IsInCart }=useContext(CartContext)
  const [cantidad, setCantidad] = useState(0)
  const {id} = useParams()

  const sumarProducto = (stock)=>{
    //busco en carrito si hay registros con ese ID
    const cantidadCart = cart.filter((i)=>i.item.id === id)
    //resto stock db vs cantidad de cart si existe y armo control para counter en la suma.
    const stockFinal = stock - (IsInCart(id)?cantidadCart[0].quantity:0)
    return (cantidad<stockFinal)&&setCantidad(cantidad+1)
  }

  const restarProducto=()=>{
      return (cantidad>0)&&setCantidad(cantidad-1)
  }

  const controlStock = ()=>{
      //traigo cantidad consumida del cart filtrando por ID
      const cantidadCart = cart.filter((i)=>i.item.id === id)
      // resto stock de db vs cantidad de counter vs cantidad de carrito si existiera
      return stock - cantidad - (IsInCart(id)?cantidadCart[0].quantity:0)
}

  return (
    <section className="cajaProducto">
        <section className="cajaBotones">
          <button className="botones" onClick={restarProducto}> - </button>
          <span>{cantidad}</span>
          <button className="botones" onClick={()=>sumarProducto(stock)}> + </button>
        </section>
        <section className="cajaStock">
          <p>Stock: {controlStock()} productos</p>
        </section>
        <section className='cajaAgregar'>
          <button className="botonAgregar" disabled={(cantidad===0)} onClick={()=>{onAdd(cantidad); setCantidad(0)}}>Agregar Carrito</button>
        </section>
    </section>
  )
}

