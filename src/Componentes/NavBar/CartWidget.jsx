import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"



export const CartWidget = () => {
  const {cart, cantidadTotal} = useContext(CartContext)
  
  return (
            <article>{
              //si el carrito tiene items lo muestro sino lo desmonto.
              (cart.length === 0)
              ?<></>
              :<>
              <img className="carritoCompra" src="../img/navegador/agregar-carrito.png" alt="Carrito de Compras" loading="lazy" />
              {//llamdo a la función de cantidad total para mostrar el resultado
                <span>{cantidadTotal()}</span>
              }
              </>
              }
            </article>    
  )
}


