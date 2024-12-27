import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerSelection from "../pages/player_selector/PlayerSelection";
import Home from "../pages/home/Home";
const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "selecciondejugadores" element = {<PlayerSelection />} />

         
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;