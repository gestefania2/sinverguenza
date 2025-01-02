import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerSelection from "../pages/player_selector/PlayerSelection";
import Home from "../pages/home/Home";
import Instructions from "../pages/instructions/Instrucctions";
import Login from "../pages/auth/Login";
import RegisterForm from "../pages/auth/RegisterForm";
import CategorySelection from "../pages/categories/CategorySelection";
import Welcome from "../pages/user_home/Welcome";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<RegisterForm />} />
        <Route path="/selecciondejugadores" element={<PlayerSelection />} />
        <Route path="/instrucciones" element={<Instructions />} />
        <Route path="/selecciondecategoria" element={<CategorySelection />} />
        <Route path="/perfildeusurio" element={<Welcome/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;