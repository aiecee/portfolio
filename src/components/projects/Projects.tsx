import { useState, useEffect } from "react";

import { latestRepos, BasicRepoDetails } from "../../external/github";
import "./Projects.css";

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
    <div className="projects-wrapper">
      {repos.map((repo) => {
        return (
          <div key={repo.id}>
            <h1>{repo.full_name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
