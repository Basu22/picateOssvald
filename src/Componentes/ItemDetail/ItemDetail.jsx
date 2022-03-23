import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail=({detalle})=> {
  const onAdd = ()=>{
    console.log("agregamos al carrito")
}

  return (
    <section className='row contenedorDetalles g-0'>
        {detalle.map((d)=>
          <article key={d.id} className='col-12 itemDetalle'>
            <article className='col-6 contenedorDivision1'>
              <article className='col-12 contenedorTitulo'>
                <h2>Comen {d.comen} Pican {d.pican}</h2>
              </article>
              <article className='col-12 contenedorSubtitulo'>
                <h3>Tabla {d.tipo}</h3> 
              </article>
              <article className='col-12 contenedorImagen'>
                <img src={d.img} className="imgPicada" alt={"Imagen Comen "+d.comen+" Pican "+d.pican+" "+d.tipo} />
              </article>
            </article>
            <article className='col-5 contenedorDivision2'>
            <article className='contenedorPrecio'>
              <h3>Precio:$ {d.venta.toFixed(2)}</h3>
            </article>
            <ItemCount stock={10} inicio={0} onAdd={onAdd}/>
            </article>
          </article>
        )}
    </section>
  )
}