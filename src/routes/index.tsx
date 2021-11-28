import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Character } from "../pages/character";
import { Favorites } from "../pages/favorites";

export function RouterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/character" element={<Character />}/>
      <Route path="/favorites" element={<Favorites />}/>
    </Routes>
  )
}