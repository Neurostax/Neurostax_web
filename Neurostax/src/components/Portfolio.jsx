import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaRobot, FaGlobe, FaMicrochip, FaCodeBranch } from 'react-icons/fa';
import "./Portfolio.css"
import ScrollToTop from './ScrollToTop';

const ProjectsPage = () => {
  // Project categories
  const categories = [
    { id: 'ai-ml', name: 'AI & ML Projects', icon: <FaRobot /> },
    { id: 'web', name: 'Web Development Projects', icon: <FaGlobe /> },
    { id: 'iot', name: 'Embedded & IoT Projects', icon: <FaMicrochip /> },
    { id: 'open-source', name: 'Open-Source Contributions', icon: <FaCodeBranch /> }
  ];

  // Project data
  const projects = [
    {
      id: 1,
      title: 'Smart Chat Assistant',
      description: 'An AI-powered chatbot that understands context and provides intelligent responses using advanced NLP techniques.',
      technologies: ['Python', 'TensorFlow', 'NLTK', 'React'],
      category: 'ai-ml',
      demoUrl: '#',
      githubUrl: '#',
      media: [
        { type: 'image', url: 'https://via.placeholder.com/800x450?text=Chat+Assistant' },
        { type: 'video', url: 'https://www.youtube.com/embed/demo' }
      ],
      featured: true
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with product management, cart functionality, and secure payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      category: 'web',
      demoUrl: '#',
      githubUrl: '#',
      media: [
        { type: 'image', url: 'https://via.placeholder.com/800x450?text=E-Commerce' }
      ],
      featured: true
    },
    {
      id: 3,
      title: 'Smart Home Controller',
      description: 'IoT system for controlling home appliances with voice commands and mobile app integration.',
      technologies: ['ESP32', 'Arduino', 'React Native', 'MQTT'],
      category: 'iot',
      demoUrl: '#',
      githubUrl: '#',
      media: [
        { type: 'image', url: 'https://via.placeholder.com/800x450?text=Smart+Home' },
        { type: 'video', url: 'https://www.youtube.com/embed/demo' }
      ],
      featured: true
    },
    {
      id: 4,
      title: 'Computer Vision Library',
      description: 'Open-source library for simplifying common computer vision tasks with pre-trained models.',
      technologies: ['Python', 'OpenCV', 'PyTorch'],
      category: 'open-source',
      demoUrl: '#',
      githubUrl: '#',
      media: [
        { type: 'image', url: 'https://via.placeholder.com/800x450?text=CV+Library' }
      ],
      featured: false
    },
    {
      id: 5,
      title: 'Sentiment Analysis API',
      description: 'REST API for analyzing sentiment in text with industry-leading accuracy.',
      technologies: ['Python', 'Flask', 'Transformers', 'Docker'],
      category: 'ai-ml',
      demoUrl: '#',
      githubUrl: '#',
      media: [
        { type: 'image', url: 'https://via.placeholder.com/800x450?text=Sentiment+API' }
      ],
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Template',
      description: 'Open-source React template for developer portfolios with customizable sections.',
      technologies: ['React', 'Styled Components', 'GSAP'],
      category: 'open-source',
      demoUrl: '#',
      githubUrl: '#',
      media: [
        { type: 'image', url: 'https://via.placeholder.com/800x450?text=Portfolio+Template' }
      ],
      featured: false
    }
  ];

  const [activeCategory, setActiveCategory] = React.useState('all');
  const [selectedProject, setSelectedProject] = React.useState(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="projects-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Our Projects</h1>
        <p className="tagline">Real-world applications of our expertise</p>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <h2 className="section-title">🚀 Featured Projects</h2>
        <div className="projects-grid">
          {featuredProjects.map(project => (
            <div key={project.id} className="project-card featured">
              <div className="project-media">
                {project.media[0].type === 'image' ? (
                  <img src={project.media[0].url} alt={project.title} />
                ) : (
                  <iframe 
                    src={project.media[0].url} 
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demoUrl && (
                    <a href={project.demoUrl} className="demo-link">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="github-link">
                      <FaGithub /> View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Projects with Filter */}
      <section className="all-projects">
        <div className="section-header">
          <h2 className="section-title">Browse All Projects</h2>
          <div className="category-filter">
            <button 
              className={activeCategory === 'all' ? 'active' : ''}
              onClick={() => setActiveCategory('all')}
            >
              All Projects
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                className={activeCategory === category.id ? 'active' : ''}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-media">
                <img src={project.media[0].url} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-category">
                  {categories.find(c => c.id === project.category)?.name}
                </p>
                <div className="technologies">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal">
          <div className="modal-content">
            <button 
              className="close-modal"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <p className="project-category">
                {categories.find(c => c.id === selectedProject.category)?.name}
              </p>
            </div>

            <div className="modal-body">
              <div className="project-gallery">
                {selectedProject.media.map((item, index) => (
                  <div key={index} className="media-item">
                    {item.type === 'image' ? (
                      <img src={item.url} alt={`${selectedProject.title} ${index + 1}`} />
                    ) : (
                      <iframe 
                        src={item.url} 
                        title={`${selectedProject.title} video`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                ))}
              </div>

              <div className="project-details">
                <h3>Description</h3>
                <p>{selectedProject.description}</p>

                <h3>Technologies Used</h3>
                <div className="technologies">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {selectedProject.demoUrl && (
                    <a href={selectedProject.demoUrl} className="demo-link">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a href={selectedProject.githubUrl} className="github-link">
                      <FaGithub /> View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default ProjectsPage;