import { useState,useEffect } from 'react'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { GetData } from '../GetData/GetData'
import { useParams } from 'react-router-dom'
import { Loading } from '../Loading/Loading'

export const ItemDetailContainer=()=> {

    const [detalleProductos, setDetalleProductos] = useState([])
    const [contador, setContador]=useState(0);
    const [loading, setLoading] = useState(false)
    const {id} = useParams()



    useEffect(()=>{
        setLoading(true)
        GetData()
            .then((data)=>{
                    setDetalleProductos(data.find((el)=>el.id===id))
                    console.log(data.find((el)=>el.id===id))
            })
            .catch((err)=>console.log(err))
            .finally(()=>setLoading(false))
    },[id])

    return (
        <>
        {loading
        ?<Loading/>
        :<ItemDetail 
            {...detalleProductos}  
            contador={contador}
            setContador={setContador}
        />}
        </>   
    )
}
