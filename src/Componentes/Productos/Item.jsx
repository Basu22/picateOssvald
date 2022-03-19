import ItemCount from "./ItemCount";
export default function Item({id,comen,pican,tipo,costo,venta,img}) {

    return (
    <article key={id} className="col-4 productosItems">
        <h2>Comen {comen} Pican {pican}</h2>
        <h3>Tabla {tipo}</h3>
        <button id={id} >Detalles</button>
    </article>
    )
}