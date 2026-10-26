import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">Cartelera</Link>
            <div className="navbar-links">
                <NavLink to="/" end className="nav-link">Home</NavLink>
                <NavLink to="/favorites" className="nav-link">Favorites</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;