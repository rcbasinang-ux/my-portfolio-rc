import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="small-title">DESIGNER • DEVELOPER • STUDENT</p>

        <h1>
          I turn ideas into <span>bright, human experiences.</span>
        </h1>

        <h2>Hi, I’m RC — a creative IT student blending storytelling, design, and code.</h2>

        <p className="hero-description">
          I build playful, meaningful digital experiences that feel personal and intuitive.
          From interface thinking to polished execution, I enjoy shaping ideas into products
          people actually remember.
        </p>

        <div className="hero-buttons">
          <Link href="/portfolio" className="primary-button">
            View My Work
          </Link>

          <Link href="/about" className="secondary-button">
            About Me
          </Link>
        </div>

        <div className="hero-meta">
          <span>Based in the Philippines</span>
          <span>Available for freelance work</span>
        </div>
      </div>

      <div className="hero-card">
        <div className="avatar-wrap">
          <img
            src="/21764ed9-66b9-49c1-b042-703e13605a99.jpg"
            alt="My profile photo"
            className="profile-photo"
          />
        </div>

        <span className="card-badge">Open to opportunities</span>

        <h3>Creative Developer</h3>

        <p>Turning ideas into clear, engaging, and useful digital experiences.</p>

        <div className="mini-stats">
          <div>
            <strong>4+</strong>
            <span>Projects</span>
          </div>

          <div>
            <strong>3+</strong>
            <span>Core skills</span>
          </div>

          <div>
            <strong>1</strong>
            <span>Vision</span>
          </div>
        </div>
      </div>
    </section>
  );
}