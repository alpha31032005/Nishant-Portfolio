import { motion } from 'framer-motion';

const Timeline = ({ items, type = 'education' }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className={`relative mb-12 ${
            index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2'
          }`}
        >
          {/* Timeline Dot */}
          <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 border-4 border-white dark:border-gray-900 z-10"></div>

          {/* Content Card */}
          <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
            <div className="p-6 rounded-2xl bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              {/* Duration Badge */}
              <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full">
                {item.duration}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {type === 'education' ? item.degree : item.title}
              </h3>

              {/* Institution/Company */}
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                {type === 'education' ? item.institution : item.company}
              </p>

              {/* Location */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {item.location}
              </p>

              {/* Score/Type */}
              {item.score && (
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Score: {item.score}
                </p>
              )}
              {item.type && (
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-3">
                  {item.type}
                </p>
              )}

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {item.description}
              </p>

              {/* Highlights/Responsibilities */}
              {(item.highlights || item.responsibilities) && (
                <ul className="space-y-2">
                  {(item.highlights || item.responsibilities).map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="mr-2 text-blue-500">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Technologies */}
              {item.technologies && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
