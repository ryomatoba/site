import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

const ProjectsSection = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const t = translations[language];

  const projects = [
    {
      id: 'jicpa-game',
      title: '日本公認会計士協会ビジネスゲーム',
      role: '参加者・ファイナンス分析担当',
      period: '2023年8月',
      description: '日本公認会計士協会主催のビジネスゲームに参加し、企業の財務分析と戦略立案を担当。チーム内でファイナンス分析をリードし、投資判断とリスク管理の実践的なスキルを身につけました。',
      achievements: [
        '財務分析による投資判断を実施',
        'リスク管理戦略を立案・実行',
        'チーム内でファイナンス分析をリード',
        '実践的な財務分析スキルを習得',
      ],
      tools: ['財務分析ツール', 'Excel (財務モデリング)', 'プレゼンテーション'],
      image: '/assets/images/game.png',
    },
    {
      id: 'circle',
      title: 'インカレイベントサークル',
      role: '副代表 兼 会計責任者',
      period: '2022年4月 – 2023年3月',
      description: 'インカレサークルを立ち上げ、副代表として会計と運営を統括。財務健全化と60名規模への拡大を達成し、初回で利益創出を実現しました。組織運営と財務管理の実践的なスキルを身につけました。',
      achievements: [
        'メンバーを60名に拡大',
        '初回で利益創出を達成',
        '財務健全化を実現',
        '会計と運営を統括',
      ],
      tools: ['Excel (予算管理)', 'Google Workspace', 'Canva (広報)'],
      image: '/assets/images/circle.jpg',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t.projects.title}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card hover:shadow-medium transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
            >
              {/* Project Image */}
              <div className="mb-6">
                <div className="w-full h-48 lg:h-56 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center group-hover:from-primary-100 group-hover:to-primary-200 transition-all duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full rounded-xl"
                    style={{ maxHeight: '100%', maxWidth: '100%' }}
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-5">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-text mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-2 text-base">
                    {project.role}
                  </p>
                  <p className="text-text-muted text-sm">
                    {project.period}
                  </p>
                </div>

                <p className="text-text-muted leading-relaxed text-base">
                  {project.description}
                </p>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-text mb-4">
                    主要な成果
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="text-primary-600 mt-1.5 text-lg">•</span>
                        <span className="text-text-muted text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="text-lg font-semibold text-text mb-4">
                    使用ツール
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gray-100 text-text text-sm rounded-full border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
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
                  className="btn-primary w-full mt-6 text-base"
                  onClick={() => {
                    if (project.id === 'jicpa-game') {
                      navigate('/project/jicpa-game');
                    } else if (project.id === 'circle') {
                      navigate('/project/circle');
                    }
                  }}
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