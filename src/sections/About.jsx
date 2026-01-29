import { motion } from 'framer-motion';
import { Code, Database, Brain, Award } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '15+' },
    { icon: Brain, label: 'ML Models Built', value: '10+' },
    { icon: Database, label: 'Technologies', value: '20+' },
    { icon: Award, label: 'Certifications', value: '5+' },
  ];

  return (
    <SectionWrapper id="about" className="bg-white dark:bg-gray-900">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 rounded-3xl transform -rotate-6"></div>
            
            {/* Profile Image */}
            <div className="relative bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden aspect-square">
              <img src="/mypic.png" alt={personalInfo.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {personalInfo.role.split('|')[0].trim()}
          </h3>
          
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p className="leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="leading-relaxed">
              I specialize in building intelligent systems using cutting-edge technologies like 
              TensorFlow, EDA, and scikit-learn. My expertise spans across Computer Vision, 
              Natural Language Processing, and Data Analytics.
            </p>
            <p className="leading-relaxed">
              Currently pursuing my B.E. in Computer Science & Engineering at SGBAU, I'm constantly 
              exploring new technologies and working on innovative projects that solve real-world problems.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
              Machine Learning
            </span>
            <span className="px-4 py-2 bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
              Deep Learning
            </span>
            <span className="px-4 py-2 bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400 rounded-full text-sm font-medium">
              Computer Vision
            </span>
            <span className="px-4 py-2 bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
              EDA
            </span>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
              className="p-6 rounded-2xl bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700 text-center hover:border-blue-500/50 transition-all duration-300"
            >
              <Icon className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
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
