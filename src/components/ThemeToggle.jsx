import { useTheme } from '../ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-secondary transition-colors text-primary"
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
    >
      {theme === 'dark' ? (
        <FiSun className="text-xl" />
      ) : (
        <FiMoon className="text-xl" />
      )}
    </motion.button>
  )
}

export default ThemeToggle