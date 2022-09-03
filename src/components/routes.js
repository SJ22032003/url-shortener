import React from "react";
import { Route, Routes } from "react-router-dom";
import ShortUrl from "./pages/ShortUrl";
import About from "./pages/About";

function MyRoutes() {
  return (
    <Routes>
      <Route exact path="/home" element={<ShortUrl />} />
      <Route exact path="/about" element={<About />} />
      <Route path="*" element={<h1>404: Not Found</h1>} />
    </Routes>
  );
}

export default MyRoutes;
