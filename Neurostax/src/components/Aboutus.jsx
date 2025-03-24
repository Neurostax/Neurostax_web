import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaAward, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';
import "./Aboutus.css"
const AboutUs = () => {
  // Team member data
  const teamMembers = [
    {
      id: 1,
      name: 'Felix Morara',
      role: 'President',
      expertise: 'Specializes in NLP & Robotics',
      photo: 'https://via.placeholder.com/150',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      id: 2,
      name: 'Vanessa Owiti',
      role: 'Vice President',
      expertise: 'Specializes in React & Node.js',
      photo: 'https://via.placeholder.com/150',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
        id: 3,
        name: 'Charity Mary',
      role: 'Brand Ambassador',
      expertise: 'Specializes in Computer Vision',
      photo: 'https://via.placeholder.com/150',
      social: {
          linkedin: '#',
          github: '#',
        twitter: '#'
    }
    },
    {
        id: 4,
        name: 'Lavenda Shipishira',
        role: 'Technical Lead',
        expertise: 'Specializes in Computer Vision',
        photo: 'https://via.placeholder.com/150',
        social: {
          linkedin: '#',
          github: '#',
          twitter: '#'
        }
      },
      {
        id: 5,
        name: 'Victor Mukunga',
        role: 'Hardware & IOT Lead',
        expertise: 'Specializes in Computer Vision',
        photo: 'https://via.placeholder.com/150',
        social: {
          linkedin: '#',
          github: '#',
          twitter: '#'
        }
    },
      {
          id: 6,
        name: 'Liza Bambu',
        role: 'Research & Innovation Lead',
        expertise: 'Specializes in Computer Vision',
        photo: 'https://via.placeholder.com/150',
        social: {
            linkedin: '#',
          github: '#',
          twitter: '#'
        }
      },
      {
        id: 7,
        name: 'Derek Oduor',
        role: 'Events Coordinator',
        expertise: 'Specializes in Computer Vision',
        photo: 'https://via.placeholder.com/150',
        social: {
          linkedin: '#',
          github: '#',
          twitter: '#'
        }
      }
    ];
    
  // Achievements data
  const achievements = [
    { id: 1, title: 'AI Innovation Award 2023', description: 'Recognized for groundbreaking work in NLP' },
    { id: 2, title: 'Tech Hackathon Winners', description: '1st place in National AI Challenge' },
    { id: 3, title: 'Featured in Tech Magazine', description: 'Cover story on our innovative solutions' }
  ];

  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>About NeuroStackX</h1>
        <p className="tagline">Innovating Intelligence one stack at a time</p>
      </section>

      {/* Our Story Section */}
      <section className="section our-story">
        <div className="section-header">
          <FaLightbulb className="section-icon" />
          <h2>Our Story</h2>
        </div>
        <div className="section-content">
          <p>
          It all started with a simple idea: What if we could bridge all technologies to solve real-world problems?

We weren’t just engineers—we were tinkerers, dreamers, and problem-solvers, obsessed with pushing the boundaries of what technology can do. From sleepless nights spent debugging code to heated debates over circuits, AI models, and data streams, we thrived in the chaos of creation.

Then came the Eureka moment—why not turn our relentless curiosity into something bigger? Something that could engineer solutions, not just theories. So, in 2025, a team of biomedical and electrical engineers came together to build not just a company, but a movement—a startup where web development, machine learning, data analytics, IoT, signal processing, and design converge to shape the future.

We aren’t just about innovation for innovation’s sake. We build with purpose. Whether it’s revolutionizing industries, enhancing human potential, or crafting seamless digital ecosystems, we thrive on solving problems that matter.

We are engineers of the future, coding reality from imagination, soldering ideas into existence, and fusing tech with human ingenuity. The world is evolving, and we’re here to make sure it evolves smarter.
          </p>
          <p>
            Our name reflects our approach - combining neural network technologies with full-stack development expertise to deliver complete
            solutions. From our humble beginnings in a university lab to our current status as an award-winning firm, we've remained committed
            to our founding principles of innovation, excellence, and practical problem-solving.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section mission-vision">
        <div className="mission">
          <div className="section-header">
            <FaRocket className="section-icon" />
            <h2>Our Mission</h2>
          </div>
          <div className="section-content">
            <p>
            To engineer groundbreaking technological solutions that empower industries, enhance human potential, and drive the world toward a smarter, more innovative future.
            </p>
          </div>
        </div>
        <div className="vision">
          <div className="section-header">
            <FaRocket className="section-icon" />
            <h2>Our Vision</h2>
          </div>
          <div className="section-content">
            <p>
            To be a global force in technology, pioneering advancements that redefine industries, connect the world, and create limitless possibilities for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="section team">
        <div className="section-header">
          <FaUsers className="section-icon" />
          <h2>Meet the Team</h2>
        </div>
        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-member">
              <img src={member.photo} alt={member.name} className="member-photo" />
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="expertise">{member.expertise}</p>
              <div className="social-links">
                <a href={member.social.linkedin} aria-label={`${member.name} LinkedIn`}><FaLinkedin /></a>
                <a href={member.social.github} aria-label={`${member.name} GitHub`}><FaGithub /></a>
                <a href={member.social.twitter} aria-label={`${member.name} Twitter`}><FaTwitter /></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-choose-us">
        <div className="section-header">
          <FaRocket className="section-icon" />
          <h2>Why Choose NeuroStackX?</h2>
        </div>
        <div className="features-grid">
          <div className="feature">
            <h3>Expertise Across the Stack</h3>
            <p>Deep knowledge in AI/ML combined with full-stack development capabilities means we can deliver complete, integrated solutions.</p>
          </div>
          <div className="feature">
            <h3>Research-Driven Approach</h3>
            <p>We stay at the cutting edge by continuously investing in R&D and contributing back to the AI community.</p>
          </div>
          <div className="feature">
            <h3>Passionate Team</h3>
            <p>Our team lives and breathes technology, bringing enthusiasm and creativity to every project.</p>
          </div>
          <div className="feature">
            <h3>Practical Innovation</h3>
            <p>We focus on solutions that work in the real world, not just in theory or lab environments.</p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section achievements">
        <div className="section-header">
          <FaAward className="section-icon" />
          <h2>Achievements & Milestones</h2>
        </div>
        <div className="achievements-list">
          {achievements.map(achievement => (
            <div key={achievement.id} className="achievement-item">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;