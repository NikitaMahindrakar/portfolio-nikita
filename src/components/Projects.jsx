import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        <h2 className="section-title">
          <span className="line"></span> Projects
        </h2>

        <div className="projects-grid">

          {/* PROJECT 1 */}
          <div className="project-card">
            <h3>NXCI Bot – AI DevOps Assistant</h3>
            <p>
              An AI-powered DevOps assistant that automates CI/CD workflows,
              retrieves build metadata, and converts natural language queries
              into SQL for faster decision-making.
            </p>

            <div className="tech-stack">
              <span>Python</span>
              <span>LangChain</span>
              <span>Azure OpenAI</span>
              <span>MySQL</span>
              <span>Streamlit</span>
            </div>

            
          </div>

          {/* PROJECT 2 */}
          <div className="project-card">
            <h3>Worker & NX X Image Build Pipelines</h3>
            <p>
              Designed and maintained GitLab CI/CD pipelines for ad-hoc and
              scheduled Docker image builds, improving build reliability
              and reducing manual intervention.
            </p>

            <div className="tech-stack">
              <span>GitLab CI/CD</span>
              <span>Docker</span>
              <span>AWS</span>
              <span>Python</span>
              <span>Harbor</span>
            </div>

            
          </div>

          {/* PROJECT 3 */}
          <div className="project-card">
            <h3>Service Status Monitoring Dashboard</h3>
            <p>
              Built a real-time service availability dashboard to monitor
              uptime and downtime, improving incident response and
              troubleshooting speed.
            </p>

            <div className="tech-stack">
              <span>Flask</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>MySQL</span>
            </div>

            
          </div>

        </div>
      </div>
    </section>
  );
}
