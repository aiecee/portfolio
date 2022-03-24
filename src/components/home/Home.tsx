import "./Home.css";

const Home = () => {
  return (
    <section className="home-container">
      <div>
        <p className="intro">Hi, I'm</p>
        <h1 className="name">Matt Collinge,</h1>
        <h2 className="title">full-stack developer.</h2>
        <p className="extra">
          I'm a software developer that likes to build tools and tinker.
        </p>
        <p className="extra">
          Currently doing this at <a href="https://apteco.com">Apteco</a>{" "}
          helping to piece together{" "}
          <a href="https://apteco.com/products">Orbit</a>.
        </p>
      </div>
    </section>
  );
};

export default Home;
