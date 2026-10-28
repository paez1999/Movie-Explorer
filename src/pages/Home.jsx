import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api";

function Home() {
    // movies es lo que se pinta; loading y error controlan qué se enseña
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // al cargar la página pido las populares
    // (el [] del final hace que solo se ejecute una vez, al montar)
    useEffect(() => {
        // la función async va dentro porque el callback de useEffect no puede ser async
        async function loadPopular() {
            try {
                const popular = await getPopularMovies();
                setMovies(popular);
            } catch (err) {
                console.log(err);
                setError("No se han podido cargar las películas");
            } finally {
                // pase lo que pase, quito el "Cargando..."
                setLoading(false);
            }
        }
        loadPopular();
    }, []);

    async function handleSearch(e) {
        // evita que el formulario recargue la página
        e.preventDefault();
        // no busco si el campo está vacío
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
                {/* input controlado: el texto lo guarda el estado */}
                <input
                    type="text"
                    className="search-input"
                    placeholder="Buscar películas por título..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Buscar</button>
            </form>

            {/* si hay error lo enseño; si está cargando, aviso; si no, la cuadrícula */}
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