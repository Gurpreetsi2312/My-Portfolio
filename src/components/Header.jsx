function Header() {

  return (
    <>
    <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 10
      }}>
        <h2 style={{ color: "#007bff" }}>MyPortfolio</h2>
        <nav>
          <a href="#about" style={{ margin: "0 15px", color: "#333", textDecoration: "none" }}>About</a>
          <a href="#projects" style={{ margin: "0 15px", color: "#333", textDecoration: "none" }}>Projects</a>
          <a href="#contact" style={{ margin: "0 15px", color: "#333", textDecoration: "none" }}>Contact</a>
        </nav>
    </header>
    </>
  )
}

export default Header
