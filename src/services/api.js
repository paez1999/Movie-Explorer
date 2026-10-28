// la clave está en el .env (Vite solo deja pasar las variables que empiezan por VITE_)
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// pide las películas populares a TMDB
export async function getPopularMovies() {
    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`
    );
    // fetch no da error con un 401 o un 500, así que compruebo yo la respuesta
    if (!response.ok) {
        throw new Error("Error al cargar las películas populares");
    }
    const data = await response.json();
    return data.results;
}

export async function searchMovies(query) {
    // encodeURIComponent deja el texto listo para ir dentro de una URL
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(query)}`
    );
    if (!response.ok) {
        throw new Error("Error al buscar películas");
    }
    const data = await response.json();
    return data.results;
}