import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDisplay from "./pages/ProjectDisplay";
import Experience from "./pages/Experience";
import NavBar from "./components/layout/Navbar";
import "./App.css";
import Footer from "./components/layout/Footer";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/project/:id" element={<ProjectDisplay />} />

        <Route path="/experience" element={<Experience />} />

        <Route path="/contact" element={<ContactMe />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
