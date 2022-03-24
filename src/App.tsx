import { useEffect } from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects-List";
import Contact from "./components/contact/Contact";

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
        case "c":
          navigate("/contact");
          break;
      }
    };
    window.addEventListener("keyup", onKeyUp);
    return () => window.removeEventListener("keyup", onKeyUp);
  }, []);

  return (
    <div>
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
          <Link className="navigation-item" to="/contact">
            <span className="navigation-item-label">C</span>ontact
          </Link>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
