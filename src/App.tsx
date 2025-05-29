import './App.css'
import { ThemeProvider } from './ThemeContext';
import { ThemeToggle } from './ThemeToggle';
import { usePDF } from 'react-to-pdf';
import PDFResume from './PDFResume';
import { useState } from 'react';

function App() {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const { toPDF, targetRef } = usePDF({
    filename: 'resume.pdf',
    page: { format: 'a4', orientation: 'portrait' },
  });

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    // Small delay to ensure the PDF component is rendered
    setTimeout(async () => {
      await toPDF();
      setIsGeneratingPDF(false);
    }, 100);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Fixed header with theme toggle and download button */}
        <div className="fixed top-4 right-4 flex gap-2 z-50">
          <ThemeToggle />
          <button
            onClick={handleDownloadPDF}
            className="p-2 rounded-full border-2 border-gray-200 dark:border-gray-700 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                     hover:bg-gray-100 dark:hover:bg-gray-700 
                     transition-all duration-300 ease-in-out 
                     focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark
                     flex items-center gap-2"
            aria-label="Download PDF"
            disabled={isGeneratingPDF}
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
            <span className="hidden sm:inline">
              {isGeneratingPDF ? 'Generating...' : 'Download PDF'}
            </span>
          </button>
        </div>

        {/* PDF version - only visible during generation */}
        <div className={isGeneratingPDF ? 'fixed top-0 left-0 w-full h-full z-50 bg-white' : 'hidden'}>
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
            <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-400">
              <p className="flex items-center gap-2">📍 Location</p>
              <p className="flex items-center gap-2">📧 Email</p>
              <p className="flex items-center gap-2">📱 Phone</p>
              <p className="flex items-center gap-2">🔗 LinkedIn</p>
              <p className="flex items-center gap-2">💻 GitHub</p>
            </div>
          </header>

          <main className="space-y-8">
            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Professional Summary</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Experienced software developer with 10 years of expertise in software development
                and 1 year of team leadership experience. Proven track record of delivering
                high-quality solutions and leading development teams to success.
              </p>
            </section>

            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Work Experience</h2>
              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Team Lead</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2023 - Present</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Lead and mentor development team</li>
                  <li>Drive technical decisions and architecture</li>
                  <li>Manage project timelines and deliverables</li>
                </ul>
              </div>
            </section>

            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Programming Languages</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>TypeScript/JavaScript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>SQL</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Frameworks & Tools</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Docker</li>
                    <li>AWS</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Education</h2>
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Master of Computer Science</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2015 - 2017</p>
                </div>
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
