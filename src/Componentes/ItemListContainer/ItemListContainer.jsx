import { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { Loading } from '../Loading/Loading';
import { db } from "../../Helpers/Firebase"
import { collection,getDocs, query, where } from 'firebase/firestore';

export const ItemListContainer=({gretting})=> {

  const [loading, setLoading] = useState(false)

  const [productos, setProductos] = useState([])
  const {categoryId} = useParams()

  useEffect(()=>{
    setLoading(true)
    // armo la referencia a mi colección
    const dataProductos = collection(db, 'Items')
    const q = categoryId?query( dataProductos, where("tipo", "==", categoryId )):dataProductos
    
    getDocs(q)
      .then((res)=>{
        //primero entro a docs y recorro con un maps hasta llegar a data()
        setProductos(res.docs.map((doc)=>{
          return{
              id:doc.id,
              ...doc.data()
          }
        }))
      })
      .finally(()=>{
        setLoading(false)
      })
  },[categoryId])


  return (
    <section className="row contenedorTitulo g-0">
        <article className="primerTitulo"><h1>{categoryId?gretting +" "+ categoryId:gretting}</h1></article>
        {loading ? <Loading /> : <ItemList productos={productos}/>}
    </section>
  )
}
