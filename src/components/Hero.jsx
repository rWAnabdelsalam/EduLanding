export default function Hero() {
  const scrollToCourses = () => {
    const coursesSection = document.getElementById("courses");

    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero section" id="home">
      <div className="hero-content">
        <p className="hero-label">Online Programming Courses</p>
        <h1>Learn Programming بسهولة</h1>
        <p className="hero-description">
          Start learning coding with simple lessons, clear examples, and practical projects made for beginners.
        </p>
        <button className="primary-button" onClick={scrollToCourses}>
          Browse Courses
        </button>
      </div>
    </section>
  );
}
