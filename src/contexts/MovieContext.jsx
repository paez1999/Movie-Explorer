import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export function useMovieContext() {
    return useContext(MovieContext);
}

export function MovieProvider({ children }) {
    const [favorites, setFavorites] = useState([]);
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

    function addToFavorites(movie) {
        setFavorites([...favorites, movie]);
    }

    function removeFromFavorites(movieId) {
        setFavorites(favorites.filter((movie) => movie.id !== movieId));
    }

    function isFavorite(movieId) {
        return favorites.some((movie) => movie.id === movieId);
    }

    const value = { favorites, addToFavorites, removeFromFavorites, isFavorite };

    return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
}