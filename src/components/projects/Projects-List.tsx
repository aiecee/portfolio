import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";

import { latestRepos, BasicRepoDetails } from "../../external/github";
import "./Projects-List.css";
import Project from "./Project";

const staggerChildrenVariants: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const scaleUpVariants: Variants = {
  initial: {
    scale: 0,
  },
  scaleUp: {
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};

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
      <motion.div
        variants={staggerChildrenVariants}
        initial="hidden"
        animate={repos.length > 0 && "visible"}
        className="projects"
      >
        {repos.length > 0 &&
          repos.map((repo) => {
            return (
              <motion.div
                variants={scaleUpVariants}
                initial="initial"
                animate="scaleUp"
                key={`${repo.id}`}
              >
                <Project githubProject={repo} />
              </motion.div>
            );
          })}
      </motion.div>
    </section>
  );
};

export default Projects;
