import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import InteractiveCard from '../3d/InteractiveCard'
import StaggerReveal from '../animations/StaggerReveal'
import ScrollReveal from '../ScrollReveal'

const projects = [
  {
    title: 'Home-Mate',
    desc: 'A web application that connects to different home services to users doorstep',
    img: '/images/homeMate.png',
    tags: ['React', 'Tailwind CSS', 'Node.js','Express','MongoDB'],
    github: '#',
    live: '#',
  },
  {
    title: 'FuelUp',
    desc: 'A web application that helps users to order fuel online and get it delivered to their doorstep',
    img: '/images/fuelup.png',
    tags: ['React', 'Tailwind CSS', 'Java','Spring Boot','MySQL'],
    github: '#',
    live: '#',
  },
  {
    title: 'CBS Wallet',
    desc: 'A digital wallet application for seamless transactions',
    img: '/images/cbs.png',
    tags: ['React', 'Tailwind CSS', 'java','Spring Boot','PostgreSQL'],
    github: '#',
    live: '#',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="bg-primary section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary text-center">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12 rounded-full" />
        </ScrollReveal>

        <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <InteractiveCard key={i} className="h-full">
              <div className="bg-secondary rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden group">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.github}
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub className="text-white text-xl" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiExternalLink className="text-white text-xl" />
                    </motion.a>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                  <p className="text-secondary text-sm mb-4 flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </InteractiveCard>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}

export default Projects