import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import Globe from "../3d/Globe";

const skills = [
  { name: "React", level: 90 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Node.js", level: 75 },
  { name: "Java", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "SpringBoot", level: 85 },
];

const About = () => {
  return (
    <section id="about" className="bg-secondary section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary text-center">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12 rounded-full" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal delay={0.2}>
              <p className="text-base sm:text-lg text-secondary leading-relaxed">
                I am a Software Developer with hands-on experience in Java,
                Spring Boot, React.js, JavaScript, SQL, and RESTful APIs. Having
                recently completed my Software Developer Traineeship at
                TetraTrion Technology, I have worked on developing scalable,
                user-centric applications while gaining practical exposure to
                full-stack development and modern software engineering
                practices. I have a strong foundation in object-oriented
                programming, data structures, database management, and backend
                development. I am passionate about building efficient,
                maintainable solutions, continuously expanding my technical
                expertise, and contributing to innovative, high-impact projects.
                I am currently seeking opportunities as a Java Developer,
                Backend Developer, or Full Stack Developer, where I can apply my
                skills, collaborate with talented teams, and grow as a software
                engineering professional.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "💻 Remote Work",
                  "🚀 Open Source",
                  "🎯 Java Developer",
                  "⚡ Fast Learner",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-primary border border-theme rounded-full text-sm text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <div className="mt-8 grid gap-4">
              {skills.map((skill, i) => (
                <ScrollReveal key={skill.name} delay={i * 0.1}>
                  <div>
                    <div className="flex justify-between text-sm text-primary mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="h-[400px]">
              <Globe />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
