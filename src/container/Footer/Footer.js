import React, { useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { images } from '../../constants';

import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', emai: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = e => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee and chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.whatsapp} alt="whatsapp" />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/+994502119167"
          >
            <p className="p-text">Whatsapp Me</p>
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.telegram} alt="telegram" />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://telegram.me/tabriz_h"
          >
            <p className="p-text">Telegram Me</p>
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:hajiyevtabriz@gmail.com" className="p-text">
            <p className="p-text">Email Me</p>
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              value={name}
              name="name"
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              value={email}
              name="email"
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              name="message"
              className="p-text"
              placeholder="Your Message"
              value={message}
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? 'Sending' : 'Send Message'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank You For Getting In Touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
);
