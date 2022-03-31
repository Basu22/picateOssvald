import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"



export const CartWidget = () => {

  const {SumaCantidad, cart} = useContext(CartContext)
  
  return (
            <article>{
              (cart.length === 0)
              ?<></>
              :<>
                <img className="carritoCompra" src="../img/navegador/agregar-carrito.png" alt="Carrito de Compras" loading="lazy" />
                <span>{SumaCantidad()}</span>
              </>
              }
            </article>    
  )
}


