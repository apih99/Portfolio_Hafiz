'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const projects = [
  {
    year: '2025',
    title: 'AI Reader Chrome Extension',
    madeAt: 'Personal Project',
    builtWith: ['JavaScript', 'Chrome Extension', 'OpenAI','Gemini'],
    link: 'https://github.com/apih99/AI-reader'
  },
  {
    year: '2025',
    title: 'Automated Issue Detection and Escalation System',
    madeAt: 'Personal Project',
    builtWith: ['Python', 'Elasticsearch', 'Slack','Jira'],
    link: 'https://github.com/apih99/automated-issue-detection'
  },
  {
    year: '2025',
    title: 'Weather Data ETL Pipeline with Real-time Dashboard',
    madeAt: 'Personal Project',
    builtWith: ['Python', 'PostgreSQL', 'OpenWeatherMap','Streamlit'],
    link: 'https://github.com/apih99/weather-dashboard'
  },
  {
    year: '2025',
    title: 'Fundraising Website',
    madeAt: 'UPNM   ',
    builtWith: ['Next.js', 'TypeScript', 'Tailwind CSS','ToyyibPay'],
    link: 'https://payung-impian.vercel.app'
  },
  {
    year: '2025',
    title: 'PDF Editor Website',
    madeAt: 'Personal Project',
    builtWith: ['Python', 'Flask', 'Nginx', 'Linux'],
    link: 'https://github.com/apih99/pdf-editor'
  },
  {
    year: '2025',
    title: 'URL Shortener',
    madeAt: 'Personal Project',
    builtWith: ["Ruby", "Rails", "RESTful API", "Railway"],
    link: 'https://github.com/apih99/urlShortenerRuby'
  },
  {
    year: '2025',
    title: 'Music Recommender Telegram Bot',
    madeAt: 'Personal Project',
    builtWith: ['Python', 'Spotify API', 'Telegram Bot', 'EC2','AWS'],
    link: 'https://github.com/apih99/musicRecommenderBot'
  },
  {
    year: '2025',
    title: 'Spotify Web Client',
    madeAt: 'Personal Project',
    builtWith: ["React", "HTML", "CSS", "Spotify API","JavaScript"],
    link: 'https://github.com/apih99/spotify-client-ruby'
  },
  {
    year: '2024',
    title: 'F1 Analytics Dashboard',
    madeAt: 'UPNM',
    builtWith: ['Python', 'Pandas', 'Plotly', 'Machine Learning','Streamlit'],
    link: 'https://formula1datadashboard.streamlit.app/'
  },
  {
    year: '2024',
    title: 'Medical Inventory Prediction',
    madeAt: 'UPNM',
    builtWith: ['Python', 'Scikit-learn', 'TensorFlow', 'Statistical Analysis','Streamlit'],
    link: 'https://med-forecasting.streamlit.app/'
  },
  {
    year: '2024',
    title: 'University e-voting System',
    madeAt: 'Personal Project',
    builtWith: ['Python', 'Django', 'Dotenv'],
    link: 'https://github.com/apih99/university_e-voting_system'
  },
  {
    year: '2024',
    title: 'Heart Disease Prediction',
    madeAt: 'Personal Project',
    builtWith: ['Python', 'Scikit-learn', 'TensorFlow', 'Statistical Analysis','Seaborn'],
    link: 'https://github.com/apih99/HeartDiseasePrediction'
  },
  {
    year: '2023',
    title: 'Face Recognition Attendance System',
    madeAt: 'UPNM',
    builtWith: ['Python', 'OpenCV', 'Face Recognition', 'MySQL','FastAPI'],
    link: 'https://github.com/apih99/Face_Recognition_Attendance'
  },
  {
    year: '2023',
    title: 'Traffic Congestion Analysis',
    madeAt: 'UPNM',
    builtWith: ['Tensorflow', 'Python', 'Gradio', 'Data Analysis','Huggingface'],
    link: 'https://huggingface.co/spaces/apih99/AI_Traffic_Predictor'
  }
  
]

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-[#0a192f] text-white p-16 md:p-24">
      <div className="max-w-6xl mx-auto">
        <nav className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#a1a1aa] hover:text-red-500 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Shahrul Hafiz
          </Link>
        </nav>

        <header className="mb-16">
          <h1 className="text-5xl font-bold mb-4">All Projects</h1>
        </header>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="text-[#a1a1aa]">
                <th className="text-left py-4 pr-4 font-medium">Year</th>
                <th className="text-left py-4 pr-4 font-medium">Project</th>
                <th className="text-left py-4 pr-4 font-medium">Made at</th>
                <th className="text-left py-4 pr-4 font-medium">Built with</th>
                <th className="text-left py-4 pr-4 font-medium">Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, i) => (
                <tr 
                  key={i}
                  className="border-t border-[#a1a1aa]/10 text-white/80 hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 pr-4 font-mono">{project.year}</td>
                  <td className="py-4 pr-4 font-medium">{project.title}</td>
                  <td className="py-4 pr-4 text-[#a1a1aa]">{project.madeAt}</td>
                  <td className="py-4 pr-4">
                    <div className="flex flex-wrap gap-2">
                      {project.builtWith.map((tech, i) => (
                        <span 
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-red-500/20 text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a1a1aa] hover:text-red-500 transition-colors"
                    >
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
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 