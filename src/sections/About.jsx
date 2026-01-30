import { motion } from 'framer-motion';
import { Code, Database, Brain, Award } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '5+' },
    { icon: Brain, label: 'ML Models Built', value: '4+' },
    { icon: Database, label: 'Technologies', value: '8+' },
    { icon: Award, label: 'Certifications', value: '5+' },
  ];

  return (
    <SectionWrapper id="about" className="bg-white dark:bg-gray-900">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent px-4"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
        />
      </div>

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4"
      >
        <div className="relative p-6 sm:p-8 md:p-12 rounded-2xl bg-white dark:bg-gray-800 shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300 overflow-hidden">
          {/* Side Accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 rounded-l-2xl"></div>
          
          {/* Bio Content */}
          <div className="space-y-4 sm:space-y-6 text-gray-700 dark:text-gray-300">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Nishant Nandkishor Bayaskar
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl leading-relaxed font-medium"
            >
              {personalInfo.bio}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg leading-relaxed"
            >
              I specialize in building intelligent systems using cutting-edge technologies like 
              TensorFlow, EDA, and scikit-learn. My expertise spans across Computer Vision, 
              Machine Learning, and Data Analytics.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg leading-relaxed"
            >
              Currently pursuing my B.E. in Computer Science & Engineering at SGBAU, I'm constantly 
              exploring new technologies and working on innovative projects that solve real-world problems.
            </motion.p>
          </div>

          {/* Expertise Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-2 sm:gap-3"
          >
            <span className="px-3 sm:px-5 py-1.5 sm:py-2.5 bg-blue-500/20 dark:bg-blue-500/30 text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm font-semibold border border-blue-500/30 dark:border-blue-500/50 hover:scale-105 transition-transform">
              Machine Learning
            </span>
            <span className="px-3 sm:px-5 py-1.5 sm:py-2.5 bg-purple-500/20 dark:bg-purple-500/30 text-purple-700 dark:text-purple-300 rounded-full text-xs sm:text-sm font-semibold border border-purple-500/30 dark:border-purple-500/50 hover:scale-105 transition-transform">
              Deep Learning
            </span>
            <span className="px-3 sm:px-5 py-1.5 sm:py-2.5 bg-pink-500/20 dark:bg-pink-500/30 text-pink-700 dark:text-pink-300 rounded-full text-xs sm:text-sm font-semibold border border-pink-500/30 dark:border-pink-500/50 hover:scale-105 transition-transform">
              Computer Vision
            </span>
            <span className="px-3 sm:px-5 py-1.5 sm:py-2.5 bg-green-500/20 dark:bg-green-500/30 text-green-700 dark:text-green-300 rounded-full text-xs sm:text-sm font-semibold border border-green-500/30 dark:border-green-500/50 hover:scale-105 transition-transform">
              EDA
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700 text-center hover:border-blue-500/50 transition-all duration-300"
            >
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-blue-600 dark:text-blue-400" />
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default About;
