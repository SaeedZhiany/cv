import './App.css'
import { ThemeProvider } from './ThemeContext';
import { ThemeToggle } from './ThemeToggle';
import PDFResume from './PDFResume';
import { usePDF } from 'react-to-pdf';
import { FaLinkedin, FaGithub, FaStackOverflow, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function App() {
  // Initialize lang from localStorage if available
  const [lang, setLang] = useState<'en' | 'fa'>(() => {
    const stored = localStorage.getItem('lang');
    return stored === 'fa' ? 'fa' : 'en';
  });
  const [cvData, setCvData] = useState<any>(null);
  const { toPDF, targetRef } = usePDF({ filename: 'resume.pdf' });

  // Persist lang to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  useEffect(() => {
    const file = lang === 'fa' ? 'cv-data.fa.json' : 'cv-data.en.json';
    fetch(`${import.meta.env.BASE_URL}${file}`)
      .then(res => res.json())
      .then(setCvData);
  }, [lang]);

  if (!cvData) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;

  return (
    <ThemeProvider>
      <div className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300${lang === 'fa' ? ' font-vazirmatn' : ''}`} dir={lang === 'fa' ? 'rtl' : 'ltr'}>
        {/* Fixed header with theme toggle, language toggle, and download button (always LTR) */}
        <div className="fixed top-4 right-4 z-50" dir="ltr">
          <div className="flex gap-2">
            <ThemeToggle />
            <button
              onClick={() => setLang(lang === 'en' ? 'fa' : 'en')}
              className="p-2 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark flex items-center gap-2"
              aria-label="Toggle Language"
            >
              {lang === 'en' ? 'FA' : 'EN'}
            </button>
            <button
              onClick={() => toPDF()}
              className="p-2 rounded-full border-2 border-gray-200 dark:border-gray-700 
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                       hover:bg-gray-100 dark:hover:bg-gray-700 
                       transition-all duration-300 ease-in-out 
                       focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark
                       flex items-center gap-2"
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
              <span className="hidden sm:inline min-w-[115px] text-left">Download</span>
            </button>
          </div>
        </div>

        {/* Hidden PDF version for download (off-screen, not display:none) */}
        <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
          <PDFResume ref={targetRef} cvData={cvData} lang={lang} />
        </div>

        {/* Visible web version */}
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
              {cvData.name}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              {cvData.headline}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-400">
              <p className="flex items-center gap-2"><FaMapMarkerAlt className="w-4 h-4" /> {cvData.location}</p>
              <p className="flex items-center gap-2"><FaEnvelope className="w-4 h-4" /> {cvData.email}</p>
              {cvData.phone && <p className="flex items-center gap-2"><FaPhoneAlt className="w-4 h-4" /> {cvData.phone}</p>}
              <a href={cvData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 group">
                <FaLinkedin className="w-5 h-5 text-gray-500 group-hover:text-[#0077B5] transition-colors" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              {cvData.github && (
                <a href={cvData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 group">
                  <FaGithub className="w-5 h-5 text-gray-500 group-hover:text-[#181717] transition-colors" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              )}
              {cvData.stackoverflow && (
                <a href={cvData.stackoverflow} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 group">
                  <FaStackOverflow className="w-5 h-5 text-gray-500 group-hover:text-[#F48024] transition-colors" />
                  <span className="hidden sm:inline">Stack Overflow</span>
                </a>
              )}
            </div>
          </header>

          <main className="space-y-8">
            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{lang === 'fa' ? 'خلاصه حرفه‌ای' : 'Professional Summary'}</h2>
              <p className="text-gray-700 dark:text-gray-300">
                {cvData.summary}
              </p>
            </section>

            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{lang === 'fa' ? 'سوابق شغلی' : 'Work Experience'}</h2>
              {cvData.experience.map((exp: any, idx: number) => (
                <div className="mb-6" key={idx}>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{exp.title} @ {exp.company}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{exp.start} - {exp.end}</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>{exp.description}</li>
                  </ul>
                </div>
              ))}
            </section>

            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{lang === 'fa' ? 'مهارت‌ها' : 'Skills'}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cvData.skills.map((skill: any, idx: number) => (
                  <div key={idx}>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">{skill.category}</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      {skill.items.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{lang === 'fa' ? 'تحصیلات' : 'Education'}</h2>
              {cvData.education.map((edu: any, idx: number) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{edu.degree} {lang === 'fa' ? 'در' : 'in'} {edu.field}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{edu.start} - {edu.end}</p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {edu.school}
                  </p>
                  {edu.description && <p className="text-gray-700 dark:text-gray-300 mt-1">{edu.description}</p>}
                </div>
              ))}
            </section>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
