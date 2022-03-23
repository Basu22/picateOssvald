import {Item} from "../Item/Item";


export const ItemList=({productos})=> {
  
  return (
      <>
        <section className="row contenedorProductos">
          {productos.map((i)=><Item key={i.id} id={i.id} comen={i.comen} pican={i.pican} tipo={i.tipo} costo={i.costo} venta={i.venta} img={i.img} />)}
        </section>
      </>
)
}

