import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Lightning Effect - Diagonal Gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/10 to-transparent dark:from-blue-600/30 dark:via-purple-600/10 dark:to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-blue-500/20 dark:via-transparent dark:to-transparent blur-3xl" />
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="hidden lg:block absolute top-20 right-20 w-72 h-72 border-4 border-blue-500 rounded-full"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hidden lg:block absolute top-32 right-32 w-48 h-48 border-4 border-pink-500 rounded-full"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="hidden lg:block absolute top-40 right-20 w-20 h-20 bg-blue-500 rounded-full"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.08 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden lg:block absolute bottom-40 left-20 w-32 h-32 border-4 border-purple-500 rounded-full"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[100svh] py-12 sm:py-16 md:py-20">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ fontFamily: 'Allura, cursive' }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white">
                Hi,
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-2">
                <span className="text-gray-900 dark:text-white">I'm </span>
                <span className="text-red-500">{personalInfo.name.split(' ')[0]}</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-3"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                {personalInfo.role}
              </h3>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-red-500 to-transparent"></div>
                <span className="text-xs sm:text-sm md:text-base font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Fresh Graduate | Entry-Level Professional
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="font-semibold text-red-500">Based in {personalInfo.location}</span>
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a <span className="font-semibold">ML Engineer</span>, <span className="font-semibold">Data Scientist</span>, and <span className="font-semibold">Data Analyst</span>.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Passionate about building intelligent systems with cutting-edge AI/ML technologies. 
                Let's collaborate on innovative solutions!
              </p>
            </motion.div>

            {/* Social Links with Download CV */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center flex-wrap gap-3"
            >
              {personalInfo.social.github && (
                <motion.a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 sm:p-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full transition-all duration-300 shadow-md"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              )}
              {personalInfo.social.linkedin && (
                <motion.a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 sm:p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 shadow-md"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              )}
              {personalInfo.social.email && (
                <motion.a
                  href={`mailto:${personalInfo.social.email}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 sm:p-3 bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 text-white rounded-full transition-all duration-300 shadow-md"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              )}
              
              {/* Download CV Button */}
              <motion.a
                href={personalInfo.resume}
                download
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white text-sm sm:text-base font-bold rounded-full shadow-lg transition-all duration-300"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center order-first lg:order-last mt-8 lg:mt-0"
          >
            {/* Profile Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md aspect-square"
            >
              {/* Image Container with Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden">
                {/* Profile Image */}
                <img 
                  src="/myimg2.png" 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative border */}
              <div className="absolute -inset-2 sm:-inset-4 border-2 sm:border-4 border-gray-300 dark:border-gray-700 rounded-2xl sm:rounded-3xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Chat Button - Bottom Right */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => scrollToSection('contact')}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300"
        aria-label="Contact me"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </motion.button>
    </section>
  );
};

export default Hero;
