import { motion } from 'framer-motion';
import { Hexagon, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ComingSoonProps {
  title: string;
  description: string;
}

const ComingSoon = ({ title, description }: ComingSoonProps) => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ rotate: [0, 60, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 mx-auto mb-8"
          >
            <Hexagon className="w-full h-full text-red-600" strokeWidth={1} />
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            {title}
          </h1>

          <p className="text-xl text-neutral-400 mb-8">
            {description}
          </p>

          <div className="inline-flex items-center gap-3 text-neutral-600 font-mono text-sm mb-12">
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-red-600 rounded-full"
            />
            CONTENT UNDER DEVELOPMENT
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-3 px-8 py-4 border border-red-600 text-red-600 font-semibold tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            RETURN TO HOME
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;
