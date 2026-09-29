import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="small-title">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>RC</span>
        </h1>

        <h2>IT Student & Future Developer</h2>

        <p className="hero-description">
          I am an Information Technology student who enjoys creating
          websites, applications, and digital experiences using modern
          technologies.
        </p>

        <div className="hero-buttons">
          <Link href="/portfolio" className="primary-button">
            View My Work
          </Link>

          <Link href="/about" className="secondary-button">
            About Me
          </Link>
        </div>
      </div>

      <div className="hero-card">
        <img
          src="/21764ed9-66b9-49c1-b042-703e13605a99.jpg"
          alt="My profile photo"
          className="profile-photo"
        />

        <h3>Creative Developer</h3>

        <p>
          Turning ideas into simple and useful digital experiences.
        </p>

        <div className="mini-stats">
          <div>
            <strong>4+</strong>
            <span>Projects</span>
          </div>

          <div>
            <strong>3+</strong>
            <span>Skills</span>
          </div>

          <div>
            <strong>1</strong>
            <span>Goal</span>
          </div>
        </div>
      </div>
    </section>
  );
}