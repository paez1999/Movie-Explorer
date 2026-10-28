import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

// MovieProvider envuelve todo para que Home, Favorites y las tarjetas lean los mismos favoritos
// NavBar está fuera de Routes, así que se ve en todas las páginas
function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        {/* cada Route enseña una página según la URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;