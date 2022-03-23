import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail=({detalle})=> {
  const onAdd = ()=>{
    console.log("agregamos al carrito")
}

  return (
    <section className='row contenedorDetalles g-0'>
        {detalle.map((d)=>
          <article key={d.id} className='col-4 itemDetalle'>
            <article className='col-12 contenedorTitulo'>
              <h2>Comen {d.comen} Pican {d.pican}</h2>
            </article>
            <article className='contenedorSubtitulo'>
              <h3>Tabla {d.tipo}</h3> 
            </article>
            <article className='contenendorImagen'>
              <img src={d.img} alt={"Imagen Comen "+d.comen+" Pican "+d.pican+" "+d.tipo} />
            </article>
            <article className='contenedorPrecio'>
              <h4>Precio:$ {d.venta.toFixed(2)}</h4>
            </article>
            <ItemCount stock={10} inicio={0} onAdd={onAdd}/>
          </article>
        )}
    </section>
  )
}