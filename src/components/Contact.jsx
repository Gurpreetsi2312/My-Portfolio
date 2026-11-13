function Contact() {
  return (
    <section id="contact" style={{ padding: "80px 20px", textAlign: "center" }}>
      <h2>Contact Me</h2>
      <p>Let’s work together or just say hello 👋</p>
      <a
        href="mailto:yourname@email.com"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          background: "#007bff",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none"
        }}
      >
        Send Email
      </a>
    </section>
  );
}
export default Contact;
