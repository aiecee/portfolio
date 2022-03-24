import "./About.css";
import image from "../../assets/avatar.jpg";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-content">
        <h1 className="about-title">About Me</h1>
        <p>
          I'm a full-stack developer who enjoys wrangling all aspects of the
          software stack. It doesn't matter whether it making sure that bouncing
          animation is pixel perfect, the API is fast and efficient, or the
          tests in the CI pipeline are running flake free.
        </p>
        <p>
          My interest in programming and software started back in 2007/2008 all
          because of a game..... RuneScape! Not being very good at the game I
          realised there could be a more efficient way to play. So, I started
          learning how to reverse engineer the game and automate it instead of
          playing it. But, as they say, cheaters never prosper and I achieved
          far less in the game automating it rather than playing.
        </p>
        <p>
          After realising I'm not bad at this coding thing I decided to make a
          career out of it and became an apprentice at Apteco in 2012. I very
          quickly learnt that I knew far less than I thought I did. Fast forward
          almost 10 years of working with C#, .Net, WPF, typescript, Angular,
          React, Go and Rust here I am today. Classed as a Senior Developer, but
          with so much more to learn.
        </p>
      </section>
      <img className="about-image" src={image} />
    </div>
  );
};

export default About;
