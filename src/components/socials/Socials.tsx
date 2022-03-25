import { motion } from "framer-motion";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { MdMail } from "react-icons/md";

import "./Socials.css";
import { hoverVariants } from "../../assets/variants";

export const SocialsLeft = () => {
  return (
    <div className="socials-left">
      <ul>
        <li>
          <motion.div
            variants={hoverVariants}
            initial="initial"
            whileHover="hover"
          >
            <a href="https://github.com/aiecee">
              <FaGithubSquare className="socials-icon" />
            </a>
          </motion.div>
        </li>
        <li>
          <motion.div
            variants={hoverVariants}
            initial="initial"
            whileHover="hover"
          >
            <a href="https://twitter.com/_AieCee">
              <FaTwitterSquare className="socials-icon" />
            </a>
          </motion.div>
        </li>
        <li>
          <motion.div
            variants={hoverVariants}
            initial="initial"
            whileHover="hover"
          >
            <a href="https://linkedin.com/in/matt-collinge-972b03153/">
              <FaLinkedin className="socials-icon" />
            </a>
          </motion.div>
        </li>
        <li>
          <div className="socials-line"></div>
        </li>
      </ul>
    </div>
  );
};

export const SocialsRight = () => {
  return (
    <div className="socials-right">
      <ul>
        <li>
          <motion.div
            variants={hoverVariants}
            initial="initial"
            whileHover="hover"
          >
            <a className="socials-link" href="mailto:mattycov@googlemail.com">
              <p className="socials-text">mattycov@googlemail.com</p>
            </a>
          </motion.div>
        </li>
        <li>
          <div className="socials-line"></div>
        </li>
      </ul>
    </div>
  );
};

export const SocialsFooter = () => {
  return (
    <div className="socials-footer">
      <div className="socials-footer-grid">
        <motion.div
          variants={hoverVariants}
          initial="initial"
          whileHover="hover"
        >
          <a href="https://github.com/aiecee">
            <FaGithubSquare className="socials-icon" />
          </a>
        </motion.div>
        <motion.div
          variants={hoverVariants}
          initial="initial"
          whileHover="hover"
        >
          <a href="https://twitter.com/_AieCee">
            <FaTwitterSquare className="socials-icon" />
          </a>
        </motion.div>
        <motion.div
          variants={hoverVariants}
          initial="initial"
          whileHover="hover"
        >
          <a href="https://linkedin.com/in/matt-collinge-972b03153/">
            <FaLinkedin className="socials-icon" />
          </a>
        </motion.div>
        <motion.div
          variants={hoverVariants}
          initial="initial"
          whileHover="hover"
        >
          <a href="mailto:mattycov@googlemail.com">
            <MdMail className="socials-icon" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};
