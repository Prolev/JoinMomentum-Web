import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lock, Shield, Target, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-black text-white pt-24">
      <MissionStatement />
      <Leadership />
      <CoreValues />
      <Approach />
    </div>
  );
};

const MissionStatement = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #dc2626 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <span className="text-6xl text-red-600 font-bold">"</span>
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            To provide precision strategic counsel and operational expertise that enables defence
            and security organizations to anticipate threats, strengthen capabilities, and achieve
            mission success in complex environments.
          </motion.h1>
          <span className="text-6xl text-red-600 font-bold">"</span>
        </motion.div>

        <motion.p
          className="text-xl text-neutral-400 mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Our mission drives every engagement, every analysis, every recommendation.
        </motion.p>
      </div>
    </section>
  );
};

const Leadership = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-32 px-6 bg-[#0a0a0a]">
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
          <h2 className="text-4xl font-bold tracking-tight">LEADERSHIP</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#0f0f0f] border border-neutral-800 p-12 relative overflow-hidden group"
        >
          <div className="absolute top-8 right-8">
            <motion.div
              animate={{ rotate: [0, 60, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Lock className="w-12 h-12 text-red-600 opacity-30" strokeWidth={1} />
            </motion.div>
          </div>

          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold mb-6 tracking-tight text-neutral-200">
              Discretion in Leadership
            </h3>
            <p className="text-lg text-neutral-400 leading-relaxed mb-6">
              In alignment with operational security protocols and the sensitive nature of our work,
              detailed leadership profiles are shared upon engagement and following appropriate
              security vetting procedures.
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed">
              Our team comprises former senior military officers, intelligence professionals, policy
              advisors, and security specialists with extensive operational experience across defence,
              intelligence, and government sectors.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute bottom-6 right-8 text-sm text-neutral-600 font-mono"
          >
            CLASSIFICATION: RESTRICTED
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-neutral-500 text-sm mt-6 font-mono"
        >
          → Information provided in appropriate contexts
        </motion.p>
      </div>
    </section>
  );
};

const CoreValues = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Unwavering commitment to ethical conduct, transparency, and accountability in all operations.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Rigorous analysis, meticulous planning, and exact execution in every engagement.'
    },
    {
      icon: Lock,
      title: 'Discretion',
      description: 'Absolute confidentiality and operational security in handling sensitive information.'
    },
    {
      icon: Globe,
      title: 'Excellence',
      description: 'Uncompromising standards in research, analysis, and strategic advisory services.'
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
          <h2 className="text-4xl font-bold tracking-tight">CORE VALUES</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="bg-[#0f0f0f] p-8 border border-neutral-800 hover:border-red-600 transition-all duration-400 group"
            >
              <motion.div
                whileHover={{ rotate: 60 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <value.icon className="w-12 h-12 text-red-600 opacity-60 group-hover:opacity-100 transition-opacity" strokeWidth={1} />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{value.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Approach = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-32 px-6 bg-[#0a0a0a]">
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
          <h2 className="text-4xl font-bold tracking-tight">OUR APPROACH</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 tracking-tight">Strategic Depth</h3>
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              We combine rigorous analytical frameworks with operational experience to deliver insights
              that bridge policy intent and field reality.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Our strategic assessments account for political, military, economic, social, infrastructure,
              and information dimensions of complex security environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 tracking-tight">Operational Pragmatism</h3>
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              Recommendations are developed with acute awareness of resource constraints, institutional
              dynamics, and implementation realities.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              We prioritize actionable solutions that can be effectively executed within existing
              organizational structures and capability frameworks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-6 tracking-tight">Collaborative Partnership</h3>
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              We work as embedded advisors, not external consultants, building relationships based
              on trust, transparency, and shared commitment to mission success.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Knowledge transfer and capability building are integrated into every engagement,
              ensuring sustainable impact beyond our direct involvement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h3 className="text-2xl font-bold mb-6 tracking-tight">Absolute Discretion</h3>
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              We maintain the highest standards of operational security, handling all client
              information in accordance with appropriate classification protocols.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Our work is never publicized without explicit client authorization, and sensitive
              information is protected through rigorous security procedures.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
