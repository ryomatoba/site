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
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t.about.title}
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t.about.description}
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-3 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold gradient-text mb-3">60名</div>
                <div className="text-text-muted font-medium">メンバー</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold gradient-text mb-3">初回</div>
                <div className="text-text-muted font-medium">利益創出</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold gradient-text mb-3">2級</div>
                <div className="text-text-muted font-medium">簿記検定</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
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
                  className="card hover:shadow-medium transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl flex-shrink-0">{value.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-text mb-3">
                        {value.title}
                      </h4>
                      <p className="text-text-muted leading-relaxed">
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