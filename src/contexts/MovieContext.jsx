import { createContext, useContext, useState, useEffect } from "react";

// canal para compartir los favoritos con cualquier componente
const MovieContext = createContext();

// hook propio, así no escribo useContext(MovieContext) en cada archivo
export function useMovieContext() {
    return useContext(MovieContext);
}

// envuelve la app: guarda los favoritos y los comparte con todo lo que hay dentro
export function MovieProvider({ children }) {
    const [favorites, setFavorites] = useState([]);
    // loaded evita guardar la lista vacía antes de haber leído localStorage
    const [loaded, setLoaded] = useState(false);

    // al iniciar, leo los favoritos guardados
    useEffect(() => {
        const stored = localStorage.getItem("favorites");
        if (stored) {
            setFavorites(JSON.parse(stored));
        }
        setLoaded(true);
    }, []);

    // cada vez que cambian, los guardo
    useEffect(() => {
        if (loaded) {
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
    }, [favorites, loaded]);

    // creo un array nuevo, si hiciera push React no detectaría el cambio
    function addToFavorites(movie) {
        setFavorites([...favorites, movie]);
    }

    // me quedo con todas las películas menos la que quito
    function removeFromFavorites(movieId) {
        setFavorites(favorites.filter((movie) => movie.id !== movieId));
    }

    // true si la película ya está en la lista
    function isFavorite(movieId) {
        return favorites.some((movie) => movie.id === movieId);
    }

    // lo que comparte el contexto
    const value = { favorites, addToFavorites, removeFromFavorites, isFavorite };

    return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
}