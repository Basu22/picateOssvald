import { useEffect, useState } from 'react';
import '../../SCSS/productos.scss';
import ItemList from './ItemList';

export default function ItemListContainer({gretting}) {

  const [productos, setProductos] = useState([{
    id:"C2P3C",
    comen:2, 
    pican:3, 
    tipo:"Clasica", 
    costo:656.10, 
    venta:1400,
    img:"./img/tablas/C2P3C.png"
},            
{
    id:"C4P6C",
    comen:4, 
    pican:6, 
    tipo:"Clasica", 
    costo:1151.41, 
    venta:2200,
    img:"./img/tablas/C4P6C.png"
},                         
{
    id:"C8P10C",
    comen:8, 
    pican:10, 
    tipo:"Clasica", 
    costo:1965.37, 
    venta:3300,
    img:"./img/tablas/C8P10C.png"
},])

  function recaudarProductos(){
    return new Promise ((res,rej)=>{
        setTimeout(() => {
        if(Object.entries(productos===0).length){
            rej("cayo la conexión a la base de datos, vuelva a intentar.")   
        }else{res(productos)}}, 2000);
    })
  }
  
  useEffect(()=>{
    recaudarProductos().then((i)=>{
      setProductos(i) }
      ).catch((err)=>{
        return err
      })
    },[])
  return (
<section className="row contenedorTitulo">
    <article className="primerTitulo"><h1>{gretting}</h1></article>
    <ItemList productos={productos}/>
</section>
  )
}
