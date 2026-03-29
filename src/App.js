import { motion } from "framer-motion";

function App() {
  return (
    <div className="container">

      {/* Navbar */}
      <motion.nav
        className="navbar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>S Vignesh</h2>

        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#architecture">Architecture</a>
          <a href="#contact">Contact</a>
        </div>
      </motion.nav>

      {/* Hero */}
      <motion.header
        className="hero"
        initial={{ opacity: 0, y: -40 }}
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

      {/* About */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>

        <p>
          Aspiring Azure Data Engineer experienced in building ETL pipelines
          using Azure services and Python. Skilled in transforming raw data
          into analytics-ready datasets using PySpark and SQL.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2>Skills</h2>

        <div className="grid">

          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3>Languages</h3>
            <p>Python • SQL • PySpark</p>
          </motion.div>

          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3>Cloud</h3>
            <p>Azure Data Factory • Azure Databricks • Azure Data Lake</p>
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
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2>Projects</h2>

        <div className="grid">

          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3>Azure Sales Data Pipeline</h3>

            <p>
              End-to-end ETL pipeline using Azure Data Factory,
              Azure Data Lake and Databricks with Power BI dashboards.
            </p>

            <a className="projectLink" href="https://github.com/Vigneshs9899">
              View Project →
            </a>
          </motion.div>

          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3>YouTube Data Warehouse</h3>

            <p>
              Built ETL pipeline using YouTube API, Python and SQL
              with analytics dashboard using Streamlit.
            </p>

            <a className="projectLink" href="https://github.com/Vigneshs9899">
              View Project →
            </a>
          </motion.div>

          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3>Power BI Analytics Dashboard</h3>

            <p>
              Interactive dashboard analyzing business metrics
              using SQL transformations and Power BI visualizations.
            </p>
          </motion.div>

        </div>
      </motion.section>

      {/* Architecture */}
      <motion.section
        id="architecture"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2>Data Pipeline Architecture</h2>

        <div className="card">

          <h3>Azure Data Engineering Pipeline</h3>

          <p className="pipeline">
            Data Source → Azure Data Factory → Data Lake Gen2 →
            Azure Databricks → Power BI
          </p>

          <p>
            Implemented Medallion Architecture with Bronze,
            Silver and Gold layers using PySpark transformations.
          </p>

        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2>Experience</h2>

        <div className="card">
          <h3>SQL Developer</h3>
          <p>Balbhas Business Sysnomics LLC — Chennai</p>

          <p>
            Developed SQL queries for reporting and optimized
            database performance for application workflows.
          </p>
        </div>

        <div className="card">
          <h3>Web & Database Developer</h3>
          <p>Cloud Hawk — Tuticorin</p>

          <p>
            Managed backend data processing and API-based
            data operations.
          </p>
        </div>

      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2>Contact</h2>

        <p>Email: vigneshsaravanan.dev@outlook.com</p>

        <div className="buttons">
          <a href="https://github.com/Vigneshs9899">GitHub</a>
          <a href="https://linkedin.com/in/vigneshs9899">LinkedIn</a>
        </div>
      </motion.section>

      <footer>
        <p>© 2026 S Vignesh</p>
        <p>Hosted on Azure Static Web Apps</p>
      </footer>

    </div>
  );
}

export default App;