import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const JicpaGameDetail = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const t = translations[language];

  // ページ遷移時にトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-200"
            >
              
            </motion.button>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-text mb-4">
            日本公認会計士協会ビジネスゲーム
          </h1>
          <p className="text-xl text-primary-600 font-semibold mb-2">
            参加者・ファイナンス分析担当
          </p>
          <p className="text-text-muted text-lg">
            2023年8月
          </p>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-8 shadow-medium"
        >
          <h2 className="text-2xl font-bold text-text mb-6">プロジェクト概要</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-text mb-4">概要</h3>
              <p className="text-text-muted leading-relaxed">
                日本公認会計士協会主催のビジネスゲームに参加し、企業の財務分析と戦略立案を担当しました。
                チーム内でファイナンス分析をリードし、投資判断とリスク管理の実践的なスキルを身につけました。
                この経験を通じて、実際のビジネス環境における財務分析の重要性と、チームワークの大切さを学びました。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text mb-4">主な役割</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 mt-1.5 text-lg">•</span>
                  <span className="text-text-muted">財務分析と投資判断の実施</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 mt-1.5 text-lg">•</span>
                  <span className="text-text-muted">リスク管理戦略の立案・実行</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 mt-1.5 text-lg">•</span>
                  <span className="text-text-muted">チーム内でのファイナンス分析リーダーシップ</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 mt-1.5 text-lg">•</span>
                  <span className="text-text-muted">プレゼンテーションと成果報告</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 mb-8 shadow-medium"
        >
          <h2 className="text-2xl font-bold text-text mb-6">主要な成果</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-primary-700 mb-3">財務分析による投資判断</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                企業の財務諸表を詳細に分析し、投資判断の根拠となる財務指標を算出。
                収益性、安全性、成長性の観点から総合的な評価を行いました。
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-primary-700 mb-3">リスク管理戦略の立案</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                投資リスクを定量的に評価し、適切なリスク管理戦略を立案。
                ポートフォリオ理論を活用した分散投資の提案を行いました。
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-primary-700 mb-3">チームリーダーシップ</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                チーム内でファイナンス分析をリードし、メンバーへの技術指導を実施。
                効果的なコミュニケーションにより、チーム全体の分析精度を向上させました。
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-primary-700 mb-3">実践的スキルの習得</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                実際のビジネス環境における財務分析の実践的なスキルを習得。
                理論と実践のギャップを理解し、実務に即した分析手法を身につけました。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Technical Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 mb-8 shadow-medium"
        >
          <h2 className="text-2xl font-bold text-text mb-6">技術・ツール</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text mb-2">財務分析ツール</h3>
              <p className="text-text-muted text-sm">
                専門的な財務分析ソフトウェアを使用し、効率的な分析を実施
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text mb-2">Excel (財務モデリング)</h3>
              <p className="text-text-muted text-sm">
                財務モデルの構築とシミュレーション分析を実施
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text mb-2">プレゼンテーション</h3>
              <p className="text-text-muted text-sm">
                分析結果の効果的なプレゼンテーションと成果報告
              </p>
            </div>
          </div>
        </motion.div>

        {/* Lessons Learned */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-2xl p-8 mb-8 shadow-medium"
        >
          <h2 className="text-2xl font-bold text-text mb-6">学んだこと・気づき</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-lg font-semibold text-text mb-2">実践的な財務分析の重要性</h3>
              <p className="text-text-muted leading-relaxed">
                理論的な知識だけでなく、実際のビジネス環境における財務分析の実践的なスキルが重要であることを実感しました。
                データの解釈や意思決定への活用方法について深く学ぶことができました。
              </p>
            </div>
            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-lg font-semibold text-text mb-2">チームワークとコミュニケーション</h3>
              <p className="text-text-muted leading-relaxed">
                複雑な財務分析において、チーム内での効果的なコミュニケーションが成功の鍵であることを学びました。
                専門知識の共有と協力により、より質の高い分析結果を得ることができました。
              </p>
            </div>
            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-lg font-semibold text-text mb-2">リスク管理の実践</h3>
              <p className="text-text-muted leading-relaxed">
                投資判断において、リスク管理が重要な要素であることを実践的に学びました。
                定量的なリスク評価と適切な管理戦略の立案が、持続可能な投資成果につながることを理解しました。
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="btn-primary text-lg px-8 py-4"
          >
            プロジェクト一覧に戻る
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default JicpaGameDetail; 