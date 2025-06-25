import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const ExperienceSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const experience = [
    {
      id: 'tutor',
      title: 'XYZ塾',
      role: 'アルバイト講師',
      period: '2022年4月～現在',
      description: '数学と会計基礎を指導。自作ワークシートで合格率を15%向上させました。',
      achievements: [
        '数学と会計基礎の指導',
        '自作ワークシートで合格率を15%向上',
      ],
    },
  ];

  const education = [
    {
      id: 'university',
      title: '立命館大学',
      degree: '経営学部',
      period: '2022年4月～2026年3月卒業予定',
      description: '会計・ファイナンス専攻',
    },
    {
      id: 'highschool',
      title: 'DEF高等学校',
      degree: '商業科',
      period: '2019年4月～2022年3月',
      description: '商業の基礎知識を習得',
    },
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            {t.experience.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-text mb-8">
              {t.experience.work}
            </h3>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary"></div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="card">
                        <h4 className="text-xl font-bold text-text mb-2">
                          {exp.title}
                        </h4>
                        <p className="text-primary font-medium mb-1">
                          {exp.role}
                        </p>
                        <p className="text-gray-400 text-sm mb-3">
                          {exp.period}
                        </p>
                        <p className="text-gray-300 mb-4">
                          {exp.description}
                        </p>
                        
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-gray-300 text-sm">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-text mb-8">
              {t.experience.education}
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-500"></div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM12 19l-5-2.73v-4.55L12 14.72l5-2.73v4.55L12 19z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="card">
                        <h4 className="text-xl font-bold text-text mb-2">
                          {edu.title}
                        </h4>
                        <p className="text-blue-500 font-medium mb-1">
                          {edu.degree}
                        </p>
                        <p className="text-gray-400 text-sm mb-3">
                          {edu.period}
                        </p>
                        <p className="text-gray-300">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 