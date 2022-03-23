import { useEffect, useState } from 'react';
import {ItemList} from '../ItemList/ItemList';
import { GetData } from '../GetData/GetData'
import { useParams } from 'react-router-dom';


export const ItemListContainer=({gretting})=> {

  const [loading, setLoading] = useState(false)

  const [productos, setProductos] = useState([])
  const {categoryId} = useParams()

  useEffect(()=>{
    setLoading(true)
      GetData()
        .then((data)=> {
          if(categoryId){
            const filtro = data.filter((el)=>el.tipo===categoryId)
            setProductos(filtro)
          }else{
            setProductos(data)
          }
        })
        .catch((err)=>{
          console.log(err)
        })
        .finally(()=>{
          setLoading(false)
        })
    },[categoryId])


  return (
    <section className="row contenedorTitulo g-0">
        <article className="primerTitulo"><h1>{categoryId?gretting +" "+ categoryId:gretting}</h1></article>
        {loading ? "loading...." : <ItemList productos={productos}/>}
    </section>
  )
}
