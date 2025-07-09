import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
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
          description: '1年次夏に取得。仕訳・財務諸表作成の実践経験あり',
        },
        {
          name: '日本公認会計士協会ビジネスゲーム',
          description: '会計・財務の実践的なスキルを競う大会で優秀な成績を収めました。',
        },
        {
          name: '日本漢字能力検定2級',
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
          description: '1年次夏に取得。仕訳・財務諸表作成の実践経験あり',
        },
        {
          name: '日本公認会計士試験',
          description: '3年次5月まで学習。J-GAAP・監査、企業法、財務会計、管理会計を履修',
        },
        {
          name: 'USCPA',
          description: 'FAR・REG科目を中心に学習進行中',
        },
        {
          name: '財務分析',
          description: 'サークル予算策定・損益分岐点分析に適用',
        },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t.skills.title}
        </motion.h2>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-text mb-10 text-center">
                {category.title}
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="card hover:shadow-medium transition-all duration-300 hover:scale-[1.02] group"
                  >
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-text mb-3 group-hover:text-primary-600 transition-colors duration-200">
                        {skill.name}
                      </h4>
                    </div>
                    
                    <p className="text-text-muted text-sm leading-relaxed">
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