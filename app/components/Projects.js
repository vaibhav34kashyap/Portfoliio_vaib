'use client'

import { ExternalLink, Github, Eye, X } from 'lucide-react'
import { useState } from 'react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Probill EHR & RCM',
      description: 'A comprehensive Electronic Health Record and Revenue Cycle Management system for healthcare providers with patient management, billing, and reporting features.',
      longDescription: 'Built a complete healthcare management system with patient records, billing automation, and compliance features. Implemented HIPAA-compliant data handling, HL7 FHIR integration, and comprehensive reporting dashboards for healthcare providers.',
      image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'HIPAA Compliance', 'HL7 FHIR', 'Healthcare APIs'],
      liveUrl: 'https://clinic.probillrcm.com',
      githubUrl: 'https://github.com/code-rowthtech/RCM-PRO-BILL-CLINIC.git'
    },
    {
      id: 2,
      title: 'Platypus Crypto Exchange',
      description: 'A secure cryptocurrency exchange platform with real-time trading, wallet management, and advanced charting capabilities.',
      longDescription: 'Developed a full-featured cryptocurrency exchange with real-time trading engine, secure wallet management, and advanced charting tools. Integrated blockchain APIs, WebSocket connections for live data, and implemented robust security measures.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'WebSockets', 'Blockchain', 'Web3', 'Express', 'Coingecko API'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Mozimo E-commerce',
      description: 'A delightful e-commerce platform for artisanal chocolate products with subscription services, gift options, and personalized recommendations.',
      longDescription: 'Created a premium e-commerce experience for chocolate products featuring subscription management, personalized recommendations, and gift services. Implemented Stripe payments, AWS hosting, and performance optimizations for enhanced user experience.',
      image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=600&h=400&fit=crop',
      tech: ['React', 'Redux', 'Stripe', 'NestJS', 'MongoDB', 'AWS', 'Site Performance'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'RowthTech Company Website',
      description: 'Corporate website for RowthTech showcasing services, portfolio, and company information with modern design and animations.',
      longDescription: 'Designed and developed the official RowthTech company website featuring service showcases, portfolio displays, and corporate information. Implemented modern UI/UX principles with smooth animations and responsive design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'SEO'],
      liveUrl: 'https://rowthtech.com/',
      githubUrl: 'https://github.com/code-rowthtech/rowthtech_react.git'
    },
    {
      id: 5,
      title: 'Almata CyberRisk',
      description: 'Cybersecurity risk assessment platform providing comprehensive security analysis and threat detection for enterprises.',
      longDescription: 'Developed a sophisticated cybersecurity platform for risk assessment and threat analysis. Features include vulnerability scanning, compliance reporting, and real-time security monitoring with advanced analytics dashboards.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'Security APIs', 'Analytics', 'Dashboard', 'MongoDB'],
      liveUrl: 'https://riskreport.almata.co.jp',
      githubUrl: ''
    },
    {
      id: 6,
      title: 'AccountPro Management',
      description: 'Comprehensive business management platform for accounting, invoicing, and financial reporting with automated workflows.',
      longDescription: 'Built a complete business management solution featuring accounting modules, automated invoicing, financial reporting, and workflow management. Integrated payment gateways and implemented role-based access control.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Payment APIs', 'PDF Generation'],
      liveUrl: 'https://accountpro.co.in',
      githubUrl: 'https://github.com/code-rowthtech/ACCOUNT-PRO-WEBSITE.git'
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
      title: 'FootonShoes E-commerce',
      description: 'Modern e-commerce platform for footwear with advanced filtering, size guides, and seamless shopping experience.',
      longDescription: 'Developed a comprehensive shoe e-commerce platform with advanced product filtering, interactive size guides, wishlist functionality, and streamlined checkout process. Implemented inventory management and order tracking.',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop',
      tech: ['React', 'Redux', 'E-commerce', 'Stripe', 'Product Catalog', 'Inventory Management'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 9,
      title: 'TaskManager Pro',
      description: 'Team productivity platform for project management, task tracking, and workflow automation with real-time collaboration.',
      longDescription: 'Built a comprehensive team management solution featuring project tracking, task assignment, progress monitoring, and team collaboration tools. Includes time tracking, reporting dashboards, and automated workflow management.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'WebSockets', 'Project Management', 'Real-time Collaboration', 'Analytics'],
      liveUrl: 'https://taskmanagerteam.rowthtech.com',
      githubUrl: 'https://github.com/negi1307/Task-Management.git'
    }
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
          {projects.map((project) => (
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
                  className="w-full h-64 object-cover rounded-t-xl"
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
