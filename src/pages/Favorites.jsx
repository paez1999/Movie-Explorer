import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
    // los favoritos vienen del contexto, esta página no hace peticiones
    const { favorites } = useMovieContext();

    // sin favoritos enseño un mensaje y no pinto nada más
    if (favorites.length === 0) {
        return (
            <div className="favorites-empty">
                <h2>Aún no tienes favoritos</h2>
                <p>Añade películas desde Home pulsando el corazón.</p>
            </div>
        );
    }

    return (
        <div className="favorites">
            <h2>Tus favoritos</h2>
            {/* reutilizo MovieCard igual que en Home */}
            <div className="movies-grid">
                {favorites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Favorites;