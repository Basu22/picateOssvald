import React from 'react'
import ItemCount from './ItemCount'

export default function ItemDetail({detalle}) {
 
  const onAdd = ()=>{
    console.log("agregamos al carrito")
}

  return (
    <>
        {detalle.map((d)=>
          <article className='col-4'>
            <h2>Comen {d.comen} Pican {d.pican}</h2>
            <h3>Tabla {d.tipo}</h3> 
            <img src={d.img} alt={"Imagen Comen "+d.comen+" Pican "+d.pican+" "+d.tipo} />
            <h4>Precio:$ {d.venta.toFixed(2)}</h4>
            <ItemCount stock={10} inicio={0} onAdd={onAdd}/>
          </article>
        )}
    </>
  )
}