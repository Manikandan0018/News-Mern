import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import ArticleDetails from "./pages/ArticleDetails";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
      </Routes>
    </>
  );
}
