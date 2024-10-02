import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav aria-label="Main Navigation">
            <h2>E-Commerce</h2>
            <div role="img" aria-label="Computer icon">💻</div>
            <div className="nav-links">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => (isActive ? 'active' : '')}>
                    Inicio
                </NavLink>

                <NavLink 
                    to="/category/celulares" 
                    className={({ isActive }) => (isActive ? 'active' : '')}>
                    Celulares y accesorios
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