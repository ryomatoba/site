import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const values = [
    {
      id: 'trabalho',
      icon: '💪',
      ...t.about.values.trabalho,
    },
    {
      id: 'lealdade',
      icon: '🤝',
      ...t.about.values.lealdade,
    },
    {
      id: 'respeito',
      icon: '🌍',
      ...t.about.values.respeito,
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {t.about.description}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-400">メンバー</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">6ヶ月</div>
                <div className="text-gray-400">黒字化</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2級</div>
                <div className="text-gray-400">簿記検定</div>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-text mb-8">
              {t.about.values.title}
            </h3>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover:bg-gray-700 transition-colors duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{value.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-text mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-300">
                        {value.description}
                      </p>
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

export default AboutSection; 