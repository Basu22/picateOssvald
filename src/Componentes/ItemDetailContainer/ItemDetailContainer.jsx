import { useState,useEffect } from 'react'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { GetData } from '../GetData/GetData'

export const ItemDetailContainer=()=> {

    const [detalleProductos, setDetalleProductos] = useState([])

    useEffect(()=>{
        GetData()
            .then((data)=>{
                setDetalleProductos(data.filter((el)=>el.id=="C2P3C"))
            })
            .catch((err)=>console.log(err))
    },[])
        
    return (
            <ItemDetail detalle={detalleProductos}/>
    )
}
