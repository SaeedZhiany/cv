import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Your Name</h1>
        <p className="title">Software Development Team Lead</p>
        <div className="contact-info">
          <p>📍 Location</p>
          <p>📧 Email</p>
          <p>📱 Phone</p>
          <p>🔗 LinkedIn</p>
          <p>💻 GitHub</p>
        </div>
      </header>

      <main>
        <section className="section">
          <h2>Professional Summary</h2>
          <p>
            Experienced software developer with 10 years of expertise in software development
            and 1 year of team leadership experience. Proven track record of delivering
            high-quality solutions and leading development teams to success.
          </p>
        </section>

        <section className="section">
          <h2>Work Experience</h2>
          <div className="experience-item">
            <h3>Team Lead</h3>
            <p className="date">2023 - Present</p>
            <ul>
              <li>Lead and mentor development team</li>
              <li>Drive technical decisions and architecture</li>
              <li>Manage project timelines and deliverables</li>
            </ul>
          </div>
          {/* Add more experience items here */}
        </section>

        <section className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <ul>
                <li>TypeScript/JavaScript</li>
                {/* Add more skills */}
              </ul>
            </div>
            <div className="skill-category">
              <h3>Frameworks & Tools</h3>
              <ul>
                <li>React</li>
                {/* Add more skills */}
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Education</h2>
          {/* Add education details */}
        </section>
      </main>
    </div>
  )
}

export default App
