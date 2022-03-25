import { useEffect } from "react";
import { motion, Variants, useAnimation } from "framer-motion";

const staggerChildrenVariants: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.05,
    },
  },
};

const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

import "./Home.css";

const Home = () => {
  const paraOne = "Hi, I'm";
  const headingOne = "Matt Collinge,";
  const headingTwo = "full-stack developer.";

  const paraOneAnimation = useAnimation();
  const headingOneAnimation = useAnimation();
  const headingTwoAnimation = useAnimation();
  const paraTwoAnimation = useAnimation();
  const paraThreeAnimation = useAnimation();

  const startAnimations = async () => {
    await paraOneAnimation.start("visible");
    await headingOneAnimation.start("visible");
    await headingTwoAnimation.start("visible");
    await paraTwoAnimation.start("visible");
    await paraThreeAnimation.start("visible");
  };

  useEffect(() => {
    startAnimations();
  }, [
    paraOneAnimation,
    headingOneAnimation,
    headingTwoAnimation,
    paraTwoAnimation,
    paraThreeAnimation,
  ]);

  return (
    <section className="home-container">
      <div>
        <motion.p
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={paraOneAnimation}
          className="intro"
        >
          {paraOne.split("").map((char, i) => {
            return (
              <motion.span key={`${char}-${i}`} variants={fadeInVariants}>
                {char}
              </motion.span>
            );
          })}
        </motion.p>
        <motion.h1
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={headingOneAnimation}
          className="name"
        >
          {headingOne.split("").map((char, i) => {
            return (
              <motion.span key={`${char}-${i}`} variants={fadeInVariants}>
                {char}
              </motion.span>
            );
          })}
        </motion.h1>
        <motion.h2
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={headingTwoAnimation}
          className="title"
        >
          {headingTwo.split("").map((char, i) => {
            return (
              <motion.span key={`${char}-${i}`} variants={fadeInVariants}>
                {char}
              </motion.span>
            );
          })}
        </motion.h2>
        <motion.p
          variants={fadeInVariants}
          initial="hidden"
          animate={paraTwoAnimation}
        >
          I'm a software developer that likes to build tools and tinker.
        </motion.p>
        <motion.p
          variants={fadeInVariants}
          initial="hidden"
          animate={paraThreeAnimation}
        >
          Currently doing this at <a href="https://apteco.com">Apteco</a>{" "}
          helping to piece together{" "}
          <a href="https://apteco.com/products">Orbit</a>.
        </motion.p>
      </div>
    </section>
  );
};

export default Home;
