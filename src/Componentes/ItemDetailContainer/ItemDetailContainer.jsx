import { useState,useEffect } from 'react'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { GetData } from '../GetData/GetData'
import { useParams } from 'react-router-dom'
import { Loading } from '../Loading/Loading'

export const ItemDetailContainer=()=> {

    const [detalleProductos, setDetalleProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect(()=>{
        setLoading(true)
        GetData()
            .then((data)=>{
                    const filtro=data.filter((el)=>el.id===id)
                    setDetalleProductos(filtro)
            })
            .catch((err)=>console.log(err))
            .finally(()=>setLoading(false))
    },[id])
        
    return (
        <>
        {loading?<Loading/>:<ItemDetail detalle={detalleProductos}/>}
        </>   
    )
}
