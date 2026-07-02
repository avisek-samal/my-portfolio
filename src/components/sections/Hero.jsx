import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiTwitter, FiArrowDown } from 'react-icons/fi'
import FloatingShapes from '../3d/FloatingShapes'
import InteractiveCard from '../3d/InteractiveCard'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary section-padding"
    >
      <FloatingShapes />
      
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 relative z-10">
        <InteractiveCard className="inline-block">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="mb-8"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
              <img
                src="/images/Avisek.png"
                alt="Avatar"
                className="w-full h-full rounded-full object-cover border-4 border-white dark:border-black"
              />
            </div>
          </motion.div>
        </InteractiveCard>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-primary"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent bg-300% animate-gradient">
            Avisek Samal
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-4xl font-light text-secondary mb-8"
        >
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'Java Developer',
              2000,
              'Open Source Contributor',
              2000,
              'Tech Enthusiast',
              2000,
            ]}
            repeat={Infinity}
            speed={50}
            deletionSpeed={50}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold shadow-lg hover:shadow-2xl transition-all hover:scale-105"
          >
            View My Work
          </a>
          
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 rounded-full border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all font-semibold"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-6 justify-center mt-12"
        >
          {[
            { icon: FiGithub, link: 'https://github.com/avisek-samal' },
            { icon: FiLinkedin, link: 'https://www.linkedin.com/in/avisek-samal' },
            { icon: FiTwitter, link: 'https://x.com/Abhiseksamal41l' },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-secondary hover:text-purple-500 transition-colors"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-secondary hover:text-purple-500 transition-colors"
          >
            <FiArrowDown className="text-2xl" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero