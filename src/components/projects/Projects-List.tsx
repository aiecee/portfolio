import { useState, useEffect } from "react";

import { latestRepos, BasicRepoDetails } from "../../external/github";
import "./Projects-List.css";
import Project from "./Project";

const Projects = () => {
  const [repos, setRepos] = useState<Array<BasicRepoDetails>>([]);

  useEffect(() => {
    latestRepos("aiecee")
      .then((newRepos) => setRepos(newRepos))
      .catch((error) => {
        console.error(error);
        setRepos([]);
      });
  }, []);

  return (
    <section className="projects-wrapper">
      <div className="projects">
        {repos.map((repo) => {
          return <Project githubProject={repo} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
