import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children})=>{

    const [cart, setCart] = useState([])


    const AddCart = (item, quantity)=>{
        //chequeamos si existe el item dentro del carrito 
        if (IsInCart(item.id)){
            //traemos todos los items del carrito del momento
            const lecturaCarrito = [...cart]
            //hacemos un find del producto que estamos clickeando
            const cartFind = lecturaCarrito.find((i)=>i.item.id === item.id)
            //de ahi tomamos la cantidad y le agregamos la cantidad que sumo el carrito
            cartFind.quantity = cartFind.quantity + quantity
            setCart(lecturaCarrito)
        }else{
            //sino agregamos un nuevo producto con info + cantidad
            const nuevoProducto={
                item,
                quantity
            }
            //ingresamos el nuevo registro en cart
            setCart([...cart, nuevoProducto])
        }
    }

    const clear =()=>{
        setCart([]);
    }

    const borrarItem = (id) =>{
        //filtramos los items que no sean del ID al cual le hicimos clic
        const item=cart.filter((i)=>i.item.id !== id)
        // ingresamos el resultado de la variable
        setCart(item)
    }

    const IsInCart = (id)=>{
        return cart.some((i)=>i.item.id === id)
    }

    const cantidadTotal= ()=>{
        return cart.reduce((acc,i)=> acc + i.quantity, 0)
    }

    const sumaTotal=()=>{
        return cart.reduce((acc, i)=> acc + (i.item.venta * i.quantity),0)
    }



return (
        <CartContext.Provider
        value={
            {cart, 
            setCart, 
            AddCart, 
            sumaTotal, 
            borrarItem, 
            IsInCart,
            cantidadTotal,
            clear}}>
            {children}
        </CartContext.Provider>
    )
}