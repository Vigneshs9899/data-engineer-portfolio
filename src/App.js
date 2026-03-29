import { motion } from "framer-motion";

function App() {
  return (
    <div className="container">

      {/* NAVBAR */}
      <motion.nav
        className="navbar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2>S Vignesh</h2>

        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#pipeline">Pipeline</a>
          <a href="#contact">Contact</a>
        </div>
      </motion.nav>


      {/* HERO */}
      <motion.header
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Azure Data Engineer</h1>

        <p>
          Building scalable data pipelines and cloud data platforms using
          Python, SQL and Azure technologies.
        </p>

        <div className="buttons">
          <a href="https://github.com/Vigneshs9899">GitHub</a>
          <a href="https://linkedin.com/in/vigneshs9899">LinkedIn</a>
          <a href="/resume.pdf">Download Resume</a>
        </div>
      </motion.header>


      {/* ABOUT */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2>About Me</h2>

        <p>
          Aspiring Azure Data Engineer with hands-on experience building
          ETL pipelines using Azure services and Python.
          Skilled in transforming raw data into analytics-ready datasets
          using PySpark and SQL.
        </p>
      </motion.section>


      {/* SKILLS */}
      <section id="skills">
        <h2>Skills</h2>

        <div className="grid">

          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3>Languages</h3>
            <p>Python • SQL • PySpark</p>
          </motion.div>

          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3>Azure</h3>
            <p>Azure Data Factory • Azure Databricks • Data Lake</p>
          </motion.div>

          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3>Data Tools</h3>
            <p>Power BI • Streamlit • Pandas</p>
          </motion.div>

          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3>Databases</h3>
            <p>MySQL • MS SQL Server</p>
          </motion.div>

        </div>
      </section>


      {/* PROJECTS */}
      <section id="projects">
        <h2>Projects</h2>

        <div className="grid">

          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3>Azure Sales Data Pipeline</h3>

            <p>
              Built an end-to-end ETL pipeline using Azure Data Factory,
              Azure Data Lake Storage Gen2 and Azure Databricks with
              Power BI dashboards.
            </p>

            <a
              className="projectLink"
              href="https://github.com/Vigneshs9899"
            >
              View Project →
            </a>
          </motion.div>


          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3>YouTube Data Warehouse</h3>

            <p>
              Built data ingestion pipeline using YouTube API,
              Python ETL and SQL warehouse with Streamlit analytics.
            </p>

            <a
              className="projectLink"
              href="https://github.com/Vigneshs9899"
            >
              View Project →
            </a>
          </motion.div>


          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3>Power BI Analytics Dashboard</h3>

            <p>
              Interactive business analytics dashboard built
              using SQL transformations and Power BI.
            </p>
          </motion.div>

        </div>
      </section>


      {/* DATA PIPELINE */}
      <section id="pipeline">

        <h2>Azure Data Pipeline Architecture</h2>

        <div className="pipelineContainer">

          <div className="pipelineStep">
            <h3>Data Source</h3>
            <p>API / CSV</p>
          </div>

          <div className="arrow">→</div>

          <div className="pipelineStep">
            <h3>Ingestion</h3>
            <p>Azure Data Factory</p>
          </div>

          <div className="arrow">→</div>

          <div className="pipelineStep">
            <h3>Storage</h3>
            <p>Data Lake Gen2</p>
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


      {/* CONTACT */}
      <section id="contact">

        <h2>Contact</h2>

        <p>Email: vigneshsaravanan.dev@outlook.com</p>

        <div className="buttons">
          <a href="https://github.com/Vigneshs9899">GitHub</a>
          <a href="https://linkedin.com/in/vigneshs9899">LinkedIn</a>
        </div>

      </section>


      {/* FOOTER */}
      <footer>
        <p>© 2026 S Vignesh</p>
        <p>Hosted on Azure Static Web Apps</p>
      </footer>

    </div>
  );
}

export default App;