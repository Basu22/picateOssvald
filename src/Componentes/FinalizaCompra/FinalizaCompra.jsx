import { Link } from "react-router-dom"

export const FinalizaCompra =()=>{
    
    return(
        <article className="cajaFinalizacompra">
            <Link to="/cart">
                <button className="botonFinalizar">Finalizar Compra</button>
            </Link>
        </article>
    )
}