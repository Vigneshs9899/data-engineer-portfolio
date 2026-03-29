import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/Vigneshs9899/repos?sort=updated")
      .then((res) => setRepos(res.data.slice(0, 4)));
  }, []);

  return (
    <div className="container">
      {/* NAVBAR */}
      <nav className="navbar">
        <h2>S Vignesh</h2>

        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#github">GitHub</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <motion.div
          className="heroContent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="heroImageContainer">
            <img src="/profile.png" alt="profile" className="profileImage" />
          </div>

          <div className="heroText">
            <h1>S Vignesh</h1>

            <h2>Azure Data Engineer</h2>

            <p>
              Building scalable data pipelines and cloud data platforms using
              Python, SQL, and Azure technologies.
            </p>

            <div className="buttons">
              <a href="https://github.com/Vigneshs9899">GitHub</a>
              <a href="https://linkedin.com/in/vigneshs9899">LinkedIn</a>
              <a href="/resume.pdf">Download Resume</a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <h2>About Me</h2>

        <p>
          Aspiring Azure Data Engineer experienced in building ETL pipelines
          using Azure services and Python. Skilled in transforming raw data into
          analytics-ready datasets using PySpark and SQL.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <h2>Skills</h2>

        <div className="grid">
          <div className="card">
            <h3>Languages</h3>
            <p>Python • SQL • PySpark</p>
          </div>

          <div className="card">
            <h3>Azure</h3>
            <p>Data Factory • Databricks • Data Lake</p>
          </div>

          <div className="card">
            <h3>Data Tools</h3>
            <p>Power BI • Streamlit • Pandas</p>
          </div>

          <div className="card">
            <h3>Databases</h3>
            <p>MySQL • MS SQL Server</p>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        <div className="projectsGrid">
          {/* Project 1 */}
          <div className="projectCard">
            <div className="projectHeader">
              <h3>Azure Sales Data Pipeline</h3>
            </div>

            <p>
              End-to-end ETL pipeline built using Azure Data Factory, Azure Data
              Lake Gen2 and Databricks to process sales data for analytics
              dashboards.
            </p>

            <div className="techStack">
              <span>Azure</span>
              <span>Python</span>
              <span>Databricks</span>
              <span>Power BI</span>
            </div>

            <div className="projectButtons">
              <a
                href="https://github.com/Vigneshs9899"
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="projectCard">
            <div className="projectHeader">
              <h3>YouTube Data Warehouse</h3>
            </div>

            <p>
              Built a data ingestion pipeline using the YouTube API, Python ETL
              and SQL warehouse with a Streamlit analytics dashboard.
            </p>

            <div className="techStack">
              <span>Python</span>
              <span>SQL</span>
              <span>Streamlit</span>
            </div>

            <div className="projectButtons">
              <a
                href="https://github.com/Vigneshs9899"
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="projectCard">
            <div className="projectHeader">
              <h3>Power BI Analytics Dashboard</h3>
            </div>

            <p>
              Created an interactive dashboard analyzing business metrics using
              SQL transformations and Power BI visualizations.
            </p>

            <div className="techStack">
              <span>SQL</span>
              <span>Power BI</span>
            </div>

            <div className="projectButtons">
              <a
                href="https://github.com/Vigneshs9899"
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PIPELINE VISUALIZATION */}
      <section>
        <h2>Azure Data Pipeline Architecture</h2>

        <div className="pipelineContainer">
          <div className="pipelineStep">
            <h3>Source</h3>
            <p>API / CSV</p>
          </div>

          <div className="arrow">→</div>

          <div className="pipelineStep">
            <h3>Ingestion</h3>
            <p>ADF</p>
          </div>

          <div className="arrow">→</div>

          <div className="pipelineStep">
            <h3>Storage</h3>
            <p>Data Lake</p>
          </div>

          <div className="arrow">→</div>

          <div className="pipelineStep">
            <h3>Processing</h3>
            <p>Databricks</p>
          </div>

          <div className="arrow">→</div>

          <div className="pipelineStep">
            <h3>Analytics</h3>
            <p>Power BI</p>
          </div>
        </div>
      </section>

      {/* GITHUB AUTO PROJECTS */}
      <section id="github">
        <h2>Latest GitHub Projects</h2>

        <div className="grid">
          {repos.map((repo) => (
            <div key={repo.id} className="card">
              <h3>{repo.name}</h3>

              <p>{repo.description}</p>

              <a href={repo.html_url} className="projectLink">
                View Repository →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2>Contact</h2>

        <p>Email: vigneshsaravanan.dev@outlook.com</p>

        <div className="buttons">
          <a href="https://github.com/Vigneshs9899">GitHub</a>
          <a href="https://linkedin.com/in/vigneshs9899">LinkedIn</a>
        </div>
      </section>

      <footer>
        <p>© 2026 Vignesh</p>
      </footer>
    </div>
  );
}

export default App;
