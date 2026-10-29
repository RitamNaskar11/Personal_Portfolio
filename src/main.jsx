// import React from "react";
import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

import {
  ArrowRight,
  ArrowDownRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  Sparkles,
  Utensils,
  FileSearch,
  ExternalLink,
  Mic,
  // Leaf,
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
      liveLink: "",
      link: "https://github.com/RitamNaskar11/FoodieWebsite.github.io.git",
    },

    {
      number: "02",
      name: "Resume Analyzer",
      category: "NLP · CAREER TOOLS",
      iconClass: "icon-resume",
      description:
        "A Python application that compares resumes with job descriptions and highlights relevant skills.",
      tech: ["Python", "Flask", "NLP"],
      liveLink:
        "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Flnkd.in%2FgzGzhiqM&urlhash=P5NG&mt=teotInGaqEdJkkkbPpTooXz0hBDuEEFdjk5c1y26udJg2ClcqOa25jiIUZz2KvTu_Ckaf8caV4Re-cRPhZDUE6d2f4e_nJXlyiXilwsHT9XmOZDmrK9ZFF3gONU&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_creator_profile_all_content_view%3Bb6s14JDQR%2FC%2F7DUSZsO%2BsA%3D%3D",
      link: "https://github.com/RitamNaskar11/Resume_analyzer.git",
    },
    {
      number: "03",
      name: "Voice-Assistant",
      category: "PYTHON DEVELOPMENT",
      iconClass: "icon-voice-assistant",
      description:
        "A Python-powered voice assistant that listens to voice commands and helps users perform tasks through speech recognition and voice responses.",
      tech: ["Python", "Speech Recognition", "Text-to-Speech"],
      liveLink: "",
      link: "https://github.com/RitamNaskar11/Voice_Assistant.git",
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
const [menuOpen, setMenuOpen] = React.useState(false);
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".content-section, .project-card, .contact-card",
    );



    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-visible");
          } else {
            entry.target.classList.remove("scroll-visible");
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    elements.forEach((element) => {
      element.classList.add("scroll-hidden");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon">
            R<span>N</span>
          </span>
          <span>ritam.</span>
        </a>

        <nav  className={menuOpen ? "mobile-nav open" : "mobile-nav"}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <button
          type="button"
          className="hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

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
              Hey, I&apos;m <strong>Ritam Naskar</strong> — a frontend developer
              exploring AI and building practical digital experiences.
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

              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ritamnaskar2003@gmail.com&su=Portfolio%20Inquiry">
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

                  {project.liveLink ? (
                    <a
                      className="project-link"
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live ${project.name}`}
                      title="View live project"
                    >
                      <ExternalLink size={19} />
                    </a>
                  ) : (
                    <span
                      className="project-link project-link-disabled"
                      title="Live demo not available"
                    >
                      <ExternalLink size={19} />
                    </span>
                  )}
                </div>

                <div className={`project-symbol ${project.iconClass}`}>
                  {project.number === "01" ? (
                    <Utensils size={15} />
                  ) : project.number === "02" ? (
                    <FileSearch size={15} />
                  ) : (
                    <Mic size={15} />
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
                    GitHub repository unavailable
                  </span>
                )}
              </article>
            ))}
          </div>

          <p className="projects-note">
            Project descriptions are starter copy. Update each card with your
            actual features, repository, and live demo before publishing.
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

          <div className="stack-line">
            <span>AREAS I'M EXPLORING</span>
            <div>
              {["RAG", "LLM tools"].map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <div className="contact-card">
            <div className="contact-spark">✳</div>

            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
            <h2>
              Let&apos;s build something
              <br />
              <span>useful together.</span>
            </h2>

            <p>
              Have a project idea or an opportunity? I&apos;d be happy to hear
              from you.
            </p>

            <a
              className="primary-button"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ritamnaskar2003@gmail.com&su=Portfolio%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
            >
              Say hello <ArrowRight size={19} />
            </a>
            <div className="contact-decoration">LET'S BUILD WHAT'S NEXT </div>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home">
          ritam.
        </a>
        <span>Built with React · © {new Date().getFullYear()}</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
