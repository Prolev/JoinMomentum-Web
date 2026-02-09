import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Network, Users, FileSearch, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <WhoWeAre />
      <CoreCapabilities />
      <HowWeWork />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HexagonalBackground />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Strategic Defence
            <br />
            <span className="text-red-600">& Security Intelligence</span>
          </motion.h1>

          <motion.p
            className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            Government-grade consulting for defence, security, and intelligence operations
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 border border-red-600 text-red-600 font-semibold tracking-wide overflow-hidden transition-all duration-400 hover:text-white"
            >
              <span className="relative z-10">INITIATE CONTACT</span>
              <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
              <motion.div
                className="absolute inset-0 bg-red-600"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                style={{ originX: 0 }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neutral-600 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-red-600 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

const HexagonalBackground = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexagons" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
            <polygon
              points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
};

const WhoWeAre = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-32 px-6 bg-[#0a0a0a] relative">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-12"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[1px] w-16 bg-red-600 origin-left"
          />
          <h2 className="text-4xl font-bold tracking-tight">WHO WE ARE</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
              Join Momentum Inc. is a boutique defence and security consulting firm specializing in
              strategic advisory, operational planning, and intelligence analysis for government agencies,
              defence organizations, and allied partners.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              We deliver precision-engineered solutions for complex security challenges, combining
              deep operational expertise with strategic foresight to support mission-critical objectives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
              Our approach is built on rigorous analysis, operational pragmatism, and absolute discretion.
              We operate at the intersection of policy, technology, and field operations, ensuring
              recommendations are both strategically sound and operationally viable.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Every engagement is tailored to the specific security environment, institutional context,
              and mission requirements of our clients.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CoreCapabilities = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const capabilities = [
    {
      icon: Shield,
      title: 'Defence & Security Strategy',
      description: 'Strategic planning, policy development, and operational frameworks for complex security environments.',
      link: '/capabilities'
    },
    {
      icon: Network,
      title: 'Intelligence & Analysis',
      description: 'Threat assessment, intelligence synthesis, and analytical support for informed decision-making.',
      link: '/capabilities'
    },
    {
      icon: Users,
      title: 'Capability Development',
      description: 'Organizational design, training programs, and capability enhancement for defence institutions.',
      link: '/capabilities'
    },
    {
      icon: FileSearch,
      title: 'Research & Advisory',
      description: 'In-depth research, policy analysis, and expert advisory services on defence and security matters.',
      link: '/capabilities'
    }
  ];

  return (
    <section ref={ref} className="py-32 px-6 bg-black">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[1px] w-16 bg-red-600 origin-left"
          />
          <h2 className="text-4xl font-bold tracking-tight">CORE CAPABILITY AREAS</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
            >
              <Link
                to={capability.link}
                className="group block relative bg-[#0f0f0f] p-8 border border-transparent hover:border-red-600 transition-all duration-400 hover:bg-[#1a1a1a]"
              >
                <div className="absolute top-4 right-4">
                  <motion.div
                    whileHover={{ rotate: 60 }}
                    transition={{ duration: 0.6 }}
                    className="w-8 h-8"
                  >
                    <capability.icon className="w-full h-full text-red-600 opacity-40 group-hover:opacity-100 transition-opacity" strokeWidth={1} />
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold mb-4 tracking-tight">{capability.title}</h3>
                <p className="text-neutral-400 leading-relaxed mb-4">{capability.description}</p>

                <div className="flex items-center gap-2 text-red-600 font-medium">
                  <span className="text-sm tracking-wide">LEARN MORE</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowWeWork = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const steps = [
    { number: '01', title: 'Engagement', description: 'Initial consultation and requirements analysis' },
    { number: '02', title: 'Assessment', description: 'Comprehensive situation and capability review' },
    { number: '03', title: 'Strategy', description: 'Development of tailored solutions and recommendations' },
    { number: '04', title: 'Implementation', description: 'Execution support and capability transfer' },
    { number: '05', title: 'Evolution', description: 'Ongoing support and strategic adaptation' }
  ];

  return (
    <section ref={ref} className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[1px] w-16 bg-red-600 origin-left"
          />
          <h2 className="text-4xl font-bold tracking-tight">HOW WE WORK</h2>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 2, delay: 0.3 }}
            className="absolute top-1/2 left-0 right-0 h-[1px] bg-red-600 origin-left -translate-y-1/2 hidden md:block"
          />

          <div className="grid md:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * index + 0.5 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 * index + 0.7 }}
                    className="w-16 h-16 rounded-full border-2 border-red-600 bg-black flex items-center justify-center mb-6 relative z-10"
                  >
                    <span className="text-red-600 font-bold text-lg">{step.number}</span>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
