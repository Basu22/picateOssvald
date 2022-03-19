import { useEffect, useState } from 'react';
import '../../SCSS/productos.scss';
import ItemList from './ItemList';
import picadas from '../Json/productos.json'

export default function ItemListContainer({gretting}) {

  const [productos, setProductos] = useState(picadas)

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
