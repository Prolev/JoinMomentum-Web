import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hexagon } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/capabilities', label: 'CAPABILITIES' },
    { path: '/solutions', label: 'SOLUTIONS' },
    { path: '/who-we-serve', label: 'WHO WE SERVE' },
    { path: '/insights', label: 'INSIGHTS' },
    { path: '/security', label: 'SECURITY' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-neutral-800"
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 60 }}
            transition={{ duration: 0.6 }}
          >
            <Hexagon className="w-8 h-8 text-red-600" strokeWidth={1.5} />
          </motion.div>
          <span className="text-white font-bold text-xl tracking-tight">
            JOIN MOMENTUM INC
          </span>
        </Link>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-sm font-medium tracking-wide transition-colors duration-300 group"
              >
                <span
                  className={`${
                    isActive ? 'text-red-600' : 'text-neutral-400'
                  } group-hover:text-white transition-colors duration-300`}
                >
                  {link.label}
                </span>
                <motion.div
                  initial={false}
                  animate={{
                    scaleX: isActive ? 1 : 0,
                  }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-red-600 origin-center"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
