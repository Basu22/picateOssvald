import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { format } from 'date-fns'
import { addDoc, collection } from 'firebase/firestore'
import { db } from "../../Helpers/Firebase"


export const FormularioCompra = ()=>{
    const [orden,setOrden] = useState('')
    const {cart,sumaTotal}=useContext(CartContext)
    const handleEnviar= async (e)=>{
        //se utiliza para no recargar la pagina cada vez que le damos enviar
        e.preventDefault()
        const datosVenta={
            buyer:{
                name:e.target[0].value,
                phone:e.target[1].value,
                email:e.target[2].value,
            },
            items:cart,
            date: format(new Date(), 'dd/MM/yyyy'),
            total:sumaTotal()
        }
        
        const colecciones = collection( db , "Ventas" )
        const referenciaDoc = await addDoc (colecciones, datosVenta)
        console.log("ref",referenciaDoc.id)
        setOrden(referenciaDoc.id)
    }



    return(
        <>
            <h1>Formulario de Compra</h1>
            <form onSubmit={handleEnviar}>
                <input type="text"  placeholder="Tu nombre" required/>
                <input type="tel"  placeholder="Tu telefono" required/>
                <input type="email" placeholder="Tu mail" required/>
                <button type="subtmit">Enviar</button>
            </form>
            {(orden===''?<></>:<h2>Se ha creado la Orden: {orden}</h2>)}
        </>
    )
}