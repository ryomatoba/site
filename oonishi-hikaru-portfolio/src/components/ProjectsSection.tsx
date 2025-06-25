import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const ProjectsSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = [
    {
      id: 'circle',
      title: '大学間イベントサークル',
      role: '副代表 & 会計責任者',
      period: '2022年4月 – 2023年3月',
      description: '学生団体の副代表として50名以上のメンバーを率い、設立後6ヶ月で単月黒字化を達成。平均120名参加のイベントを8回主催し、組織運営と財務管理の実践的なスキルを身につけました。',
      achievements: [
        'メンバーを50名以上に拡大',
        '設立後6ヶ月で単月黒字化を達成',
        '平均120名参加のイベントを8回主催',
      ],
      tools: ['Excel (予算管理)', 'Google Workspace', 'Canva (広報)'],
      image: '/assets/images/circle.jpg',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text mb-4 sm:mb-6">
            {t.projects.title}
          </h2>
          <div className="w-20 sm:w-24 h-0.5 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card hover:bg-gray-700/50 transition-all duration-200 hover:scale-[1.02] cursor-pointer group"
            >
              {/* Project Image */}
              <div className="mb-4 sm:mb-6">
                <div className="w-full h-40 sm:h-48 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-200">
                  <svg
                    className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-gray-500 group-hover:text-primary transition-colors duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-text mb-2 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-primary font-medium mb-1 text-sm sm:text-base">
                    {project.role}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {project.period}
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Achievements */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-text mb-2 sm:mb-3">
                    主要な成果
                  </h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-primary mt-1 text-xs">•</span>
                        <span className="text-gray-300 text-xs sm:text-sm">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-text mb-2 sm:mb-3">
                    使用ツール
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2 sm:px-3 py-1 bg-gray-800 text-gray-300 text-xs sm:text-sm rounded-full border border-gray-600 hover:border-primary transition-colors duration-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full mt-4 sm:mt-6 text-sm sm:text-base"
                >
                  {t.projects.viewDetails}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 