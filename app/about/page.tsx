const skills = [
  { name: "Java", value: "50%", width: "java" },
  { name: "HTML & CSS", value: "65%", width: "html" },
  { name: "Next.js", value: "50%", width: "next" },
];

export default function AboutPage() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="small-title">WHO I AM</p>
        <h1>About Me</h1>
        <p>
          I am a 2nd year Information Technology student who is passionate about
          learning, creating, and improving my skills in web development.
        </p>
      </div>

      <div className="about-container">
        <div className="about-card">
          <img
            src="/21764ed9-66b9-49c1-b042-703e13605a99.jpg"
            alt="RC portrait"
            className="about-avatar"
          />
          <h2>RC</h2>
          <p className="role">2nd Year IT Student</p>
          <p>
            I enjoy creating digital experiences that are functional, visually
            appealing, and easy for users to understand.
          </p>
        </div>

        <div className="about-info">
          <h2>My Story</h2>
          <p>
            I am currently in my second year of college, and I am steadily growing
            my skills in programming, design, and web development. I enjoy learning
            through hands-on projects and exploring new technologies.
          </p>
          <p>
            My goal is to keep improving as a developer by combining technical
            knowledge with creativity. I value effort, consistency, and building
            projects that are useful, clean, and meaningful.
          </p>

          <div className="skills">
            {skills.map((skill) => (
              <div className="skill" key={skill.name}>
                <span>
                  {skill.name} <strong>{skill.value}</strong>
                </span>
                <div className="skill-bar">
                  <div className={`skill-progress ${skill.width}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
