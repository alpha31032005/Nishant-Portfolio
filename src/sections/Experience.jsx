import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import Timeline from '../components/Timeline';
import { experience, certifications, achievements } from '../data/portfolioData';

const Experience = () => {
  return (
    <SectionWrapper id="experience" className="bg-white dark:bg-gray-900">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Experience & Achievements
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
          Professional experience, certifications, and notable achievements.
        </motion.p>
      </div>

      {/* Experience Timeline */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Work Experience
        </h3>
        <Timeline items={experience} type="experience" />
      </div>

      {/* Certifications Grid */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Certifications
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg">
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                    <span>{cert.date}</span>
                    {cert.credential && <span>ID: {cert.credential}</span>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Key Achievements
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/30 dark:border-blue-500/50 hover:border-blue-500 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                {achievement.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {achievement.description}
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400">
                {achievement.date}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
