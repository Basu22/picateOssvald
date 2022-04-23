import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from '../Loading/Loading'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../Helpers/Firebase'
import { ItemDetail } from './ItemDetail/ItemDetail'
import { BackPage } from '../BackPage/BackPage'

export const ItemDetailContainer=()=> {
    const [estadoConexion, setEstadoConexion]=useState(true)
    const [detalleProductos, setDetalleProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect(()=>{
        setLoading(true)
        const dataProductos = doc(db, 'Items', id) 
        
        getDoc(dataProductos)
        .then((res)=>{
            setDetalleProductos({id:res.id,...res.data()}) 
            setEstadoConexion((res.data()===undefined)?false:true)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[id])
    
    
    return (
        <>
        {
        loading
        ?<Loading/>
        :(estadoConexion)?<ItemDetail {...detalleProductos}/>:<BackPage />
        }
        </>
    )
}
