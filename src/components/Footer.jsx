import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-theme py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-secondary text-sm">
            © {new Date().getFullYear()} Avisek Samal. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            {[
              { icon: FiGithub, link: 'https://github.com/avisek-samal' },
              { icon: FiLinkedin, link: 'https://www.linkedin.com/in/avisek-samal' },
              { icon: FiTwitter, link: 'https://x.com/Abhiseksamal41l' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-purple-500 transition-colors"
              >
                <social.icon className="text-xl" />
              </a>
            ))}
          </div>
          
          <p className="text-secondary text-sm flex items-center gap-1">
            Made with <FiHeart className="text-red-500 animate-pulse" /> in React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer