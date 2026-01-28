import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';

const Timeline = ({ items, type = 'education' }) => {
  const getIcon = (itemType) => {
    if (type === 'education') return <GraduationCap className="w-5 h-5" />;
    return <Briefcase className="w-5 h-5" />;
  };

  return (
    <div className="relative py-8">
      {/* Animated Timeline Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 overflow-hidden">
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 origin-top"
        />
      </div>

      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className={`relative mb-16 last:mb-0 ${
            index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
          }`}
        >
          {/* Animated Timeline Node */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
            className="absolute left-8 md:left-1/2 w-12 h-12 transform -translate-x-1/2 z-20"
          >
            <motion.div 
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/30 ring-4 ring-white dark:ring-gray-900"
            >
              {getIcon(type)}
            </motion.div>
          </motion.div>

          {/* Content Card */}
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}
          >
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              {/* Map Background Pattern */}
              <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-[0.06] dark:group-hover:opacity-[0.08] transition-opacity duration-500">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`map-pattern-${index}`} x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                      {/* Contour/Topographic Lines */}
                      <path d="M0,20 Q25,15 50,20 T100,20" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3"/>
                      <path d="M0,40 Q25,35 50,40 T100,40" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4"/>
                      <path d="M0,60 Q25,58 50,60 T100,60" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3"/>
                      <path d="M0,80 Q25,78 50,80 T100,80" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.2"/>
                      {/* Grid Lines */}
                      <line x1="0" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.3" opacity="0.2"/>
                      <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.3" opacity="0.2"/>
                      <line x1="0" y1="0" x2="100" y2="0" stroke="currentColor" strokeWidth="0.3" opacity="0.2"/>
                      <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.3" opacity="0.2"/>
                      {/* Compass Points */}
                      <circle cx="20" cy="30" r="1.5" fill="currentColor" opacity="0.3"/>
                      <circle cx="75" cy="65" r="1" fill="currentColor" opacity="0.25"/>
                      <circle cx="40" cy="80" r="0.8" fill="currentColor" opacity="0.2"/>
                      {/* Route Markers */}
                      <path d="M30,25 L35,30 M35,30 L40,28" stroke="currentColor" strokeWidth="0.8" opacity="0.25" strokeDasharray="2,2"/>
                      <path d="M60,55 L65,60 M65,60 L70,58" stroke="currentColor" strokeWidth="0.8" opacity="0.25" strokeDasharray="2,2"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#map-pattern-${index})`} className="text-gray-900 dark:text-gray-100"/>
                </svg>
              </div>

              {/* Animated Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Journey Path Animation on Hover */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                initial={{ pathLength: 0 }}
              >
                <svg width="100%" height="100%" className="absolute inset-0">
                  <motion.path
                    d="M10,10 Q50,50 90,10 T170,10"
                    stroke="url(#pathGradient)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileHover={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <defs>
                    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#A855F7" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
              
              {/* Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

              <div className="relative p-6 md:p-8">
                {/* Header Section */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span className="px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg">
                      {item.duration}
                    </span>
                  </div>
                  {item.type && (
                    <span className="px-3 py-1.5 text-xs font-semibold bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
                      {item.type}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-3 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {type === 'education' ? item.degree : item.title}
                </h3>

                {/* Institution/Company */}
                <div className="flex items-center gap-2 mb-2">
                  {type === 'education' ? 
                    <GraduationCap className="w-4 h-4 text-blue-500" /> : 
                    <Briefcase className="w-4 h-4 text-purple-500" />
                  }
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                    {type === 'education' ? item.institution : item.company}
                  </p>
                </div>

                {/* University (for education) */}
                {item.University && (
                  <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2 ml-6">
                    {item.University}
                  </p>
                )}

                {/* Location */}
                <div className="flex items-center gap-2 mb-4 ml-6">
                  <MapPin className="w-3.5 h-3.5 text-gray-500" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.location}
                  </p>
                </div>

                {/* Score */}
                {item.score && (
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="px-3 py-1 text-sm font-bold bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 text-yellow-700 dark:text-yellow-400 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      {item.score}
                    </span>
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Highlights/Responsibilities */}
                {(item.highlights || item.responsibilities) && (
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                        {type === 'education' ? 'Highlights' : 'Key Responsibilities'}
                      </h4>
                    </div>
                    <ul className="space-y-2.5">
                      {(item.highlights || item.responsibilities).map((point, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400 group/item"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0 group-hover/item:scale-150 transition-transform"></span>
                          <span className="flex-1">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {item.technologies && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-lg border border-purple-200 dark:border-purple-800 shadow-sm hover:shadow-md transition-all duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
