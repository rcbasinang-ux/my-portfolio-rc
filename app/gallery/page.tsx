const galleryItems = [
  { label: "01", icon: "🖥️", title: "Workspace Setup", text: "Clean productivity environment designed for deep focus." },
  { label: "02", icon: "🎨", title: "Design Thinking", text: "Concept sketches and visual ideation for product interfaces." },
  { label: "03", icon: "💡", title: "Creative Process", text: "Exploring ideas through prototypes and color-driven exploration." },
  { label: "04", icon: "📱", title: "Mobile First", text: "Layouts designed to feel intuitive across different screen sizes." },
  { label: "05", icon: "🚀", title: "Launch Ready", text: "Polished interfaces prepared for real-world user interaction." },
  { label: "06", icon: "🌙", title: "Night Mode", text: "Dark UI schemes that blend comfort, contrast, and style." },
];

export default function GalleryPage() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="small-title">VISUALS</p>
        <h1>Gallery</h1>
        <p>
          A glimpse into the creative direction, design themes, and project mood
          that shape my work.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <article className="gallery-card" key={item.label}>
            <div className="gallery-image">
              <span>{item.icon}</span>
              <small>{item.label}</small>
            </div>
            <div className="gallery-content">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
