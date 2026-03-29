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


      {/* HERO */}
      <section className="hero">

        <motion.img
          src="/profile.png"
          className="profileImage"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Azure Data Engineer</h1>

          <p>
            Building scalable data pipelines and cloud data platforms
            using Python, SQL and Azure technologies.
          </p>

          <div className="buttons">
            <a href="https://github.com/Vigneshs9899">GitHub</a>
            <a href="https://linkedin.com/in/vigneshs9899">LinkedIn</a>
            <a href="/resume.pdf">Download Resume</a>
          </div>
        </motion.div>

      </section>


      {/* ABOUT */}
      <section id="about">

        <h2>About Me</h2>

        <p>
          Aspiring Azure Data Engineer experienced in building ETL pipelines
          using Azure services and Python. Skilled in transforming raw data
          into analytics-ready datasets using PySpark and SQL.
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


      {/* PROJECTS */}
      <section id="projects">

        <h2>Projects</h2>

        <div className="grid">

          <div className="card">
            <h3>Azure Sales Data Pipeline</h3>

            <p>
              End-to-end ETL pipeline using Azure Data Factory,
              Azure Data Lake Storage Gen2 and Databricks.
            </p>

          </div>

          <div className="card">
            <h3>YouTube Data Warehouse</h3>

            <p>
              Built ETL pipeline using YouTube API,
              Python processing and SQL storage.
            </p>

          </div>

          <div className="card">
            <h3>Power BI Dashboard</h3>

            <p>
              Interactive dashboard analyzing business metrics
              using SQL transformations.
            </p>

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

        <p>© 2026 S Vignesh</p>

        <p>Hosted on Azure Static Web Apps</p>

      </footer>

    </div>
  );
}

export default App;