import { Link, NavLink } from "react-router-dom";

// Link y NavLink cambian de página sin recargar (un <a> normal recargaría todo)
// NavLink añade la clase active a la página actual
// "end" evita que Home se marque también en /favorites
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