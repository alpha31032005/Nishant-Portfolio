import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05, type: "spring", stiffness: 100 }}
      whileHover={{ 
        scale: 1.05, 
        y: -8,
        transition: { duration: 0.2 }
      }}
      className="group relative"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
      
      {/* Card */}
      <div className="relative px-5 py-4 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 group-hover:border-transparent group-hover:shadow-xl group-hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-500/10 rounded-full blur-2xl"></div>
        </div>

        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

        {/* Content */}
        <div className="relative flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-shadow duration-300"
          >
            <Sparkles className="w-5 h-5 text-white" />
          </motion.div>
          <span className="text-base font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {skill.name}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
