import { Volver } from "../Buttons/Volver"

export const BackPage = ()=>{

    return(
        <>
            <article className="contenedorErrorPagina row g-0">
                <article className="errorPagina">
                    <h1>Error de Página</h1>
                    <p>La página a la que Ud. esta queriendo acceder no existe, haga clic en el botón volver para retornar a nuestra Web</p>
                    <img src="../img/error404/error404.png" alt="cono error 404" />
                    <Volver nombre="Volver"/>
                </article>
            </article>
        </>
    )
}