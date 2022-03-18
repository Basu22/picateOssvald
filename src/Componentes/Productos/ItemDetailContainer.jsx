import React from 'react'
import picadas from '../Json/productos.json'
import { useState } from 'react'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {

    const [detalleProductos, setDetalleProductos] = useState([picadas])

const getItem=(product)=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(Object.entries(product===0).length){
                rej("cayo la conexión a la base de datos, vuelva a intentar.")   
            }else{res(product)}}, 2000);
        },2000)
    }

    function ItemDetailContainer(detalle){
        getItem(detalle)
        .then((d)=> setDetalleProductos(d))    
    }

    console.log(ItemDetailContainer(detalleProductos))


        return (
            <div><ItemDetail detalle={ItemDetailContainer(detalleProductos)}/></div>
        )
    
    }

