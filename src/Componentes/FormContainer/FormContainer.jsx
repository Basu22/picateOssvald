import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { format } from 'date-fns'
import { addDoc, collection } from 'firebase/firestore'
import { db } from "../../Helpers/Firebase"
import { Volver } from "../Buttons/Volver"
import { FormBuyer } from "./FormBuyer/FormBuyer"
import { BuyResume } from "./BuyResume/BuyResume"


export const FormContainer = ()=>{
    
    const [orden,setOrden] = useState('')
    
    const {cart,setCart,sumaTotal}=useContext(CartContext)
    
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
        
        setOrden(referenciaDoc.id)
        setCart([])
    }
    return(
        <>
            {(orden===''
                ?
                <section className="row g-0">
                    <article className="col-6">
                        <FormBuyer 
                        handleEnviar={handleEnviar}/>
                    </article>
                    <article className="col-6">
                        <BuyResume />
                    </article>
                </section>
                :
                <>
                <section className="contenedorOrden">
                    <article className="numeroOrden">
                        <h3>Se ha creado la Orden</h3> 
                        <p>con el identificador {orden}</p>
                        <Volver nombre="Seguir Comprando" />
                    </article>
                </section>
                </>
                )}
        </>
    )
}
