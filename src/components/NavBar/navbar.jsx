import { NavLink, Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav aria-label="Main Navigation">
            <Link to="/" aria-label="Volver a la página principal">
                <h2>Tech-Now</h2>
            </Link>
            <div aria-hidden="true" className="nav-icon">💻</div>
            <div className="nav-links">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? 'active' : ''} 
                    aria-current={({ isActive }) => isActive ? 'page' : undefined}>
                    Inicio
                </NavLink>

                <NavLink 
                    to="/category/celulares" 
                    className={({ isActive }) => isActive ? 'active' : ''} 
                    aria-current={({ isActive }) => isActive ? 'page' : undefined}>
                    Celulares y accesorios
                </NavLink>

                <NavLink 
                    to="/category/entretenimiento" 
                    className={({ isActive }) => isActive ? 'active' : ''} 
                    aria-current={({ isActive }) => isActive ? 'page' : undefined}>
                    Entretenimiento
                </NavLink>

                <NavLink 
                    to="/category/computacion" 
                    className={({ isActive }) => isActive ? 'active' : ''} 
                    aria-current={({ isActive }) => isActive ? 'page' : undefined}>
                    Computación
                </NavLink>
            </div>
            <CartWidget aria-label="Carrito de compras" />
        </nav>
    );
}

export default NavBar;