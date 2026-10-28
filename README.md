# Movie Explorer

Aplicación web hecha con React que muestra las películas populares y permite buscarlas por título usando la API de TMDB. Las películas se pueden marcar como favoritas y la lista se conserva en el navegador.

Práctica 2 de Diseño y despliegue de aplicaciones multiplataforma (UCJC).

## Funcionalidades

- Listado de películas populares al abrir la app
- Búsqueda por título
- Favoritos que se guardan en localStorage
- Dos páginas, Home y Favorites, con React Router
- Diseño adaptable a móvil

## Tecnologías

- React
- Vite
- React Router
- API de TMDB

## Cómo ejecutarlo

1. Clona el repositorio e instala las dependencias:

   ```bash
   git clone https://github.com/TU_USUARIO/movie-explorer.git
   cd movie-explorer
   npm install
   ```

2. Crea un archivo `.env` en la raíz con tu API key de TMDB (puedes copiar `.env.example`):

   ```
   VITE_TMDB_API_KEY=tu_api_key
   ```

3. Arranca el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre `http://localhost:5173`.

## Estructura

```
src/
├── components/   Navbar y MovieCard
├── contexts/     MovieContext (favoritos)
├── pages/        Home y Favorites
├── services/     api.js (peticiones a TMDB)
├── App.jsx
├── main.jsx
└── index.css
```

## Créditos

Los datos de las películas vienen de [TMDB](https://www.themoviedb.org/). Este proyecto usa la API de TMDB pero no está avalado ni certificado por TMDB.
