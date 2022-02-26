import '../SCSS/variables.scss';
import '../SCSS/index.scss';

function NavBar() {
  return (
<header>
        <section class="contenedorCabecera container-fluid">
            <section class="row filaHeader">
                <section class="col-4 col-lg-4 contenedorImagen">
                    <a href="index.html">
                        <img class="logoCabecera" src="./img/navegador/logo.png" alt="Logo de Picate Esta" loading="lazy" />
                    </a>
                </section>
                <section class="columnaNavegador col-8 col-lg-8">
                    <nav class="contenedorNav">
                        <ul class="mb-0 px-0 listadoCabecera">
                            <li>
                                <a href="nosotros.html">Nosotros</a>
                            </li>
                            <li>
                                <a href="productos.html">Productos</a>
                            </li>
                            <li>
                                <a href="tablas.html">Tablas</a>
                            </li>
                            <li>
                                <a href="contactenos.html">Contactenos</a>
                            </li>
                            <li>
                                <a href="carrito.html">
                                    <img class="carritoCompra" src="./img/navegador/agregar-carrito.png" alt="Carrito de Compras" loading="lazy" />
                                    <article id="cantidadCarrito">
                                        <p></p>
                                    </article>
                                </a>
                            </li>
                            <article class="avisoCarrito">
                                <p></p>
                            </article>
                        </ul>
                    </nav>
                     <nav class="navegadorHamburguesa">
                        <img class="imgHamburguesa" src="./img/navegador/list.png" alt="" />
                        <ul class="listadoHamburguesa">
                            <li>
                                <a href="nosotros.html">Nosotros</a>
                            </li>
                            <li>
                                <a href="productos.html">Productos</a>
                            </li>
                            <li>
                                <a href="tablas.html">Tablas</a>
                            </li>
                            <li>
                                <a href="contactenos.html">Contactenos</a>
                            </li>
                        </ul>
                        <a href="carrito.html">
                            <img class="carritoCompra" src="./img/navegador/agregar-carrito.png" alt="Carrito de Compras" loading="lazy" />
                        </a>
                    </nav>
                </section>
            </section>
        </section>
</header>
  );
}

export default NavBar;
