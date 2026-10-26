import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // al cargar la página pido las populares
    useEffect(() => {
        async function loadPopular() {
            try {
                const popular = await getPopularMovies();
                setMovies(popular);
            } catch (err) {
                console.log(err);
                setError("No se han podido cargar las películas");
            } finally {
                setLoading(false);
            }
        }
        loadPopular();
    }, []);

    async function handleSearch(e) {
        e.preventDefault();
        if (searchQuery.trim() === "") return;

        setLoading(true);
        setError(null);
        try {
            const results = await searchMovies(searchQuery);
            setMovies(results);
        } catch (err) {
            console.log(err);
            setError("No se ha podido hacer la búsqueda");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Buscar películas por título..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Buscar</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Cargando...</div>
            ) : (
                <div className="movies-grid">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;