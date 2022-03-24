import {productos} from '../../Json/productos.js'

export const GetData = () =>{
    return new Promise( (res,rej) => {
        setTimeout(()=>{
            if (productos){
                res(productos)
            }else{
                rej("error de conexión de base de datos!")
            }
        },3000)
    })
}



