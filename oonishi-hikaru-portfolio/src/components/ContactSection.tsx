import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://formspree.io/f/mzzglypq', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        if (data.errors && data.errors.length > 0) {
          setError(`送信エラー: ${data.errors.map((e: { message: string }) => e.message).join(', ')}`);
        } else {
          setError('メッセージの送信に失敗しました。後でもう一度お試しください。');
        }
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('メッセージの送信中に予期せぬエラーが発生しました。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          CONTACT
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          お仕事のご依頼やご質問など、お気軽にご連絡ください。
        </motion.p>

        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <motion.div
              className="card text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <FiSend className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text">メッセージを送信しました</h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                お問い合わせありがとうございます。近日中にご返信いたします。
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-primary"
              >
                新しいメッセージを送る
              </button>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 border border-red-200">
                  {error}
                </div>
              )}

              <div className="mb-6">
                <label htmlFor="name" className="form-label flex items-center">
                  <FiUser className="mr-2 text-primary-600" />
                  <span>お名前 <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="お名前を入力してください"
                  className="form-input"
                  style={{ color: '#1f2937' }}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="form-label flex items-center">
                  <FiMail className="mr-2 text-primary-600" />
                  <span>メールアドレス <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="example@email.com"
                  className="form-input"
                  style={{ color: '#1f2937' }}
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="form-label flex items-center">
                  <FiMessageSquare className="mr-2 text-primary-600" />
                  <span>メッセージ <span className="text-red-500">*</span></span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="メッセージを入力してください"
                  className="form-input resize-none"
                  style={{ color: '#1f2937' }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center py-4"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    送信中...
                  </>
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    メッセージを送信
                  </>
                )}
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
} 