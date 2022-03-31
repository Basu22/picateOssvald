import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children})=>{

    const [cart, setCart] = useState([])

    const AddCart = (item)=>{
        setCart([...cart, item])
    }

    const borrarItem = (id) =>{
        //filtramos los items que no sean del ID al cual le hicimos clic
        const item=cart.filter((item)=>item.id !== id)
        // ingresamos el resultado de la variable
        setCart(item)
    }

    const IsInCart = (id)=>{
        return cart.some((item)=>item.id === id)
    }

    const SumaCantidad = ()=>{
        return cart.reduce((acc, item)=> acc + item.cantidad,0)
    }

    const SumaTotal=()=>{
        return cart.reduce((acc, item)=> acc + (item.venta * item.cantidad),0)
    }


return (
        <CartContext.Provider
        value={{cart, setCart, AddCart, SumaCantidad, SumaTotal, borrarItem, IsInCart}}>
            {children}
        </CartContext.Provider>
    )
}