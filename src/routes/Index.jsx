import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColorProvider } from "../components/navbar/Navbar";
import PlayerSelection from "../pages/player_selector/PlayerSelection";
import Home from "../pages/home/Home";
import Instructions from "../pages/instructions/Instrucctions";
import Login from "../pages/auth/Login";
import RegisterForm from "../pages/auth/RegisterForm";
import CategorySelection from "../pages/categories/CategorySelection";
import Welcome from "../pages/user_home/Welcome";
import ProtectedRoute from "../components/player_profile/ProtectedRoute";
import Game from "../pages/game/Game";

const Router = () => {
  return (
    <BrowserRouter>
      <ColorProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<RegisterForm />} />
          <Route path="/selecciondejugadores" element={<PlayerSelection />} />
          <Route path="/instrucciones" element={<Instructions />} />
          <Route path="/selecciondecategoria" element={<CategorySelection />} />
          <Route path="/sinverguenza" element={<Game />} />
          <Route 
            path="/miperfil" 
            element={
              <ProtectedRoute>
                <Welcome />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </ColorProvider>
    </BrowserRouter>
  );
};

export default Router;