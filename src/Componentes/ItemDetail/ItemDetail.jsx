import { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext';
import { FinalizaCompra } from '../FinalizaCompra/FinalizaCompra'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail=({id, comen, pican, tipo, img, venta, cantidad, setCantidad})=> {
  
  
  const {AddCart, IsInCart} = useContext(CartContext)
  


  const onAdd = ()=>{
    if(cantidad>0&&!IsInCart(id)){
      //armo un objeto con los datos que necesito para armar mi carrito.
      const itemCarrito={id,comen,pican,tipo,cantidad,venta,img}
      // envio el item al que le di agregar al AddCart de mi contexto.
      AddCart(itemCarrito)
    }else{
      // genero un alerta para infomar que debe de seleccionar un producto para e carrito.
      alert("debe de ingresar un producto!") 
    }
  }
  
  return (
    <section className='row contenedorDetalles g-0'>
        <article key={id} className='col-12 itemDetalle'>
          <article className='col-6 contenedorDivision1'>
            <article className='col-12 contenedorTitulo'>
              <h2>Comen {comen} Pican {pican}</h2>
            </article>
            <article className='col-12 contenedorSubtitulo'>
              <h3>Tabla {tipo}</h3> 
            </article>
            <article className='col-12 contenedorImagen'>
              <img src={img} className="imgPicada" alt={"Imagen Comen "+comen+" Pican "+pican+" "+tipo} />
            </article>
          </article>
          <article className='col-5 contenedorDivision2'>
            <article className='contenedorPrecio'>
              <h3>{IsInCart(id)
              ?`Precio:$ ${(venta).toFixed(2)}`
              :`Precio:$ ${(venta*cantidad).toFixed(2)}`
              }</h3>
            </article>
            {
            IsInCart(id)
            ?<FinalizaCompra/>
            :<ItemCount 
                stock={10} 
                onAdd={onAdd} 
                cantidad={cantidad}
                setCantidad={setCantidad}/>
            }
          </article>
        </article>
    </section>
  )
}