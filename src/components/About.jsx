import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">
          <h2 className="section-title">
            <span className="line"></span> About Me
          </h2>

          <p className="about-text">
            I’m a DevOps Engineer with hands-on experience in building,
            automating, and maintaining scalable CI/CD pipelines and
            cloud-native systems. I enjoy solving infrastructure problems
            and improving system reliability through automation.
          </p>

          <div className="about-points">
            <div className="point-card">
              <span className="icon">⚡</span>
              Managed production CI/CD pipelines and automation workflows
            </div>

            <div className="point-card">
              <span className="icon">⚡</span>
              Built Dockerized applications and Kubernetes deployments
            </div>

            <div className="point-card">
              <span className="icon">⚡</span>
              Automated monitoring, builds, and deployment processes
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">
          <h3 className="arsenal-title">Technical Arsenal</h3>

          <div className="skills">
            <span>ReactJS</span>
            <span>Python</span>
            <span>Linux</span>
            <span>Docker</span>
            <span>Kubernetes</span>
            <span>GitLab CI/CD</span>
            <span>AWS</span>
            <span>C++</span>
          </div>

          <div className="feature-cards">
            <div className="feature">
              <span className="feature-icon code">&lt;/&gt;</span>
              <p>Clean Automation</p>
            </div>

            <div className="feature">
              <span className="feature-icon ui">▢</span>
              <p>Reliable Pipelines</p>
            </div>

            <div className="feature">
              <span className="feature-icon backend">⛁</span>
              <p>Scalable Infrastructure</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
