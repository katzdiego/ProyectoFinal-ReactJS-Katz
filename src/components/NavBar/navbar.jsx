import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav aria-label="Main Navigation" className="navbar">
            <h1 className="navbar-title">E-Commerce</h1>
            <div role="img" aria-label="Icono de computadora" className="navbar-icon">💻</div>
            <div className="nav-links">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => (isActive ? 'active' : '')}>
                    Inicio
                </NavLink>

                <NavLink 
                    to="/category/celulares" 
                    className={({ isActive }) => (isActive ? 'active' : '')}>
                    Celulares y Accesorios
                </NavLink>

                <NavLink 
                    to="/category/entretenimiento" 
                    className={({ isActive }) => (isActive ? 'active' : '')}>
                    Entretenimiento
                </NavLink>

                <NavLink 
                    to="/category/computacion" 
                    className={({ isActive }) => (isActive ? 'active' : '')}>
                    Computación
                </NavLink>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;