import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const ExperienceSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const education = [
    {
      id: 'university',
      title: '立命館大学',
      degree: '経営学部 会計専攻',
      period: '2023年4月〜2027年3月（予定）',
      description: '会計・ファイナンスを専攻',
    },
    {
      id: 'highschool',
      title: '大阪府立和泉高等学校',
      degree: '普通科',
      period: '2020年4月〜2023年3月',
      description: '普通科で基礎学力を習得',
    },
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t.experience.title}
        </motion.h2>

        <div className="flex flex-col items-center gap-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-2xl"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-300 rounded-full opacity-30" style={{height: '100%'}}></div>
              <div className="flex items-start space-x-8">
                <div className="relative z-10 pt-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-soft">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM12 19l-5-2.73v-4.55L12 14.72l5-2.73v4.55L12 19z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="card hover:shadow-medium transition-all duration-300">
                    <h4 className="text-2xl font-bold text-text mb-3">
                      {edu.title}
                    </h4>
                    <p className="text-primary-600 font-semibold mb-2 text-lg">
                      {edu.degree}
                    </p>
                    <p className="text-text-muted text-sm mb-4">
                      {edu.period}
                    </p>
                    <p className="text-text-muted leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 