import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 text-white">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
      
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1 - About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" style={{ fontFamily: 'Tangerine, cursive' }}>
              {personalInfo.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {personalInfo.role}
            </p>
            <p className="text-gray-500 text-xs">
              Building innovative AI/ML solutions for tomorrow's challenges.
            </p>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {['Home', 'About', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center space-x-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-150 transition-transform" />
                  <span>{item}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 3 - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-4 text-white">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors group">
                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-xs">{personalInfo.email}</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-xs">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <div className="p-2 bg-pink-500/10 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs">{personalInfo.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 mt-6">
              {personalInfo.social.github && (
                <motion.a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              )}
              {personalInfo.social.linkedin && (
                <motion.a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              )}
              {personalInfo.social.email && (
                <motion.a
                  href={`mailto:${personalInfo.social.email}`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="p-3 bg-gray-800 hover:bg-purple-600 rounded-lg transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm flex items-center space-x-2">
              <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
            </p>
            <p className="text-gray-500 text-sm flex items-center space-x-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>by Nishant</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
