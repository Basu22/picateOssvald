import { useContext } from "react"
import { CartContext } from "../../../Context/CartContext"

export const BuyResume = ()=>{  
    
    const{cart, sumaTotal}=useContext(CartContext)
    
    return(
        <>
            <article className="contenedorResumen">
                <article className="contenedorTitulo row">
                    <h3 className="">Resumen de Compra</h3>
                    <p className="" >La compra se compone de los siguientes productos</p>
                </article>
                {cart.map((i)=>
                        <article key={i.item.id} className="contenedorItems row g-0">
                            <article className="contenedorImagen col-6">
                                <img src={i.item.img} alt=""/>
                            </article>
                            <article className="col-6">
                                <h4>Tabla {i.item.tipo} x {i.quantity} </h4> 
                                <p>Comen {i.item.comen} Pican {i.item.pican}</p>
                                <p>Total ${(i.item.venta * i.quantity).toFixed(2)}</p>
                            </article>
                        </article>
                )}
                <article className="col-12 contenedorTotal">
                    <h3>El total de su compra es de</h3>
                    <h2>${sumaTotal().toFixed(2)}</h2>
                </article>
            </article>
        </>
    )

}