import courses from "../data/courses";

export default function Courses() {
  return (
    <section className="courses section" id="courses">
      <div className="section-heading">
        <p className="section-label">Featured Courses</p>
        <h2>Build skills with simple, practical lessons</h2>
        <p>
          Choose a course, follow the steps, and practice with beginner-friendly examples.
        </p>
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
          <article className="course-card" key={course.id}>
            <div className="course-image">
                <img
                    src={course.image}
                    alt={course.title}
                    className="course-image"
                />
            </div>
            <div className="course-card-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button className="card-button">View Details</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
