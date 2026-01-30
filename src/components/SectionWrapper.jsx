import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = '' }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4 }}
      className={`min-h-[50vh] md:min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;
