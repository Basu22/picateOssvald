import { useState } from 'react'
import { FinalizaCompra } from '../FinalizaCompra/FinalizaCompra'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail=({id, comen, pican, tipo, img, venta, contador, setContador})=> {
  
  const [finalizacompra, setFinalizacompra] = useState(false);



  const onAdd = ()=>{
    if(contador>0){
      const itemCarrito={
        id,
        comen,
        pican,
        tipo,
        contador,
        venta
      }
      setFinalizacompra(true)
      console.log(itemCarrito)
    }else{
      console.log("debe de ingresar un producto!")
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
              <h3>Precio:$ {(venta*contador).toFixed(2)}</h3>
            </article>
            {finalizacompra
            ?<FinalizaCompra/>
            :<ItemCount 
                stock={10} 
                onAdd={onAdd} 
                contador={contador}
                setContador={setContador}/>
          }
          </article>
        </article>
    </section>
  )
}