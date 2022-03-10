import '../../SCSS/productos.scss';
import ItemCount from './ItemCount';

const onAdd = ()=>{
  console.log("agregamos al carrito")
}


export default function NuestrosProductos({gretting}) {
  return (
<section className="row contenedorTitulo">
    <article className="primerTitulo">{gretting}</article>
    <ItemCount stock={10} inicio={0} onAdd={onAdd}/>
</section>
  )
}
