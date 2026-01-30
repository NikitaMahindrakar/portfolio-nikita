import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <h2 className="section-title">
          <span className="line"></span> Contact
        </h2>

        <p className="contact-subtitle">
          Open to DevOps opportunities, collaborations, and discussions.
          Feel free to reach out.
        </p>

        <div className="contact-cards">

          <a
            href="mailto:nikita8@gmail.com"
            className="contact-card"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">📧</span>
            <div>
              <h4>Email</h4>
              <p>mahindrakarnikita8@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/nikita-mahindrakar"
            className="contact-card"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">💼</span>
            <div>
              <h4>LinkedIn</h4>
              <p>Connect professionally</p>
            </div>
          </a>

          <a
            href="https://github.com/NikitaMahindrakar"
            className="contact-card"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">🐙</span>
            <div>
              <h4>GitHub</h4>
              <p>View my projects</p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
