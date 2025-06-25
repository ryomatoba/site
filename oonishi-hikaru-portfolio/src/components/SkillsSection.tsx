import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const SkillsSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const skillCategories = [
    {
      id: 'qualifications',
      title: t.skills.qualifications,
      skills: [
        {
          name: '日商簿記検定2級',
          level: 5,
          detail: '2023年7月取得',
          description: 'freshman summerに合格。強固な複式簿記の知識。',
        },
        {
          name: 'JICPA Business Game 2024',
          level: 5,
          detail: '3位',
          description: '会計・財務の実践的なスキルを競う大会で優秀な成績を収めました。',
        },
      ],
    },
    {
      id: 'accounting',
      title: t.skills.accounting,
      skills: [
        {
          name: '簿記2級レベル',
          level: 4,
          detail: '★★★★☆',
          description: 'freshman summerに合格。強固な複式簿記の知識。',
        },
        {
          name: '日本公認会計士 短答式レベル',
          level: 3,
          detail: '★★★☆☆',
          description: '3年次5月まで学習。J-GAAPと監査論の基礎をカバー。',
        },
        {
          name: 'USCPA (学習中)',
          level: 2,
          detail: '★★☆☆☆',
          description: '現在FARとREGを準備中。',
        },
        {
          name: '財務分析',
          level: 3,
          detail: '★★★☆☆',
          description: '学生団体の予算編成、損益分岐点分析に応用。',
        },
      ],
    },
    {
      id: 'it',
      title: t.skills.it,
      skills: [
        {
          name: 'Excel (上級)',
          level: 4,
          detail: '★★★★☆',
          description: 'ピボットテーブル, VLOOKUP/XLOOKUP, 基本的なVBAマクロ。',
        },
        {
          name: '英語',
          level: 4,
          detail: '★★★★☆',
          description: 'TOEICスコアを記載。学術で日常的に使用。このサイトのコピーも自身で作成。',
        },
      ],
    },
  ];

  const renderStars = (level: number) => {
    return '★'.repeat(level) + '☆'.repeat(5 - level);
  };

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text mb-4 sm:mb-6">
            {t.skills.title}
          </h2>
          <div className="w-20 sm:w-24 h-0.5 bg-primary mx-auto"></div>
        </motion.div>

        <div className="space-y-12 sm:space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-text mb-6 sm:mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="card hover:bg-gray-700/50 transition-all duration-200 hover:scale-[1.02] group"
                  >
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-lg sm:text-xl font-semibold text-text mb-2 group-hover:text-primary transition-colors duration-200">
                        {skill.name}
                      </h4>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-primary font-medium text-sm">
                          {skill.detail}
                        </span>
                        <span className="text-yellow-400 text-xs sm:text-sm">
                          {renderStars(skill.level)}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 