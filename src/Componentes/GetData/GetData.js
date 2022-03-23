import picadas from '../../Json/productos.json'

export const GetData = () =>{
    return new Promise( (res,rej) => {
        setTimeout(()=>{
            if (picadas){
                res(picadas)
            }else{
                rej("error de conexión de base de datos!")
            }
        },3000)
    })
}



