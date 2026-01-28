import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SkillCard from '../components/SkillBar';
import { skills } from '../data/portfolioData';
import { Code2, Database, Brain, BarChart3 } from 'lucide-react';

const Skills = () => {
  const categoryIcons = {
    "Machine Learning & AI": Brain,
    "Programming Languages": Code2,
    "Data Analytics & Visualization": BarChart3,
    "Web Development": Database,
  };

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

      <div className="grid lg:grid-cols-2 gap-10">
        {Object.entries(skills).map(([category, categorySkills], categoryIndex) => {
          const IconComponent = categoryIcons[category] || Code2;
          
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group relative"
            >
              {/* Category Card Container */}
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

                {/* Category Header */}
                <div className="relative flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-shadow duration-300"
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="relative grid gap-3">
                  {categorySkills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Additional Skills Cloud */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16"
      >
        <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Tools & Frameworks
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            'Python', 'FastAPI', 'Flask', 'MySQL', 'Excel', 'JavaScript', 
            'Node.js', 'MongoDB', 'TensorFlow', 'Scikit-learn', 'Pandas', 
            'NumPy', 'Git & GitHub', 'Power BI', 'Matplotlib', 'Keras'
          ].map((tool, index) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03, type: "spring" }}
              whileHover={{ scale: 1.15, y: -8, rotate: [0, -5, 5, 0] }}
            >
              <div className="px-5 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800 text-gray-800 dark:text-gray-200 rounded-xl font-semibold hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 cursor-default shadow-md hover:shadow-xl">
                {tool}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;
