import React from "react";
import { createRoot } from "react-dom/client";

import {
  ArrowRight,
  ArrowDownRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  Sparkles,
  ExternalLink,
} from "lucide-react";

import "./styles.css";

function Avatar() {
  return (
    <div className="avatar-window">
      <div className="floating-tag tag-code">
        <Code2 size={17} />
        <span>Backend &amp; APIs</span>
      </div>

      <div className="floating-tag tag-ai">
        <Sparkles size={17} />
        <span>Problem Solver</span>
      </div>
      <div className="window-bar">
        <div className="window-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="window-label">ritam</span>
      </div>

      <div className="avatar-scene">
        <div className="avatar-halo" />
        <div className="avatar-orbit orbit-one" />
        <div className="avatar-orbit orbit-two" />

        <div className="avatar">
          <img
            src="/img/image.png"
            alt="Ritam Naskar"
            className="profile-image"
          />
        </div>
      </div>

      <div className="avatar-caption">
        <span>01 / CURRENT FOCUS</span>
        <strong>Build. Learn. Iterate.</strong>
      </div>
    </div>
  );
}

function App() {
  const projects = [
    {
      number: "01",
      name: "Foodie.com",
      category: "WEB DEVELOPMENT",
      iconClass: "icon-foodie",
      description:
        "An online food ordering and restaurant reservation website with menu browsing, cart management, user authentication, and checkout.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
      link: "",
    },
    {
      number: "02",
      name: "Resume Analyzer",
      category: "NLP · CAREER TOOLS",
      iconClass: "icon-resume",
      description:
        "A Python application that compares resumes with job descriptions and highlights relevant skills.",
      tech: ["Python", "Flask", "NLP"],
      link: "",
    },
    {
      number: "03",
      name: "Developer Portfolio",
      category: "WEB DEVELOPMENT",
      iconClass: "icon-portfolio",
      description:
        "A personal portfolio showcasing my projects, technical skills, and developer journey.",
      tech: ["React", "CSS", "JavaScript"],
      link: "",
    },
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Python",
    "Flask",
    "Node.js",
    "PHP",
    "MySQL",
    "MongoDB",
    "REST APIs",
    "Git & GitHub",
  ];

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon">
            R<span>N</span>
          </span>
          <span>ritam.</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="talk-button" href="#contact">
          Let&apos;s talk <ArrowDownRight size={17} />
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              OPEN TO LEARNING &amp; OPPORTUNITIES
            </div>

            <h1>
              Building useful
              <br />
              things with <span>code.</span>
            </h1>

            <p className="hero-description">
              Hey, I&apos;m <strong>Ritam Naskar</strong> — a developer
              interested in backend engineering, Python, and building practical
              digital experiences.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                Explore my work <ArrowRight size={19} />
              </a>

              <a className="secondary-button" href="#contact">
                Get in touch <ArrowDownRight size={18} />
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/ritamnaskar11"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={19} /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={19} /> LinkedIn
              </a>

              <a href="mailto:your-email@example.com">
                <Mail size={19} /> Email
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <Avatar />
          </div>

          <a className="scroll-hint" href="#about">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="content-section" id="about">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>
            Curious mind.
            <br />
            <span>Builder&apos;s mindset.</span>
          </h2>
          <p className="section-description">
            I enjoy turning ideas into useful applications, learning how backend
            systems work, and exploring new technologies through hands-on
            projects.
          </p>
        </section>

        <section className="content-section projects-section" id="projects">
          <div className="projects-heading">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>
                Projects with a <span>purpose.</span>
              </h2>
            </div>

            <p className="projects-intro">
              A few projects that show what I&apos;m building and the problems I
              want to solve.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-topline">
                  <span>{project.number} / PROJECT</span>

                  {project.link ? (
                    <a
                      href={project.link}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.name}`}
                    >
                      <ExternalLink size={19} />
                    </a>
                  ) : (
                    <span className="project-link project-link-disabled">
                      <ExternalLink size={19} />
                    </span>
                  )}
                </div>

                <div className={`project-symbol ${project.iconClass}`}>
                  {project.number === "01" ? (
                    <Sparkles size={15} />
                  ) : project.number === "02" ? (
                    <Code2 size={15} />
                  ) : (
                    <ExternalLink size={15} />
                  )}
                </div>

                <p className="project-category">{project.category}</p>

                <h3>{project.name}</h3>

                <p className="project-description">{project.description}</p>

                <div className="tech-tags">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    className="explore-project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore project <ArrowRight size={17} />
                  </a>
                ) : (
                  <span className="explore-project project-link-disabled">
                    Explore project <ArrowRight size={17} />
                  </span>
                )}
              </article>
            ))}
          </div>

          <p className="projects-note">
            Each project reflects my learning journey and practical development
            skills.
          </p>
        </section>

        <section className="content-section" id="skills">
          <p className="eyebrow">MY TOOLKIT</p>
          <h2>Technologies I work with.</h2>

          <div className="skills-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <p className="eyebrow">HAVE AN IDEA?</p>
          <h2>
            Let&apos;s build something
            <br />
            <span>useful together.</span>
          </h2>

          <p className="section-description">
            Have a project idea or an opportunity? I&apos;d be happy to hear
            from you.
          </p>

          <a className="primary-button" href="mailto:your-email@example.com">
            Say hello <ArrowRight size={19} />
          </a>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home">
          ritam.
        </a>
        <span>Designed with curiosity · © {new Date().getFullYear()}</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
