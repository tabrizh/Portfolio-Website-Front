import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/tabriz-hajiyev-th/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a
        href="https://www.facebook.com/tabriz.haciyev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <FaFacebook />
        </div>
      </a>
      <a
        href="https://www.instagram.com/tabriz_h/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
