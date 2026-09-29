const projects = [
  {
    icon: "🛒",
    title: "ShopFlow",
    tech: "Next.js • UI/UX",
    description:
      "A sleek storefront concept built to highlight products, seasonal campaigns, and smooth mobile shopping flows.",
  },
  {
    icon: "✈️",
    title: "Voyage Journal",
    tech: "React • Storytelling",
    description:
      "A travel blog experience that organizes trip highlights, itineraries, and immersive destination showcases.",
  },
  {
    icon: "📊",
    title: "PulseBoard",
    tech: "Analytics • Dashboard",
    description:
      "A data dashboard concept focused on performance metrics, reports, and user-friendly decision making.",
  },
  {
    icon: "🎓",
    title: "StudyNest",
    tech: "Learning Platform",
    description:
      "A course landing page designed to present lessons, mentor content, and a clear progression path for learners.",
  },
];

export default function PortfolioPage() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="small-title">MY WORK</p>
        <h1>Portfolio</h1>
        <p>
          I enjoy building clean interfaces and practical digital products that
          balance visual design with real user needs.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-icon">{project.icon}</div>
            <div className="project-tech">{project.tech}</div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button className="view-button" type="button">
              View project →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
