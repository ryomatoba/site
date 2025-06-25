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
          level: 4,
          detail: '2023年7月取得',
          description: '1年次夏に取得。仕訳・財務諸表作成の実践経験あり',
        },
        {
          name: '日本公認会計士協会ビジネスゲーム',
          level: 4,
          detail: '第3位',
          description: '会計・財務の実践的なスキルを競う大会で優秀な成績を収めました。',
        },
        {
          name: '日本漢字能力検定2級',
          level: 3,
          detail: '取得済み',
          description: '日本語能力の証明',
        },
      ],
    },
    {
      id: 'accounting',
      title: t.skills.accounting,
      skills: [
        {
          name: '日商簿記2級',
          level: 4,
          detail: '★★★★☆',
          description: '1年次夏に取得。仕訳・財務諸表作成の実践経験あり',
        },
        {
          name: '日本公認会計士試験',
          level: 3,
          detail: '★★★☆☆',
          description: '3年次5月まで学習。J-GAAP・監査、企業法、財務会計、管理会計を履修',
        },
        {
          name: 'USCPA',
          level: 2,
          detail: '学習中 ★★☆☆☆',
          description: 'FAR・REG科目を中心に学習進行中',
        },
        {
          name: '財務分析',
          level: 3,
          detail: '★★★☆☆',
          description: 'サークル予算策定・損益分岐点分析に適用',
        },
      ],
    },
    {
      id: 'it',
      title: t.skills.it,
      skills: [
        {
          name: '英語運用',
          level: 4,
          detail: '★★★★☆',
          description: '英語での会計学習・資料作成が可能',
        },
        {
          name: 'Excel (予算管理)',
          level: 4,
          detail: '★★★★☆',
          description: 'サークル予算管理、財務分析に活用',
        },
        {
          name: 'Google Workspace',
          level: 3,
          detail: '★★★☆☆',
          description: '文書作成、スプレッドシート、プレゼンテーション',
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