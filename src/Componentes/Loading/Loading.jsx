

export const Loading=()=>{
    return(
        <section className="contenedorLoading">
            <article className="contenedorImagen">
                <img className="logoLoading" src="../img/navegador/logo.png" alt="Logo de Picate Esta" loading="lazy" />
            </article>
            <article className="contenedorTexto">
                <h2 className="textoLoading">LOADING...</h2>
            </article>
        </section>
    )
}