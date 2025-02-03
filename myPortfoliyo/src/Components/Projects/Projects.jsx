import React, { useEffect } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { CiShare1 } from 'react-icons/ci';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS

function Projects() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing type
      once: true, // Animation will only happen once
    });
  }, []);

  const card_line = [
    {
      link: 'file:///D:/ALL%20PROJECT/responsiv%20%20media%20quer/media%20quer/media%20quer/confpro-media/index.html',
      icon: <FaGithub />,
      icon2: <CiShare1 />,
      title: "Simple Web Design",
      description: "HTML CSS3"
    },
    {
      link: 'https://github.com/project-link',
      icon: <FaGithub />,
      icon2: <CiShare1 />,
      title: "Project Title 2",
      description: "HTML CSS3"
    },
    {
      link: 'https://github.com/project-link',
      icon: <FaGithub />,
      icon2: <CiShare1 />,
      title: "Project Title 3",
      description: "HTML CSS3"
    },
    {
      link: 'https://github.com/project-link',
      icon: <FaGithub />,
      icon2: <CiShare1 />,
      title: "Project Title 4",
      description: "HTML CSS3"
    },
    {
      link: 'https://github.com/project-link',
      icon: <FaGithub />,
      icon2: <CiShare1 />,
      title: "Project Title 5",
      description: "HTML CSS3"
    },
    {
      link: 'https://github.com/project-link',
      icon: <FaGithub />,
      icon2: <CiShare1 />,
      title: "Project Title 6",
      description: "HTML CSS3"
    }
  ];

  return (
    <section className='project-section'>
      <h1>Stuff I’ve <span className='tag-color'>worked on</span></h1>
      <div className="container">
        <div className="card-container">
          {card_line.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in" // AOS animation trigger
              className='card-width'
            >
              <div className="card1">
                <div className="icon-container d-flex justify-content-end align-items-center">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className='text-white'>{project.icon}</a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className='text-white'>{project.icon2}</a>
                </div>
                <div className='card-title'>{project.title}</div>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
