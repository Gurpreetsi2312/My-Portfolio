function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "100px 20px",
        background: "linear-gradient(to right, #007bff, #00c6ff)",
        color: "#fff"
      }}
    >
      <h1>Hello, <span style={{ color: "#ffe" }}>Guys</span></h1>
      <p>Frontend Developer | React Enthusiast | Designer</p>
      <a
        href="#projects"
        style={{
          padding: "12px 24px",
          background: "#fff",
          color: "#007bff",
          borderRadius: "5px",
          textDecoration: "none",
          marginTop: "20px",
          display: "inline-block"
        }}
      >
        View My Work
      </a>
    </section>
  );
}
export default Hero;