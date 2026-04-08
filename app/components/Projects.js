'use client'

import { ExternalLink, Github, Eye, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const projects = [
    {
      id: 1,
      title: 'Probill EHR & RCM',
      description: 'Designed and developed the complete UI for an Electronic Health Record and Revenue Cycle Management system, including patient dashboards, billing workflows, and reporting interfaces.',
      longDescription: 'Led the frontend development of a healthcare management platform, crafting responsive and accessible UI components for patient records, billing automation, and compliance workflows. Built interactive dashboards using Chart.js, integrated FullCalendar for scheduling, and used React-Bootstrap to deliver a clean, consistent design across all modules.',
      image: '/assets/images/Probill.png',
      tech: ['React', 'HTML5', 'CSS', 'Bootstrap', 'React-Bootstrap', 'React-icon', 'Animate.css', 'Chart.js', 'FullCalendar', 'React-Select', 'Animation'],
      liveUrl: 'https://probillrcm.com/',
      githubUrl: 'https://github.com/code-rowthtech/RCM_landing.git'
    },
    {
      id: 2,
      title: 'Diamante',
      description: 'A secure cryptocurrency exchange platform with real-time trading, wallet management, and advanced charting capabilities.',
      longDescription: 'Developed a full-featured cryptocurrency exchange with real-time trading engine, secure wallet management, and advanced charting tools. Integrated blockchain APIs, WebSocket connections for live data, and implemented robust security measures.',
      image: '/assets/images/diamante.png',
      tech: ['React', 'HTML5', 'CSS', 'Bootstrap', 'React-Bootstrap', 'React-icon', 'Animate.css', 'Chart.js', 'FullCalendar', 'React-Select', 'Animation'],
      liveUrl: 'https://tequilaredondeldiamante.com/',
      githubUrl: 'https://github.com/code-rowthtech/DIAMANTE.git'
    },
    {
      id: 3,
      title: 'Mozimo E-commerce',
      description: 'A delightful e-commerce platform for artisanal chocolate products with subscription services, gift options, and personalized recommendations.',
      longDescription: 'Created a premium e-commerce experience for chocolate products featuring subscription management, personalized recommendations, and gift services. Implemented Stripe payments, AWS hosting, and performance optimizations for enhanced user experience.',
      image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=600&h=400&fit=crop',
      tech: ['React', 'HTML5', 'CSS', 'Bootstrap', 'React-Bootstrap', 'React-icon', 'Animate.css', 'Chart.js', 'FullCalendar', 'React-Select', 'Animation'],
      liveUrl: 'https://www.mozimo.in/',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'RowthTech Company Website',
      description: 'Corporate website for RowthTech showcasing services, portfolio, and company information with modern design and animations.',
      longDescription: 'Designed and developed the official RowthTech company website featuring service showcases, portfolio displays, and corporate information. Implemented modern UI/UX principles with smooth animations and responsive design.',
      image: '/assets/images/rowthtech.png',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'SEO'],
      liveUrl: 'https://rowthtech.com/',
      githubUrl: 'https://github.com/code-rowthtech/rowthtech_react.git'
    },
    {
      id: 5,
      title: 'DonCruz Platinium',
      description: 'A premium luxury brand website for DonCruz Platinium showcasing exclusive collections, elegant product displays, and a refined experience for high-end clientele.',
      longDescription: 'Designed and developed a sophisticated luxury brand platform for DonCruz Platinium, featuring elegant UI, smooth animations, and premium product showcases. Built fully responsive layouts with a focus on visual storytelling, strong brand identity, and delivering a seamless high-end user experience.',
      image: '/assets/images/Don.png',
      tech: ['React', 'HTML5', 'CSS', 'Bootstrap', 'React-Bootstrap', 'React-icon', 'Animate.css', 'Chart.js', 'FullCalendar', 'React-Select', 'Animation'],
      liveUrl: 'https://doncruzplatinium.com/',
      githubUrl: 'https://github.com/code-rowthtech/DON_CRUZ.git'
    },
    {
      id: 6,
      title: 'RowthBMG - Business Management',
      description: 'A smart business management platform for streamlining operations, managing invoices, tracking finances, and automating day-to-day workflows for growing businesses.',
      longDescription: 'Designed and developed the UI for RowthBMG, a comprehensive business management solution featuring modules for accounting, invoicing, financial reporting, and workflow automation. Built clean, intuitive dashboards and responsive interfaces to help businesses manage their operations efficiently with role-based access and seamless user experience.',
      image: '/assets/images/Rowthbmg.png',
      tech: ['React', 'HTML5', 'CSS', 'Bootstrap', 'React-Bootstrap', 'React-icon', 'Animation'],
      liveUrl: 'https://rowthbmg.com',
      githubUrl: 'https://github.com/code-rowthtech/rowth_offshore.git'
    },
    {
      id: 7,
      title: 'BMG-BUYER Auction',
      description: 'Industrial machinery auction platform where users can bid on heavy equipment like trucks and construction machinery.',
      longDescription: 'Created a specialized auction platform for industrial machinery and heavy equipment. Features real-time bidding, equipment cataloging, bid management, and secure payment processing for high-value transactions.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      tech: ['React', 'WebSockets', 'Node.js', 'Real-time Bidding', 'Payment Gateway', 'MongoDB'],
      liveUrl: 'http://103.185.212.117:5005/bmg/home',
      githubUrl: 'https://github.com/code-rowthtech/BMG-AUCTION-BUYER.git'
    },
    {
      id: 8,
      title: 'Arc-Providers',
      description: 'Transcranial Magnetic Stimulation (TMS) offers numerous advantages over prescribed medications for treating mental health issues.',
      longDescription: "TMS is a safe, effective non-drug treatment for depression. It works by sending magnetic pulses to stimulate neurons in the brain's mood-regulating area. TMS is FDA-cleared and non-invasive.",
      image: '/assets/images/Arc.png',
      tech: ['React', 'HTML5', 'CSS', 'Bootstrap', 'React-Bootstrap', 'React-icon', 'Animation'],
      liveUrl: 'https://tms.arcproviders.com/',
      githubUrl: 'https://github.com/code-rowthtech/arc_web.git'
    },
    {
      id: 9,
      title: 'Endoorphin',
      description: 'Your ultimate platform for connecting with certified personal trainers and scheduling fitness sessions at your convenience.',
      longDescription: 'Your ultimate platform for connecting with certified personal trainers and scheduling fitness sessions at your convenience. Endoorphin offers a seamless experience to find, book, and manage your fitness journey with expert guidance and personalized training plans.',
      image: '/assets/images/Endoorphin.png',
      tech: ['React', 'HTML5', 'CSS', 'Bootstrap', 'React-Bootstrap', 'React-icon', 'Animation'],
      liveUrl: 'https://endoorphin.com/',
      githubUrl: 'https://github.com/code-rowthtech/endoorphin_web.git'
    },
    {
      id: 10,
      title: 'Legalup',
      description: 'Providing high-quality legal services to individuals, companies, and investors in Cyprus and internationally.',
      longDescription: 'E. Ioannou Charalampous LLC is a boutique law firm based in Limassol, operating in Cyprus and Greece, with professional activity extending to Athens. The firm advises individuals, businesses, and investors seeking clear and reliable legal guidance..',
      image: '/assets/images/Legalup.png',
      tech: ['React', 'HTML5', 'CSS', 'Bootstrap', 'React-Bootstrap', 'React-icon', 'Animation'],
      liveUrl: 'https://iclawfirmcy.info/',
      githubUrl: 'https://github.com/code-rowthtech/legal-tech-cyprus-website.git'
    },
    {
      id: 11,
      title: 'Event',
      description: 'A comprehensive event management platform for planning, organizing, and executing seamless events of all scales.',
      longDescription: 'Designed and developed a full-featured event management platform that enables organizers to plan, schedule, and manage events effortlessly. The platform includes features for venue management, guest registration, ticketing, agenda planning, and real-time updates — delivering a smooth and professional experience for both organizers and attendees.',
      image: '/assets/images/Event.png',
      tech: ['React', 'WebSockets', 'Node.js', 'Real-time Bidding', 'Payment Gateway', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 12,
      title: 'Legalup - Law Firm Website',
      description: 'Providing high-quality legal services to individuals, companies, and investors in Cyprus and internationally.',
      longDescription: 'E. Ioannou Charalampous LLC is a boutique law firm based in Limassol, operating in Cyprus and Greece, with professional activity extending to Athens. The firm advises individuals, businesses, and investors seeking clear and reliable legal guidance..',
      image: '/assets/images/Legaldash.png',
      tech: ['React', 'WebSockets', 'Node.js', 'Real-time Bidding', 'Payment Gateway', 'MongoDB'],

      liveUrl: '#',
      githubUrl: '#'
    },
  ]

  const selectedProjectData = projects.find(p => p.id === selectedProject)

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-dark-300 relative overflow-x-hidden">
      <div className="absolute inset-0 dark:hidden pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(16,185,129,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.07) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      <div className="absolute inset-0 hidden dark:block pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(156,163,175,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(156,163,175,0.15) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      <div className="container mx-auto px-4 sm:px-6">

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gray-900 dark:text-white">My </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in frontend development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showAll ? projects : projects.slice(0, 6)).map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-dark-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
                  >
                    <Eye size={16} />
                    View Details
                  </button>
                </div>
              </div>

              <div className="p-4 flex flex-col flex-1 bg-white dark:bg-dark-100">
                <h3 className="text-base font-bold mb-1.5 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 leading-relaxed flex-1">
                  {project.longDescription}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors text-xs"
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors text-xs"
                  >
                    <Github size={13} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold animate-bounce text-gray-400"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
              <ChevronDown size={18} className={`inline ml-2 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

        {/* Modal */}
        {selectedProject && selectedProjectData && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white dark:bg-dark-100 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProjectData.image}
                  alt={selectedProjectData.title}
                  className="w-full h-84 object-cover rounded-t-xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {selectedProjectData.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedProjectData.longDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProjectData.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={selectedProjectData.liveUrl}
                    className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={selectedProjectData.githubUrl}
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-200 transition-colors flex items-center gap-2"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
