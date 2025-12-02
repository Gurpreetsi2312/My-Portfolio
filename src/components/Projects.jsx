function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "A personal portfolio built with React and Vite." },
    { title: "E-commerce UI", desc: "Frontend of an online store using React and Tailwind." },
    { title: "Dashboard", desc: "Analytics dashboard with charts and filters." }
  ];

  return (
    <section id="projects" style={{ padding: "80px 20px", background: "#f9f9f9", textAlign: "center" }}>
      <h2>My Projects</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        maxWidth: "900px",
        margin: "40px auto"
      }}>
        {projects.map((p, i) => (
          <div key={i} style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
          }}>
            <h3>{p.title}</h3>
            <p style={{ color: "#555" }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
