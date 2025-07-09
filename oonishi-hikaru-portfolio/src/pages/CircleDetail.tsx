import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const CircleDetail = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

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
            インカレイベントサークル
          </h1>
          <p className="text-xl text-primary-600 font-semibold mb-2">
            副代表 兼 会計責任者
          </p>
          <p className="text-text-muted text-lg">
            2022年4月 – 2023年3月
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
                インカレサークルを立ち上げ、副代表として会計と運営を統括しました。
                財務健全化と60名規模への拡大を達成し、初回で利益創出を実現しました。
                組織運営と財務管理の実践的なスキルを身につけ、リーダーシップとマネジメント能力を向上させました。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text mb-4">主な役割</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 mt-1.5 text-lg">•</span>
                  <span className="text-text-muted">サークル立ち上げと組織運営</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 mt-1.5 text-lg">•</span>
                  <span className="text-text-muted">会計・財務管理の統括</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 mt-1.5 text-lg">•</span>
                  <span className="text-text-muted">メンバー募集と組織拡大</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 mt-1.5 text-lg">•</span>
                  <span className="text-text-muted">イベント企画・運営</span>
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
              <h3 className="text-lg font-semibold text-primary-700 mb-3">メンバー60名への拡大</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                効果的な募集戦略と魅力的な活動内容により、サークルメンバーを60名まで拡大。
                多様なバックグラウンドを持つ学生が参加する活気のある組織を構築しました。
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-primary-700 mb-3">初回での利益創出</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                適切な予算管理と収益化戦略により、初回のイベントで利益を創出。
                持続可能な運営基盤を確立し、今後の活動拡大への道筋を作りました。
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-primary-700 mb-3">財務健全化の実現</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                透明性の高い会計システムを構築し、財務の健全化を実現。
                適切な予算管理とコストコントロールにより、効率的な運営を実現しました。
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-primary-700 mb-3">会計・運営の統括</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                会計業務と組織運営を統括し、効率的な管理体制を構築。
                チーム内での役割分担と責任の明確化により、スムーズな運営を実現しました。
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
          <h2 className="text-2xl font-bold text-text mb-6">使用ツール・技術</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text mb-2">Excel (予算管理)</h3>
              <p className="text-text-muted text-sm">
                詳細な予算管理と財務分析を実施
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text mb-2">Google Workspace</h3>
              <p className="text-text-muted text-sm">
                チーム間の効率的なコミュニケーションと情報共有
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text mb-2">Canva (広報)</h3>
              <p className="text-text-muted text-sm">
                魅力的な広報素材の作成とブランディング
              </p>
            </div>
          </div>
        </motion.div>

        {/* Organization Structure */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-2xl p-8 mb-8 shadow-medium"
        >
          <h2 className="text-2xl font-bold text-text mb-6">組織構造・運営体制</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-text mb-4">組織構造</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-600">代表</h4>
                  <p className="text-text-muted text-sm">全体統括・戦略立案</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-600">副代表（私）</h4>
                  <p className="text-text-muted text-sm">会計・財務管理・運営統括</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-600">企画部</h4>
                  <p className="text-text-muted text-sm">イベント企画・運営</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-600">広報部</h4>
                  <p className="text-text-muted text-sm">SNS・広報活動</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text mb-4">運営プロセス</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-text">企画立案</h4>
                    <p className="text-text-muted text-sm">メンバーからのアイデア収集と企画の検討</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-text">予算策定</h4>
                    <p className="text-text-muted text-sm">収支計画の策定と財務リスクの評価</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-text">実行・運営</h4>
                    <p className="text-text-muted text-sm">チーム体制でのイベント実行</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-text">振り返り・改善</h4>
                    <p className="text-text-muted text-sm">成果の評価と次回への改善点の抽出</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Lessons Learned */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-white rounded-2xl p-8 mb-8 shadow-medium"
        >
          <h2 className="text-2xl font-bold text-text mb-6">学んだこと・気づき</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-lg font-semibold text-text mb-2">組織運営の重要性</h3>
              <p className="text-text-muted leading-relaxed">
                明確な役割分担と責任の所在を設定することが、組織の効率的な運営につながることを学びました。
                各メンバーの強みを活かした配置と、適切なコミュニケーション体制の構築が成功の鍵でした。
              </p>
            </div>
            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-lg font-semibold text-text mb-2">財務管理の実践</h3>
              <p className="text-text-muted leading-relaxed">
                透明性の高い会計システムと適切な予算管理が、組織の持続可能性を支えることを実感しました。
                収益化戦略とコストコントロールのバランスが重要であることを学びました。
              </p>
            </div>
            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-lg font-semibold text-text mb-2">リーダーシップとマネジメント</h3>
              <p className="text-text-muted leading-relaxed">
                チームメンバーのモチベーションを維持しながら、目標達成に向けて導くリーダーシップの重要性を学びました。
                効果的なフィードバックと成長支援が、組織全体のパフォーマンス向上につながることを理解しました。
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
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

export default CircleDetail; 