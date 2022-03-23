
export const Item =({id,comen,pican,tipo,costo,venta,img})=> {

    return (
    <article key={id} className="col-3 productosItems">
        <h2>Comen {comen} Pican {pican}</h2>
        <h3>Tabla {tipo}</h3>
        <button id={id} className="botonDetalle" >Detalles</button>
    </article>
    )
}