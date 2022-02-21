import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (

    <footer className="footer text-light mb-3 justify-center">


      <ul className="container text-center mb-3">
        <li><a href="#home">Contact</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#terms&Conditions">Terms & Conditions</a></li>
      </ul>


      <div className="container text-center mb-3">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-2"
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
      </div>
      <div className="container text-center mb-5">
        <logo>
          <SocialIcon network="linkedin" url="https://www.linkedin.com/in/hadis-parsa-a5b947179" />
          <SocialIcon network="instagram" url="https://www.instagram.com/" />
          <SocialIcon network="facebook" url="https://www.facebook.com/" />
        </logo>
        <h4 className='text-link'>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by Author.
        </h4>
      </div>

    </footer>
  );
};

export default Footer;
