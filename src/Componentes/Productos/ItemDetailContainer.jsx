import React, { useState,useEffect } from 'react'
import picadas from '../Json/productos.json'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {

    const [detalleProductos, setDetalleProductos] = useState(picadas)

    const getItem = new Promise((res,rej)=>{
            setTimeout(()=>{
                if(Object.entries(detalleProductos===0).length){
                    rej("cayo la conexión a la base de datos, vuelva a intentar.")   
                }else{
                    res(detalleProductos)
                }},2000)
            })
    useEffect(()=>{
        getItem.then((d)=>setDetalleProductos(d))
    },[])

        return (
            <section className='row contenedorDetalles'>
                <ItemDetail detalle={detalleProductos}/>
            </section>

        )}
