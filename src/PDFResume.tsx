import { forwardRef } from 'react';
import { FaLinkedin, FaGithub, FaStackOverflow, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

interface Skill {
  category: string;
  items: string[];
}
interface Experience {
  title: string;
  company: string;
  start: string;
  end: string;
  description: string;
  location: string;
}
interface Education {
  school: string;
  degree: string;
  field: string;
  start: string;
  end: string;
  description: string;
}
interface CVData {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone?: string;
  linkedin: string;
  github?: string;
  stackoverflow?: string;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
}

const PDFResume = forwardRef<HTMLDivElement, { cvData: CVData; lang: 'en' | 'fa' }>((props, ref) => {
  const { cvData, lang } = props;
  const isRTL = lang === 'fa';

  return (
    <div 
      ref={ref} 
      className={`
        w-[794px] min-h-[1122px] bg-white
        ${isRTL ? 'font-vazirmatn text-right' : ''}
      `} 
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        // Ensure proper page margins and breaks
        pageBreakAfter: 'always',
        pageBreakInside: 'avoid',
        breakInside: 'avoid',
        // Ensure proper text rendering for Persian
        textAlign: isRTL ? 'right' : 'left',
        fontFeatureSettings: isRTL ? '"ss01"' : 'normal',
        // Use full width
        margin: 0,
        padding: '76px',
      }}
    >
      {/* Header with improved spacing and layout */}
      <header className={`mb-8 border-b-2 border-gray-200 pb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
        <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">{cvData.name}</h1>
        <p className="text-2xl text-gray-700 mb-6">{cvData.headline}</p>
        
        {/* Contact information in a grid layout */}
        <div className={`grid ${isRTL ? 'grid-cols-2 gap-x-4' : 'grid-cols-2 gap-x-8'} gap-y-2 text-sm text-gray-600`}>
          <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <FaMapMarkerAlt className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <span>{cvData.location}</span>
          </div>
          <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <FaEnvelope className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <span>{cvData.email}</span>
          </div>
          {cvData.phone && (
            <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <FaPhoneAlt className="w-4 h-4 text-gray-500 flex-shrink-0" />
              <span>{cvData.phone}</span>
            </div>
          )}
          <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <FaLinkedin className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <span>LinkedIn</span>
          </div>
          {cvData.github && (
            <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <FaGithub className="w-4 h-4 text-gray-500 flex-shrink-0" />
              <span>GitHub</span>
            </div>
          )}
          {cvData.stackoverflow && (
            <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <FaStackOverflow className="w-4 h-4 text-gray-500 flex-shrink-0" />
              <span>Stack Overflow</span>
            </div>
          )}
        </div>
      </header>

      {/* Main Content with improved section styling */}
      <main className="space-y-6">
        {/* Professional Summary */}
        <section className={`mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
            {isRTL ? 'خلاصه حرفه‌ای' : 'Professional Summary'}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {cvData.summary}
          </p>
        </section>

        {/* Work Experience with improved layout */}
        <section className={`mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
            {isRTL ? 'سوابق شغلی' : 'Work Experience'}
          </h2>
          <div className="space-y-4">
            {cvData.experience.map((exp, idx) => (
              <div key={idx} className="break-inside-avoid">
                <div className={`flex ${isRTL ? 'flex-row-reverse' : ''} justify-between items-baseline mb-2`}>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {exp.title} @ {exp.company}
                  </h3>
                  <p className={`text-sm text-gray-600 whitespace-nowrap ${isRTL ? 'ml-4' : 'mr-4'}`}>
                    {exp.start} - {exp.end}
                  </p>
                </div>
                <ul className={`list-disc ${isRTL ? 'list-inside' : 'list-inside'} mt-2 space-y-1 text-gray-700 leading-relaxed`}>
                  <li>{exp.description}</li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills with improved grid layout */}
        <section className={`mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
            {isRTL ? 'مهارت‌ها' : 'Skills'}
          </h2>
          <div className={`grid ${isRTL ? 'grid-cols-2 gap-x-4' : 'grid-cols-2 gap-x-8'} gap-y-4`}>
            {cvData.skills.map((skill, idx) => (
              <div key={idx} className="break-inside-avoid">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {skill.category}
                </h3>
                <ul className={`list-disc ${isRTL ? 'list-inside' : 'list-inside'} space-y-1 text-gray-700`}>
                  {skill.items.map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education with improved layout */}
        <section className={isRTL ? 'text-right' : 'text-left'}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
            {isRTL ? 'تحصیلات' : 'Education'}
          </h2>
          <div className="space-y-4">
            {cvData.education.map((edu, idx) => (
              <div key={idx} className="break-inside-avoid">
                <div className={`flex ${isRTL ? 'flex-row-reverse' : ''} justify-between items-baseline mb-2`}>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {edu.degree} {isRTL ? 'در' : 'in'} {edu.field}
                  </h3>
                  <p className={`text-sm text-gray-600 whitespace-nowrap ${isRTL ? 'ml-4' : 'mr-4'}`}>
                    {edu.start} - {edu.end}
                  </p>
                </div>
                <p className="text-gray-700">{edu.school}</p>
                {edu.description && (
                  <p className="text-gray-700 mt-1 leading-relaxed">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
});

PDFResume.displayName = 'PDFResume';

export default PDFResume; 