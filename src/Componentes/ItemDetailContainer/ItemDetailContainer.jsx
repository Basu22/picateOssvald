import { useState,useEffect } from 'react'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { GetData } from '../GetData/GetData'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer=()=> {

    const [detalleProductos, setDetalleProductos] = useState([])
    const { id } = useParams()

    useEffect(()=>{
        GetData()
            .then((data)=>{
                const filtro=data.filter((el)=>el.id==={id})
                setDetalleProductos(filtro)
            })
            .catch((err)=>console.log(err))
    },[])
        
    return (
            <ItemDetail detalle={detalleProductos}/>
    )
}
