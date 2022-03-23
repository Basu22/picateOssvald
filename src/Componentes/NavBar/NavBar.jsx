import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';

export const NavBar=()=> {
  return (
<header>
        <section className="contenedorCabecera container-fluid">
            <section className="row filaHeader">
                <section className="col-4 col-lg-4 contenedorImagen">
                <Link to='/'>
                    <img className="logoCabecera" src="../img/navegador/logo.png" alt="Logo de Picate Esta" loading="lazy" />
                </Link>
                </section>
                <section className="columnaNavegador col-8 col-lg-8">
                    <nav className="contenedorNav">
                        <ul className="mb-0 px-0 listadoCabecera">
                            <Link to="/tablas/Clasica">
                                <li>Tablas Clasicas</li>
                            </Link>
                            <Link to="/tablas/Premium">
                                <li>Tablas Premium</li>
                            </Link>
                            <Link to="/">
                                <li><CartWidget/></li>
                            </Link>
                        </ul>
                    </nav>
                </section>
            </section>
        </section>
</header>
  );
}
