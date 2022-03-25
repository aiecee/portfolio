import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects-List";
import NavBar from "./components/nav-bar/Nav-Bar";
import {
  SocialsFooter,
  SocialsLeft,
  SocialsRight,
} from "./components/socials/Socials";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const onKeyUp = (event: KeyboardEvent) => {
      switch (event.key) {
        case "h":
          navigate("/");
          break;
        case "a":
          navigate("/about");
          break;
        case "p":
          navigate("/projects");
          break;
      }
    };
    window.addEventListener("keyup", onKeyUp);
    return () => window.removeEventListener("keyup", onKeyUp);
  }, []);

  return (
    <div className="app">
      <NavBar />
      <SocialsLeft />
      <SocialsRight />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </main>
      <SocialsFooter />
    </div>
  );
};

export default App;
