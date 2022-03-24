import { MdOpenInNew } from "react-icons/md";
import { FaGithubAlt } from "react-icons/fa";

import { BasicRepoDetails } from "../../external/github";
import "./Project.css";

type ProjectProps = {
  githubProject: BasicRepoDetails;
};

const Project = ({ githubProject }: ProjectProps) => {
  return (
    <div key={githubProject.id} className="project-card">
      <section className="project-card-title">
        <h1 className="project-card-title-text">{githubProject.name}</h1>
        <div className="project-card-title-icons">
          <FaGithubAlt />
          <a href={githubProject.html_url}>
            <MdOpenInNew />
          </a>
        </div>
      </section>
      {githubProject.description && (
        <section>
          <p className="project-card-description">
            {githubProject.description}
          </p>
        </section>
      )}
      {githubProject.license && (
        <section>
          <a className="project-card-license" href={githubProject.license.url}>
            {githubProject.license.name}
          </a>
        </section>
      )}
      {githubProject.topics && githubProject.topics.length > 0 && (
        <section className="project-card-topics-list">
          {githubProject.topics.map((topic) => (
            <span className="project-card-topic-chip">{topic}</span>
          ))}
        </section>
      )}
    </div>
  );
};

export default Project;
