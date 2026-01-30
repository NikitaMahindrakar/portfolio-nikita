import "./Hero.css";


export default function Hero() {
return (
<section className="hero">
<span className="badge">Welcome to my portfolio</span>


<h1>
Hi, I'm <span className="name">Nikita Mahindrakar</span>
</h1>


<h2 className="subtitle">DevOps Engineer</h2>


<p className="description">
I build reliable CI/CD pipelines, automate cloud infrastructure, and
design scalable systems using DevOps best practices.
</p>


<div className="actions">
<a href="#projects" className="primary-btn">View Projects →</a>
<a href="#contact" className="secondary-btn">Contact Me</a>
</div>
</section>
);
}