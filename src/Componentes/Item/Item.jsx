import { Link } from "react-router-dom"

export const Item =({id,comen,pican,tipo,costo,venta,img})=> {

    return (
    <article key={id} className="col-3 productosItems">
        <h2>Comen {comen} Pican {pican}</h2>
        <h3>Tabla {tipo}</h3>
        <Link to={`/detalle/${id}`}>
            <button id={id} className="botonDetalle" >Detalles</button>
        </Link>
    </article>
    )
}