import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Send, Check, Lock, Mail, MapPin, Shield } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-black text-white pt-24">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </div>
  );
};

const ContactHero = () => {
  return (
    <section className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            INITIATE <span className="text-red-600">CONTACT</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl">
            For inquiries regarding strategic advisory, operational support, or partnership
            opportunities, please use the secure contact form below. All communications are
            handled with appropriate confidentiality protocols.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formState, setFormState] = useState({
    name: '',
    organization: '',
    email: '',
    classification: 'unclassified',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: '',
        organization: '',
        email: '',
        classification: 'unclassified',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-[#0a0a0a] border border-neutral-800 p-12 relative overflow-hidden"
        >
          <div className="absolute top-6 right-6 flex items-center gap-2 text-neutral-600 text-xs font-mono">
            <Lock className="w-4 h-4" />
            <span>SECURE CHANNEL</span>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8 mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-xs font-mono font-bold tracking-wider text-neutral-400">
                    NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-neutral-800 focus:border-red-600 py-3 text-white outline-none transition-colors duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono font-bold tracking-wider text-neutral-400">
                    ORGANIZATION
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formState.organization}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-neutral-800 focus:border-red-600 py-3 text-white outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-xs font-mono font-bold tracking-wider text-neutral-400">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-neutral-800 focus:border-red-600 py-3 text-white outline-none transition-colors duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono font-bold tracking-wider text-neutral-400">
                    CLASSIFICATION LEVEL
                  </label>
                  <select
                    name="classification"
                    value={formState.classification}
                    onChange={handleChange}
                    className="w-full bg-[#0f0f0f] border-b-2 border-neutral-800 focus:border-red-600 py-3 text-white outline-none transition-colors duration-300"
                  >
                    <option value="unclassified">UNCLASSIFIED</option>
                    <option value="sensitive">SENSITIVE</option>
                    <option value="classified">CLASSIFIED (Follow-up Required)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold tracking-wider text-neutral-400">
                  SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-neutral-800 focus:border-red-600 py-3 text-white outline-none transition-colors duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold tracking-wider text-neutral-400">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-[#0f0f0f] border border-neutral-800 focus:border-red-600 p-4 text-white font-mono text-sm outline-none transition-colors duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 tracking-wider overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Shield className="w-5 h-5" />
                    </motion.div>
                    SECURING TRANSMISSION...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-3">
                    <Send className="w-5 h-5" />
                    INITIATE CONTACT
                  </span>
                )}

                {isSubmitting && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-white origin-left"
                  />
                )}
              </motion.button>

              <p className="text-xs text-neutral-600 text-center font-mono">
                All communications handled in accordance with{' '}
                <a href="/security" className="text-red-600 hover:underline">
                  Security Policy
                </a>
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-20 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Check className="w-10 h-10 text-white" strokeWidth={3} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3">MESSAGE SECURED</h3>
              <p className="text-neutral-400">
                Your communication has been received and encrypted. We will respond within 48 hours.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const ContactInfo = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'contact@joinmomentum.io',
      description: 'For general inquiries and initial contact'
    },
    {
      icon: Lock,
      title: 'Secure Communications',
      detail: 'PGP Key Available',
      description: 'For classified or sensitive communications'
    },
    {
      icon: MapPin,
      title: 'Location',
      detail: 'Ottawa, Canada',
      description: 'Strategic positioning near government centers'
    }
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="bg-black border border-neutral-800 p-8 hover:border-red-600 transition-colors duration-300"
            >
              <method.icon className="w-10 h-10 text-red-600 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-2 tracking-tight">{method.title}</h3>
              <p className="text-white font-mono text-sm mb-3">{method.detail}</p>
              <p className="text-neutral-500 text-sm">{method.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-600 text-sm font-mono">
            → Response time: Within 48 hours for standard inquiries
          </p>
          <p className="text-neutral-600 text-sm font-mono mt-2">
            → Urgent matters: Contact through secure channels with appropriate classification
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
