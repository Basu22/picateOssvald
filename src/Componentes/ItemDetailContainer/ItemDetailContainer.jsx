import { useState,useEffect } from 'react'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { Loading } from '../Loading/Loading'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../Helpers/Firebase'

export const ItemDetailContainer=()=> {

    const [detalleProductos, setDetalleProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const {id} = useParams()



    useEffect(()=>{
        setLoading(true)
        const dataProductos = doc(db, 'Items', id) 

        getDoc(dataProductos)
        .then((res)=>{
            setDetalleProductos({id:res.id,...res.data()}) 
        })
        .finally(()=>{
            setLoading(false)
        })
    },[id])

    return (
        <>
        {loading
        ?<Loading/>
        :<ItemDetail 
            {...detalleProductos}  
        />}
        </>
    )
}
