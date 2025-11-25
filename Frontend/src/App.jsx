import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./AboutPage";
import Home from "./Components/HomePage";
import ContactPage from "./Components/ContactPage";

export default function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<ContactPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
