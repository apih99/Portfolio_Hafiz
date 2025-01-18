'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Instagram, Mail, ExternalLink, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CursorSpotlight } from '@/components/cursor-spotlight'
import { useActiveSection } from '@/hooks/use-active-section'
import { cn } from "@/lib/utils"
import { useState } from 'react'
import Image from 'next/image'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const navItems = ['About', 'Experience', 'Projects', 'Contact']

export default function Portfolio() {
  const activeSection = useActiveSection()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-[#0a192f] text-white">
      <CursorSpotlight />
      {/* Navigation - Clean header on mobile, Fixed sidebar on desktop */}
      <nav className="relative md:fixed md:top-0 w-full md:w-[45%] md:h-screen">
        <motion.div 
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="px-8 pt-16 pb-8 md:p-0 md:h-full md:pl-32 md:pr-16 md:pt-24 flex flex-col md:justify-between"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-red-500 tracking-tight mb-2">Shahrul Hafiz</h2>
            <div className="flex gap-4 mb-8 md:hidden">
              {[Github, Linkedin, Instagram, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href={["https://github.com/apih99", "https://www.linkedin.com/in/shahrulhafiz03/", "https://www.instagram.com/apih_99/", "mailto:hafizcr716@gmail.com"][i]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a1a1aa] hover:text-red-500 transition-colors"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <div className="md:block">
              <p className="text-[#a1a1aa] text-base md:text-lg font-light mb-8 md:mb-16 leading-relaxed">
                I&apos;m a developer with a foot in both data science and web development. I enjoy the challenge of leveraging data for impactful solutions and creating user-friendly interfaces.
              </p>
              <nav className="space-y-5">
                {navItems.map((item) => {
                  const isActive = activeSection === item.toLowerCase()
                  return (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className={cn(
                        "group flex items-center gap-4 text-base text-[#a1a1aa] hover:text-red-500 transition-all",
                        isActive && "text-red-500"
                      )}
                    >
                      <span className={cn(
                        "h-px w-4 bg-[#a1a1aa] transition-all duration-300 group-hover:w-8 group-hover:bg-red-500",
                        isActive && "w-12 bg-red-500"
                      )} />
                      {item}
                    </a>
                  )
                })}
              </nav>
            </div>
          </div>
          <div className="hidden md:flex gap-5">
            {[Github, Linkedin, Instagram, Mail].map((Icon, i) => (
              <a
                key={i}
                href={["https://github.com/apih99", "https://www.linkedin.com/in/shahrulhafiz03/", "https://www.instagram.com/apih_99/", "mailto:hafizcr716@gmail.com"][i]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a1a1aa] hover:text-red-500 transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </nav>

      {/* Main Content */}
      <main className="md:ml-[45%] max-w-[1200px]">
        {/* About Section */}
        <motion.section
          initial="initial"
          id="about"
          animate="animate"
          variants={staggerChildren}
          className="px-8 md:px-16 pt-8 md:pt-24"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-4xl md:text-7xl font-bold mb-4"
          >
            Data <span className="text-red-500">Developer</span>
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-[#a1a1aa] text-base md:text-lg max-w-2xl leading-relaxed"
          >
            Hey there! 👋 I&apos;m a data science & web dev enthusiast currently studying at UPNM. I love building stuff that works well! 🚀 I&apos;m all about data, using tools like Scikit-learn, TensorFlow, and PyTorch to create cool models. 🧠 I&apos;ve built things like predictive tools for medical inventory, traffic flow predictors, F1 race dashboards 🏎️, and lots of web projects! 💻 My go-to languages are Python, R, Java, plus web basics like HTML, CSS, and JavaScript. I&apos;m always contributing to open-source projects 🧑‍💻. I&apos;ve earned some cool awards🏅, a scholarship 💰, coding badges 🏆, and even made the Dean&apos;s List! 🤓 I&apos;m constantly learning and looking for exciting projects to jump into! Let&apos;s build something awesome! ✨
          </motion.p>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="px-8 md:px-16 py-16 md:py-24"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-8 md:mb-12"
          >
            Experience
          </motion.h2>
          <div className="space-y-12">
            {[
              {
                title: "Data Science/Developer Intern (to be)",
                company: "Maybe your company?",
                period: "2025 — Present",
                description: "My resume says 'student,' but my heart says 'future intern'. I'm fluent in these technologies and even better at solving problems (and maybe making coffee). Ready when you are!",
                technologies: ["Python", "TensorFlow", "Scikit-learn", "SQL", "Power BI","NextJs","AWS","Git","Docker"]
              },
              {
                title: "Web Development Lead",
                company: "UPNM Volunteering Club",
                period: "2022 — 2025",
                description: "Contribute to the club as a web developer and programmer, creating and maintaining the online tools we use. This includes building and updating our website, which helps us connect with volunteers and manage our projects more effectively.",
                technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"]
              },
              {
                title: "Data Science Project",
                company: "Hobby Project",
                period: "2024",
                description: "Sometimes I just need to code something, y'know? So I just pick a random idea that catches my eye and get to work. This particular venture led to some fun analysis and visualization. It's how I keep my skills sharp (and my boredom at bay).",
                technologies: ["Python", "Pandas", "Plotly", "Machine Learning", "Web Scraping","Anything"]
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="relative pl-8 border-l border-red-500/20"
              >
                <div className="absolute w-2 h-2 bg-red-500 rounded-full -left-[5px] top-[14px]" />
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-medium text-white">{job.title}</h3>
                    <div className="text-[#a1a1aa] text-base">
                      <span>{job.company}</span>
                      <span className="mx-2">•</span>
                      <span className="font-mono">{job.period}</span>
                    </div>
                  </div>
                  <p className="text-[#a1a1aa] text-base leading-relaxed">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {job.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-none bg-red-500/20 text-white text-sm px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="px-8 md:px-16 py-16 md:py-24"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-8 md:mb-12"
          >
            Featured Projects
          </motion.h2>
          <div className="space-y-8 md:space-y-12">
            {[
              {
                title: "PDF Editor",
                description: "Okay, so I built a basic PDF compressor/merger. Why? Mostly to learn how to host a Flask app with Nginx on Linux. I use those tools a lot anyway. Website was easy (1 hour), hosting was a nightmare (11 hours ☠️).",
                link: "https://github.com/apih99/pdf-editor",
                image: "/pdfeditor.jpg",
                tags: ["Python", "Flask", "Nginx", "Linux"]
              },
              {
                title: "Fundraising Website",
                description: "Payung Impian is a web-based initiative aimed at raising RM175,000 to construct and furnish specialized classrooms for special education students. The project is a collaboration with Koperasi UPNM (KUPENA) to create conducive learning environments for special needs students.",
                link: "https://payung-impian.vercel.app",
                image: "/payungimpian.png",
                stars: 670,
                tags: ["Next.js", "Tailwind CSS", "Typescript", "Vercel","ToyyibPay"]
              },
              {
                title: "Music Recommender Telegram Bot",
                description: "A Telegram bot that recommends random songs based on user-selected genres using the Spotify API.",
                link: "https://github.com/apih99/musicRecommenderBot",
                image: "/musicrecommender.png",
                downloads: "100k+ Installs",
                tags: ["Python", "Spotify API", "Telegram Bot", "EC2","AWS"]
              },
              {
                title: "Medicine Cost Forecasting System",
                description: "A professional Streamlit application for analyzing and forecasting medicine costs in healthcare facilities.",
                link: "https://med-forecasting.streamlit.app/",
                image: "/medforecasting.png",
                stars: 7677,
                tags: ["Python", "Streamlit", "Pandas", "Sklearn","Matplotlib","Seaborn"]
              }
            ].map((project, index) => (
              <motion.div key={index} variants={fadeIn}>
                <div className="group p-4 md:p-8 flex flex-col md:flex-row gap-4 md:gap-6">
                  {project.image && (
                    <div className="relative w-full md:w-48 h-48 md:h-32 flex-shrink-0 group/image cursor-pointer">
          <Image
                        src={project.image}
                        alt={project.title}
                        onClick={() => setSelectedImage(project.image)}
                        className="w-full h-full object-cover object-center rounded-md transition-transform duration-300 group-hover/image:scale-105"
                        width={192}
                        height={128}
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="space-y-3 md:space-y-5">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-white">
                          <a 
                            href={project.link} 
          target="_blank"
          rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-red-500 transition-colors"
                          >
                            {project.title}
                            <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
                          </a>
                        </h3>
                        {project.stars && (
                          <span className="text-white/70 text-sm flex items-center gap-1">
                            ★ {project.stars}
                          </span>
                        )}
                        {project.downloads && (
                          <span className="text-white/70 text-sm">
                            ↓ {project.downloads}
                          </span>
                        )}
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {project.tags.map((tech) => (
                          <span 
                            key={tech} 
                            className="text-white text-xs px-3 py-1 rounded-full bg-red-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12">
            <a 
              href="/archive" 
              className="inline-flex items-center gap-2 text-white hover:text-red-500 transition-colors"
            >
              View Full Project Archive
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-70 group-hover:opacity-100"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="px-8 md:px-16 py-16 md:py-24 min-h-[70vh]"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-4xl font-bold mb-8"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            variants={fadeIn}
            className="max-w-2xl"
          >
            <p className="text-[#a1a1aa] text-lg mb-8 leading-relaxed">
              I&apos;m always open to new projects, opportunities, and the occasional existential crisis. If you think I can help, or just want to witness my coding genius (or maybe just average skills), drop me a line. Don&apos;t worry, I don&apos;t bite... much.
            </p>
            <a 
              href="mailto:hafizcr716@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
              <Button 
                size="lg" 
                className="bg-red-500 hover:bg-red-600 text-white border-none text-base font-medium"
              >
                Say Hello
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </motion.section>
      </main>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-7xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
          <Image
                src={selectedImage}
                alt="Full size"
                className="w-full h-auto rounded-lg shadow-2xl"
                width={1024}
                height={768}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}