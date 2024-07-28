import React from "react";
import NavBar from "./components/Navbar";
import HomePage from "./pages/HomePage/indes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<FirstPage />} />
      </Routes>
    </BrowserRouter>
  );
}
