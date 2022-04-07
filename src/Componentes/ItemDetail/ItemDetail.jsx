import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail=({id, comen, pican, tipo, img, venta, stock})=> {
  
  const cartContext = useContext(CartContext)

  const onAdd = (cantidad)=>{
        //armo un objeto con los datos que necesito para armar mi carrito.
        const itemCarrito={id,comen,pican,tipo,venta,img,stock}
        // envio el item al que le di agregar al AddCart de mi contexto.
        cartContext.AddCart(itemCarrito, cantidad)
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
              <h3>Precio:$ {venta}</h3>
            </article>
            {
            <ItemCount 
                stock={stock}
                onAdd={onAdd}/>
            }
          </article>
        </article>
    </section>
  )
}