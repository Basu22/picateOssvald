import ItemCount from "./ItemCount";
export default function Item({id,comen,pican,tipo,costo,venta,img}) {
    const onAdd = ()=>{
        console.log("agregamos al carrito")
    }
    return (
    <article key={id} className="col-3 productosItems">
    <h2>Comen {comen} Pican {pican}</h2>
    <h3>Tabla {tipo}</h3>
    <img src={img} alt={"Imagen Comen "+comen+" Pican "+pican+" "+tipo} />
    <h4>Precio:$ {venta}</h4>
    <ItemCount stock={10} inicio={0} onAdd={onAdd}/>
    </article>
    )
}

