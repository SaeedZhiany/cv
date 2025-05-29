import './App.css'
import { ThemeProvider } from './ThemeContext';
import { ThemeToggle } from './ThemeToggle';
import { usePDF } from 'react-to-pdf';
import PDFResume from './PDFResume';

function App() {
  const { toPDF, targetRef } = usePDF({
    filename: 'resume.pdf',
    page: { format: 'a4', orientation: 'portrait' },
  });

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="fixed top-4 right-4 flex gap-2 z-50">
          <ThemeToggle />
          <button
            onClick={() => toPDF()}
            className="p-2 rounded-full border-2 border-gray-200 dark:border-gray-700 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                     hover:bg-gray-100 dark:hover:bg-gray-700 
                     transition-all duration-300 ease-in-out 
                     focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
            aria-label="Download PDF"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </button>
        </div>

        {/* Hidden PDF version */}
        <div className="hidden">
          <PDFResume ref={targetRef} />
        </div>

        {/* Visible web version */}
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
              Your Name
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Software Development Team Lead
            </p>
            <div className="contact-info justify-center">
              <p>📍 Location</p>
              <p>📧 Email</p>
              <p>📱 Phone</p>
              <p>🔗 LinkedIn</p>
              <p>💻 GitHub</p>
            </div>
          </header>

          <main className="space-y-8">
            <section className="card">
              <h2>Professional Summary</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Experienced software developer with 10 years of expertise in software development
                and 1 year of team leadership experience. Proven track record of delivering
                high-quality solutions and leading development teams to success.
              </p>
            </section>

            <section className="card">
              <h2>Work Experience</h2>
              <div className="experience-item">
                <h3>Team Lead</h3>
                <p className="date">2023 - Present</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Lead and mentor development team</li>
                  <li>Drive technical decisions and architecture</li>
                  <li>Manage project timelines and deliverables</li>
                </ul>
              </div>
            </section>

            <section className="card">
              <h2>Skills</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Programming Languages</h3>
                  <ul>
                    <li>TypeScript/JavaScript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>SQL</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>Frameworks & Tools</h3>
                  <ul>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Docker</li>
                    <li>AWS</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="card">
              <h2>Education</h2>
              <div className="experience-item">
                <h3>Master of Computer Science</h3>
                <p className="date">2015 - 2017</p>
                <p className="text-gray-700 dark:text-gray-300">
                  University Name, Specialization in Software Engineering
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
