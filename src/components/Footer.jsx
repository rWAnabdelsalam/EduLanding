export default function Footer() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
      <footer className="footer" id="contact">
          <div className="footer-container">

              <div className="footer-left">
                  <p>© 2026 CodeLearn. All rights reserved.</p>

                  <div className="footer-contact">
                      <span>+2010 1234 1234</span>
                      <span>info@codelearn.com</span>
                  </div>
              </div>

              <div className="footer-links-wrapper">
                  <h4 className="footer-title">Explore</h4>

                  <div className="footer-links">
                      <a href="#home">Home</a>
                      <a href="#courses">Courses</a>
                      <a href="#contact">Contact</a>
                  </div>
              </div>

              <div className="footer-socials">

                  <div className="social-icon">
                      <img src="/Icons/facebook.svg" alt="facebook" />
                  </div>

                  <div className="social-icon">
                      <img src="/Icons/instagram.svg" alt="instagram" />
                  </div>

                  <div className="social-icon">
                      <img src="/Icons/linkedin.svg" alt="twitter" />
                  </div>

              </div>

          </div>
      </footer>
  );
}
