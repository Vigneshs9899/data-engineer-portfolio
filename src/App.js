import { motion } from "framer-motion";

function App() {

  const fadeUp = {
    hidden:{opacity:0,y:40},
    show:{opacity:1,y:0}
  };

  return (
    <div className="container">

      {/* NAVBAR */}
      <nav className="navbar">

        <h2 className="logo">S Vignesh</h2>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#pipeline">Pipeline</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>


      {/* HERO */}
      <section className="hero">

        <motion.div
          className="heroContent"
          initial="hidden"
          animate="show"
          transition={{staggerChildren:.2}}
        >

          <motion.div
            variants={fadeUp}
            transition={{duration:.8}}
            className="heroImage"
          >
            <img src="/profile.png" alt="profile"/>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{duration:.8}}
            className="heroText"
          >

            <h1>Azure Data Engineer</h1>

            <p>
              Building scalable data pipelines and cloud data platforms
              using Python, SQL and Azure technologies.
            </p>

            <div className="heroButtons">

              <a
                href="https://github.com/Vigneshs9899"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/vigneshs9899"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a href="/resume.pdf">Resume</a>

            </div>

          </motion.div>

        </motion.div>

      </section>


      {/* ABOUT */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}
        variants={fadeUp}
        transition={{duration:.7}}
      >

        <h2>About Me</h2>

        <p>
          Azure Data Engineer experienced in building ETL pipelines using
          Azure Data Factory, Azure Data Lake and Databricks.
          Skilled in Python, SQL and PySpark for transforming raw data
          into analytics-ready datasets.
        </p>

      </motion.section>


      {/* SKILLS */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}
        variants={fadeUp}
        transition={{duration:.7}}
      >

        <h2>Skills</h2>

        <div className="grid">

          <div className="card">
            <h3>Languages</h3>
            <p>Python • SQL • PySpark</p>
          </div>

          <div className="card">
            <h3>Azure</h3>
            <p>Data Factory • Data Lake • Databricks</p>
          </div>

          <div className="card">
            <h3>Data Tools</h3>
            <p>Power BI • Pandas • Streamlit</p>
          </div>

          <div className="card">
            <h3>Databases</h3>
            <p>MySQL • MS SQL Server</p>
          </div>

        </div>

      </motion.section>


      {/* PROJECTS */}
      <section id="projects">

        <h2>Projects</h2>

        <div className="projectsGrid">

          <motion.div
            className="projectCard"
            whileHover={{y:-6}}
          >

            <img
              src="/projects/sales-pipeline.png"
              className="projectImage"
              alt=""
            />

            <h3>Azure Sales Data Pipeline</h3>

            <p>
              End-to-end pipeline using Azure Data Factory,
              Data Lake Gen2 and Databricks for transforming sales data.
            </p>

            <div className="techStack">
              <span>Azure</span>
              <span>Python</span>
              <span>Databricks</span>
              <span>Power BI</span>
            </div>

            <a
              className="githubButton"
              href="https://github.com/Vigneshs9899"
              target="_blank"
              rel="noreferrer"
            >
              View Code
            </a>

          </motion.div>



          <motion.div
            className="projectCard"
            whileHover={{y:-6}}
          >

            <img
              src="/projects/youtube-pipeline.png"
              className="projectImage"
              alt=""
            />

            <h3>YouTube Data Warehouse</h3>

            <p>
              ETL pipeline using YouTube API, Python processing and
              SQL warehouse with analytics dashboard.
            </p>

            <div className="techStack">
              <span>Python</span>
              <span>SQL</span>
              <span>Streamlit</span>
            </div>

            <a
              className="githubButton"
              href="https://github.com/Vigneshs9899"
              target="_blank"
              rel="noreferrer"
            >
              View Code
            </a>

          </motion.div>

        </div>

      </section>


      {/* PIPELINE */}
      <section id="pipeline">

        <h2>Azure Data Pipeline Architecture</h2>

        <div className="pipeline">

          <div>Source</div>
          <span>→</span>
          <div>ADF</div>
          <span>→</span>
          <div>Data Lake</div>
          <span>→</span>
          <div>Databricks</div>
          <span>→</span>
          <div>Power BI</div>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact">

        <h2>Contact</h2>

        <p>Email: vigneshsaravanan.dev@outlook.com</p>

        <div className="heroButtons">

          <a
            href="https://github.com/Vigneshs9899"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/vigneshs9899"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </section>


      <footer>

        <p>© 2026 Vignesh</p>

      

      </footer>

    </div>
  );
}

export default App;