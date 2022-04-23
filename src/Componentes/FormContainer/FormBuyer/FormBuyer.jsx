import { useEffect, useState } from "react"

export const FormBuyer = ({handleEnviar})=>{

    const [validacionMail, setValidacionMail]=useState(true)

    const validarMail = ()=>{
        const mail=document.querySelector("#mail").value
        const mailDos=document.querySelector("#mailDos").value

        if (mail === mailDos && mail!==""){
            document.querySelector("#mail").setAttribute("style","border: 2px solid green")
            document.querySelector("#mailDos").setAttribute("style","border: 2px solid green")
            setValidacionMail(false)
        }else{
            document.querySelector("#mail").setAttribute("style","border: 2px solid red")
            document.querySelector("#mailDos").setAttribute("style","border: 2px solid red")
            setValidacionMail(true)
        }
    }

    useEffect(()=>{
    },[validacionMail])

    return(
        <>
        <article className="contenedorTitulo row g-0">
            <h1 className="tituloFormulario">Formulario de Compra</h1>
            <p>Para completar la compra debe de ingresar los siguientes datos</p>
        </article>
        <article className="contenedorFormulario">
            <form className="formularioCompra" onSubmit={handleEnviar}>
                <input type="text"  placeholder="Tu nombre" required/>
                <input type="tel"   placeholder="Tu telefono"  required/>
                <input id="mail" onChange={validarMail} type="email" placeholder="Tu mail" required/>
                <input id="mailDos" onChange={validarMail} type="email" placeholder="Reingrese su mail" required/>
                <button type="subtmit" disabled={(validacionMail)}>Enviar</button>
            </form>
        </article>
        </>
    )
}