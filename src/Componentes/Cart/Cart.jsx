import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { FaTrashAlt } from "react-icons/fa";


export const Cart= ()=>{

    const {cart, SumaTotal}=useContext(CartContext)
    
    
    
    return(
        <section className="row g-0 seccionCarrito">
            <article className="col-12 tituloCarrito">
                <h1>Carrito de Compras</h1>
            </article>
            {cart.map((i)=>
            <article key={i.id} className="containerCarrito">
                <article className="contenedorImagen">
                    <img src={i.img} alt=""/>
                </article>
                <article>
                    <h4>Tabla</h4> 
                    <h4>{i.tipo}</h4>
                </article>
                <article>
                    <p>Comen</p>
                    <p>{i.comen}</p>
                </article>
                <article>
                    <p>Pican</p> 
                    <p>{i.pican}</p>
                </article>
                <article>
                    <p>P. Unitario</p> 
                    <p>${i.venta.toFixed(2)}</p>
                </article>
                <article>
                    <p>Cantidad</p> 
                    <p>{i.cantidad}</p>
                </article>
                <article>
                    <p>Subtotal</p>
                    <p>${(i.venta * i.cantidad).toFixed(2)}</p>
                </article>
                <article>
                    <FaTrashAlt id={i.id} />
                </article>
            </article>
            )}
            <article className="col-10 contenedorTotal">
                <h3>El total de su compra es de</h3>
                <h2>${SumaTotal().toFixed(2)}</h2>
                <article className="contenedorBotones">
                    <button>Finalizar Compra</button>
                    <button>Seguir Comprando</button>
                </article>
            </article>
        </section>
    )
}

