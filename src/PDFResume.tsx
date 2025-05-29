import { forwardRef } from 'react';
import cvData from './cv-data.json';
import { FaLinkedin, FaGithub, FaStackOverflow, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const PDFResume = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="p-8 max-w-[210mm] mx-auto bg-white">
      {/* Header */}
      <header className="text-center mb-8 border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{cvData.name}</h1>
        <p className="text-xl text-gray-600 mb-4">{cvData.headline}</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1"><FaMapMarkerAlt className="w-4 h-4 text-gray-600" /> {cvData.location}</span>
          <span className="flex items-center gap-1"><FaEnvelope className="w-4 h-4 text-gray-600" /> {cvData.email}</span>
          {cvData.phone && <span className="flex items-center gap-1"><FaPhoneAlt className="w-4 h-4 text-gray-600" /> {cvData.phone}</span>}
          <span className="flex items-center gap-1">
            <FaLinkedin className="w-5 h-5 text-gray-600" />
            <span>LinkedIn</span>
          </span>
          {cvData.github && (
            <span className="flex items-center gap-1">
              <FaGithub className="w-5 h-5 text-gray-600" />
              <span>GitHub</span>
            </span>
          )}
          {cvData.stackoverflow && (
            <span className="flex items-center gap-1">
              <FaStackOverflow className="w-5 h-5 text-gray-600" />
              <span>Stack Overflow</span>
            </span>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="space-y-6">
        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2 border-b border-gray-200 pb-1">Professional Summary</h2>
          <p className="text-gray-700">
            {cvData.summary}
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">Work Experience</h2>
          {cvData.experience.map((exp, idx) => (
            <div className="mb-4" key={idx}>
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-semibold text-gray-800">{exp.title} @ {exp.company}</h3>
                <p className="text-sm text-gray-600">{exp.start} - {exp.end}</p>
              </div>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                <li>{exp.description}</li>
              </ul>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">Skills</h2>
          <div className="grid grid-cols-2 gap-6">
            {cvData.skills.map((skill, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill.category}</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {skill.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">Education</h2>
          {cvData.education.map((edu, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-semibold text-gray-800">{edu.degree} in {edu.field}</h3>
                <p className="text-sm text-gray-600">{edu.start} - {edu.end}</p>
              </div>
              <p className="text-gray-700">{edu.school}</p>
              {edu.description && <p className="text-gray-700 mt-1">{edu.description}</p>}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
});

PDFResume.displayName = 'PDFResume';

export default PDFResume; 