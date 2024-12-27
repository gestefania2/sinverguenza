import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerSelection from "../pages/PlayerSelection";
const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          {/* Ruta seleccion de número de jugadores*/}
          <Route path="/numerodejugadores" element={<PlayerSelection />} />

          {/* Rutas seleccion de categoría de juego */}
          <Route path="/categoria" element={<CategorySelection />} />
  
          {/* Ruta del juego */}
          <Route path="/juegosinverguenza" element={<Game />} />

          {/* Ruta perfil home jugador (solo si esta logeado) */}
          <Route path="/miperfil" element={<PlayerProfile />} />

        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;