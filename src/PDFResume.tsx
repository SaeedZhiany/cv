import { forwardRef } from 'react';

const PDFResume = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="p-8 max-w-[210mm] mx-auto bg-white">
      {/* Header */}
      <header className="text-center mb-8 border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Name</h1>
        <p className="text-xl text-gray-600 mb-4">Software Development Team Lead</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <p>📍 Location</p>
          <p>📧 Email</p>
          <p>📱 Phone</p>
          <p>🔗 LinkedIn</p>
          <p>💻 GitHub</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="space-y-6">
        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2 border-b border-gray-200 pb-1">Professional Summary</h2>
          <p className="text-gray-700">
            Experienced software developer with 10 years of expertise in software development
            and 1 year of team leadership experience. Proven track record of delivering
            high-quality solutions and leading development teams to success.
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">Work Experience</h2>
          <div className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-semibold text-gray-800">Team Lead</h3>
              <p className="text-sm text-gray-600">2023 - Present</p>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Lead and mentor development team</li>
              <li>Drive technical decisions and architecture</li>
              <li>Manage project timelines and deliverables</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">Skills</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Programming Languages</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>TypeScript/JavaScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>SQL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Frameworks & Tools</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>React</li>
                <li>Node.js</li>
                <li>Docker</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">Education</h2>
          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-semibold text-gray-800">Master of Computer Science</h3>
              <p className="text-sm text-gray-600">2015 - 2017</p>
            </div>
            <p className="text-gray-700">University Name, Specialization in Software Engineering</p>
          </div>
        </section>
      </main>
    </div>
  );
});

PDFResume.displayName = 'PDFResume';

export default PDFResume; 