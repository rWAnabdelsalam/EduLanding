export default function Navbar({ theme, toggleTheme }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <div className="nav-container">
          <button
              className="logo"
              onClick={() => scrollToSection("home")}
          >
              <img
                  src="/logo.svg"
                  alt="CodeLearn Logo"
                  className="logo-image"
              />
          </button>

        <nav className="nav-links" aria-label="Main navigation">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("courses")}>Courses</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
          >
            <div className="theme-icon-placeholder" aria-hidden="true"></div>
              <img
                  src={
                      theme === "dark"
                          ? "/Icons/sun.svg"
                          : "/Icons/moon.svg"
                  }
                  alt="theme icon"
                  className="theme-icon"
              />
          </button>
        </div>
      </div>
    </header>
  );
}
