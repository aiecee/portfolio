import { useEffect } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects-List";

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
      <nav className="navigation">
        <h1 className="navigation-heading">Matt Collinge</h1>
        <div className="navigation-items">
          <Link className="navigation-item" to="/">
            <span className="navigation-item-label">H</span>ome
          </Link>
          <Link className="navigation-item" to="/about">
            <span className="navigation-item-label">A</span>bout
          </Link>
          <Link className="navigation-item" to="/projects">
            <span className="navigation-item-label">P</span>rojects
          </Link>
        </div>
      </nav>
      <div className="socials-left">
        <ul>
          <li>
            <a href="https://github.com/aiecee">
              <FaGithubSquare className="socials-icon" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/_AieCee">
              <FaTwitterSquare className="socials-icon" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/matt-collinge-972b03153/">
              <FaLinkedin className="socials-icon" />
            </a>
          </li>
          <li>
            <div className="socials-line"></div>
          </li>
        </ul>
      </div>
      <div className="socials-right">
        <ul>
          <li>
            <a className="socials-link" href="mailto:mattycov@googlemail.com">
              <p className="socials-text">mattycov@googlemail.com</p>
            </a>
          </li>
          <li>
            <div className="socials-line"></div>
          </li>
        </ul>
      </div>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
