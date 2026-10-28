import { useMovieContext } from "../contexts/MovieContext";

// tarjeta de una película, se reutiliza en Home y en Favorites
function MovieCard({ movie }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
    // pregunto al contexto si esta película ya es favorita
    const favorite = isFavorite(movie.id);

    // si ya es favorita la quito y si no la añado
    function handleFavorite() {
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }

    // release_date llega como "2024-05-17", me quedo solo con el año
    const year = movie.release_date ? movie.release_date.slice(0, 4) : "";

    return (
        <div className="movie-card">
            <div className="movie-poster">
                {/* hay películas sin póster */}
                {movie.poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                ) : (
                    <div className="no-poster">Sin póster</div>
                )}
                {/* barra con el corazón, el css la enseña al pasar el ratón */}
                <div className="movie-overlay">
                    <button
                        className={favorite ? "favorite-btn active" : "favorite-btn"}
                        onClick={handleFavorite}
                        title={favorite ? "Quitar de favoritos" : "Añadir a favoritos"}
                    >
                        {favorite ? "♥" : "♡"}
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{year}</p>
            </div>
        </div>
    );
}

export default MovieCard;