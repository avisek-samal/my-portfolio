import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../ScrollReveal'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="bg-secondary section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary text-center">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12 rounded-full" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Let's Connect</h3>
              <p className="text-secondary mb-8">
                I'm always interested in hearing about new projects, opportunities, or just having a chat.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: FiMail, text: 'aviseksamal17@gmail.com', label: 'Email' },
                  { icon: FiPhone, text: '+91 9337997154', label: 'Phone' },
                  { icon: FiMapPin, text: 'Bhubaneswar, Odisha', label: 'Location' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="p-3 bg-primary rounded-lg">
                      <item.icon className="text-purple-500 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary">{item.label}</p>
                      <p className="text-primary font-medium">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-6 bg-primary p-6 sm:p-8 rounded-2xl shadow-xl"
            >
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="name"
                  className="w-full px-4 py-3 bg-secondary border border-theme rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-primary transition"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 bg-secondary border border-theme rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-primary transition"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Your Message</label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-secondary border border-theme rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-primary transition resize-none"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-2xl transition-all"
              >
                Send Message
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-center font-medium"
                >
                  ✅ Message sent successfully!
                </motion.p>
              )}
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default Contact