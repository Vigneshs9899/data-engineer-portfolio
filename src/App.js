function App() {
  return (
    <div className="container">

      <nav className="navbar">
        <h2>S Vignesh</h2>
        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <h1>Azure Data Engineer</h1>
        <p>
          Building scalable data pipelines and cloud data platforms using
          Python, SQL and Azure.
        </p>

        <div className="buttons">
          <a href="https://github.com/Vigneshs9899">GitHub</a>
          <a href="https://linkedin.com/in/vigneshs9899">LinkedIn</a>
          <a href="/resume.pdf">Download Resume</a>
        </div>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          Aspiring Azure Data Engineer experienced in building ETL pipelines
          using Azure services and Python. Skilled in transforming raw data
          into analytics-ready datasets using PySpark and SQL.
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>

        <div className="grid">
          <div className="card">
            <h3>Languages</h3>
            <p>Python, SQL, PySpark</p>
          </div>

          <div className="card">
            <h3>Cloud</h3>
            <p>Azure Data Factory, Azure Databricks, Azure Data Lake</p>
          </div>

          <div className="card">
            <h3>Data Tools</h3>
            <p>Power BI, Streamlit, Pandas</p>
          </div>

          <div className="card">
            <h3>Databases</h3>
            <p>MySQL, MS SQL Server</p>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        <div className="grid">

          <div className="card">
            <h3>Azure Sales Data Pipeline</h3>
            <p>
              End-to-end data pipeline using Azure Data Factory,
              Azure Data Lake and Databricks with Power BI dashboard.
            </p>
          </div>

          <div className="card">
            <h3>YouTube Data Warehouse</h3>
            <p>
              Built ETL pipeline using YouTube API, Python and SQL with
              analytics dashboard using Streamlit.
            </p>
          </div>

          <div className="card">
            <h3>Business Analytics Dashboard</h3>
            <p>
              Interactive Power BI dashboard with SQL data transformation
              and business insights.
            </p>
          </div>

        </div>
      </section>

      <section id="experience">
        <h2>Experience</h2>

        <div className="card">
          <h3>SQL Developer</h3>
          <p>Balbhas Business Sysnomics LLC — Chennai</p>
          <p>
            Developed SQL queries for reporting and optimized database
            performance for application data workflows.
          </p>
        </div>

        <div className="card">
          <h3>Web & Database Developer</h3>
          <p>Cloud Hawk — Tuticorin</p>
          <p>
            Managed backend data operations and API-based data processing.
          </p>
        </div>
      </section>

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
      </footer>

    </div>
  );
}

export default App;