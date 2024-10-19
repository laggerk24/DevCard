import { useState } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes
import './DeveloperCard.css';  // Import necessary styles

const DeveloperCard = ({ user }) => {
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => setFlipped(prevState => !prevState);

  const getIconClass = (type) => {
    switch (type) {
      case 'Twitter':
        return 'uil uil-twitter';
      case 'GitHub':
        return 'uil uil-github';
      case 'LinkedIn':
        return 'uil uil-linkedin';
      case 'Email':
        return 'uil uil-envelope';
      default:
        return '';
    }
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`}>
      <div className="card-inner">
        {/* Front of the card */}
        <div className="card-front">
          <div className='card-top-links-container'>
            <div className="card-top">
              <img src={user.image} alt="Developer" className="profile-img" />
              <div className="about-section">
                <span className='dev-name'>{user.name}</span>
                <p>{user.about}</p>
              </div>
            </div>

            {/* Social Links */}
            {user.socialLinks?.length > 0 && (
              <div className="social-links">
                {user.socialLinks.map((link, index) => (
                  <a key={index} href={link.url} target="_blank" rel="noreferrer">
                    <i className={`${getIconClass(link.name)} icon`}></i>
                  </a>
                ))}
              </div>
            )}
          </div>
          {/* Project Links */}
          <div className="project-links">
            {user.projects?.map((project, index) => (
              <a key={index} href={project.url}>{project.name}</a>
            ))}
          </div>
        </div>

        {/* Back of the card */}
        <div className="card-back">
          {/* Experience Section */}
          <div className="experience-section">
            <div className='header'>Experience</div>
            <div className='experience-bullets'>
              {user.experience?.map((exp, index) => (
                <span key={index}>{exp.role} - {exp.duration}</span>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="education-section">
            <div className='header'>Education</div>
            <div>{user.education}</div>
          </div>

          {/* Skills Section */}
          <div className="skills-section">
            <div className='header'>Skills</div>
            <div className='skills'>
              {user.skills?.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Flip Button */}
      <button onClick={flipCard} className="flip-btn">Flip</button>
    </div>
  );
};

// Prop validation
DeveloperCard.propTypes = {
  user: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    about: PropTypes.string,
    socialLinks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
    experience: PropTypes.arrayOf(
      PropTypes.shape({
        role: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
      })
    ),
    education: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default DeveloperCard;
