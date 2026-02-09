import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ArrowRight, FileText } from 'lucide-react';

const Insights = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'STRATEGY', 'INTELLIGENCE', 'TECHNOLOGY', 'POLICY'];

  const articles = [
    {
      category: 'STRATEGY',
      title: 'Evolving Threat Landscapes in Multi-Domain Operations',
      excerpt: 'Analysis of emerging operational challenges in contested environments and implications for force structure planning.',
      date: '02.03.2026',
      readTime: '12 min'
    },
    {
      category: 'INTELLIGENCE',
      title: 'AI-Enhanced Intelligence Analysis: Opportunities and Risks',
      excerpt: 'Examining the integration of artificial intelligence in intelligence workflows and critical considerations for implementation.',
      date: '01.28.2026',
      readTime: '15 min'
    },
    {
      category: 'TECHNOLOGY',
      title: 'Securing Critical Infrastructure in Hybrid Warfare',
      excerpt: 'Strategic approaches to protecting essential systems against kinetic and non-kinetic threats in modern conflict.',
      date: '01.15.2026',
      readTime: '10 min'
    },
    {
      category: 'POLICY',
      title: 'Defence Procurement Reform: Lessons from Allied Nations',
      excerpt: 'Comparative analysis of procurement modernization initiatives and implications for capability development.',
      date: '01.08.2026',
      readTime: '18 min'
    },
    {
      category: 'STRATEGY',
      title: 'Strategic Competition in the Arctic: Security Implications',
      excerpt: 'Assessment of great power dynamics in Arctic regions and requirements for enhanced presence and capability.',
      date: '12.20.2025',
      readTime: '14 min'
    },
    {
      category: 'INTELLIGENCE',
      title: 'Open Source Intelligence in Modern Conflict',
      excerpt: 'The expanding role of OSINT in intelligence operations and integration with traditional collection methods.',
      date: '12.12.2025',
      readTime: '11 min'
    },
    {
      category: 'TECHNOLOGY',
      title: 'Quantum Computing and Cryptographic Security',
      excerpt: 'Implications of quantum advancement for communications security and requirements for post-quantum cryptography.',
      date: '12.05.2025',
      readTime: '16 min'
    },
    {
      category: 'POLICY',
      title: 'Interagency Coordination in National Security',
      excerpt: 'Examining structural challenges and best practices for effective whole-of-government approaches.',
      date: '11.28.2025',
      readTime: '13 min'
    }
  ];

  const filteredArticles = selectedCategory === 'ALL'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="bg-black text-white pt-24">
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              STRATEGIC INSIGHTS
            </h1>
            <p className="text-xl text-neutral-400 max-w-3xl">
              In-depth analysis on defence, security, and intelligence matters. Our insights draw
              on operational experience and rigorous research to inform strategic thinking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-mono text-sm font-medium tracking-wide transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-[#0f0f0f] text-neutral-400 border border-neutral-800 hover:border-red-600'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="py-12 px-6 bg-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group bg-[#0f0f0f] border-t-2 border-red-600 hover:border-t-4 transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold tracking-wider text-red-600">
                      {article.category}
                    </span>
                    <span className="text-xs font-mono text-neutral-600">
                      {article.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-red-600 transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-neutral-400 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-600 font-mono">
                      {article.readTime} read
                    </span>
                    <motion.button
                      className="flex items-center gap-2 text-red-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 5 }}
                    >
                      READ ANALYSIS
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-[2px] bg-red-600 origin-left"
                />
              </motion.article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <FileText className="w-16 h-16 text-neutral-700 mx-auto mb-4" strokeWidth={1} />
              <p className="text-neutral-500 text-lg">
                No articles found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Classified Research & Analysis
            </h2>
            <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
              Additional research and strategic assessments are available to authorized clients
              through secure channels following appropriate clearance procedures.
            </p>
            <div className="inline-flex items-center gap-3 text-neutral-600 font-mono text-sm">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              SECURE ACCESS REQUIRED
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
