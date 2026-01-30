import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">

        <h2 className="section-title">
          <span className="line"></span> Experience
        </h2>

        <div className="timeline">

          {/* EXPERIENCE ITEM */}
          <div className="experience-card">
            <div className="timeline-dot"></div>

            <div className="experience-content">
              <h3>DevOps Engineer Intern</h3>
              <span className="company">
                Siemens DISW · Pune
              </span>
              <span className="duration">
                Jun 2024 – Nov 2025
              </span>

              <ul>
                <li>Managed and monitored production CI/CD pipelines using GitLab</li>
                <li>Automated repetitive DevOps tasks using Python & Bash (~60% effort reduction)</li>
                <li>Built and optimized Docker image build pipelines</li>
                <li>Collaborated with cross-functional teams to improve build reliability</li>
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
