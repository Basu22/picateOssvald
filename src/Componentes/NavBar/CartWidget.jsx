import { Link } from "react-router-dom"

export const CartWidget = () => {
  return (
    <Link to="/">
            <article>
                <img className="carritoCompra" src="../img/navegador/agregar-carrito.png" alt="Carrito de Compras" loading="lazy" />
            </article>    
    </Link>
  )
}


