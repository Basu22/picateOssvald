import { useEffect, useState } from 'react';
import {ItemList} from '../ItemList/ItemList';
import { GetData } from '../GetData/GetData'


export const ItemListContainer=({gretting})=> {

  const [productos, setProductos] = useState([])

  
  useEffect(()=>{
    GetData()
      .then((data)=> setProductos(data))
      .catch((err)=>console.log(err))
    },[])


  return (
    <section className="row contenedorTitulo g-0">
        <article className="primerTitulo"><h1>{gretting}</h1></article>
        <ItemList productos={productos}/>
    </section>
  )
}
