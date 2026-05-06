// src/components/Main/Main.jsx
import './Main.css';

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <h2>Welcome to My Portfolio</h2>
        <p>I build beautiful, fast, and accessible web applications.</p>
        <button className="hero__cta">View My Work</button>
      </section>

      <section className="about" id="about">
        <h3>About Me</h3>
        <p>
          I am a passionate front-end developer learning React. I love
          creating clean, component-driven UIs.
        </p>
      </section>
    </main>
  );
}

export default Main;