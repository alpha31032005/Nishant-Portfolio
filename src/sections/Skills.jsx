import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SkillBar from '../components/SkillBar';
import { skills } from '../data/portfolioData';

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="bg-white dark:bg-gray-900">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Technologies and tools I work with to bring ideas to life.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="p-8 rounded-2xl bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700 hover:border-blue-500/50 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-3"></span>
              {category}
            </h3>
            <div className="space-y-4">
              {categorySkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills Cloud */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Tools & Frameworks
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            'Python', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'TensorFlow',
            'PyTorch', 'OpenCV', 'Scikit-learn', 'Pandas', 'NumPy', 'Git',
            'Docker', 'Linux', 'Power BI', 'Matplotlib', 'Express.js', 'Tailwind CSS'
          ].map((tool, index) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/30 dark:border-blue-500/50 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-blue-500 transition-all duration-300 cursor-default"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;
