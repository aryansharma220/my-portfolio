import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { IoCopyOutline } from "react-icons/io5";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [notification, setNotification] = useState({
    message: '',
    type: '',
    visible: false
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('aryansharma220318@gmail.com');
    showNotification('Email address copied!', 'success');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_cbicqoj',
        'template_56yoohz',
        {
          from_name: form.name,
          to_name: 'Aryan Sharma',
          from_email: form.email,
          to_email: 'aryansharma220318@gmail.com',
          message: form.message
        },
        'ghk8ZYObWv02bKT5l'
      );

      setForm({
        name: '',
        email: '',
        message: ''
      });

      setLoading(false);
      console.log('Your message has been sent!');
      showNotification('Your message has been sent!', 'success');

    } catch (error) {
      setLoading(false);
      console.log(error);
      showNotification('Something went wrong. Please try again.', 'error');
    }
  };

  const showNotification = (message, type) => {
    setNotification({ message, type, visible: true });
    setTimeout(() => {
      setNotification({ message: '', type: '', visible: false });
    }, 2000);
  };

  return (
    <div data-aos='zoom-out-up' id='contact' className='contact-section'>
      <div data-aos="zoom-out-right" className="otherInfo">
        <div className="globe">
          <p className='globeText'>I'm very flexible with time zone communication and open to remote work worldwide.</p>
          <div className='space'>
            <div id="box"></div>
          </div>
        </div>
        <div data-aos="zoom-out-right" className="emailCopy">
          <div className="outer">
            <div className="dot"></div>
            <div className="email-card">
              <div className="ray"></div>
              <div className='email-text'>
                <div className="text">Do you want to start a project together?</div>
                <button className="email-button" onClick={handleCopyEmail}>
                  <IoCopyOutline/> Copy my email address
                </button>
              </div>
              <div className="line topl"></div>
              <div className="line leftl"></div>
              <div className="line bottoml"></div>
              <div className="line rightl"></div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-out-left" className='contact-form'>
        <h1>Let's Talk</h1>
        <p>
          Whether you're looking to build a new website, improve your existing platform, or bring a unique idea to life, I'm here to help.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Full Name</label>
          <input type="text" name="name" value={form.name} required onChange={handleChange} />
          <label htmlFor='email'>Your Email</label>
          <input type="email" name="email" value={form.email} required onChange={handleChange} />
          <label htmlFor='message'>Message For Me</label>
          <textarea name="message" rows="5" value={form.message} required placeholder="Hi, I am interested in...." onChange={handleChange} />
          <button className='button' type="submit" disabled={loading}>
            <span >
            {loading ? 'Sending...' : 'Send Message'}
            </span>
            </button>
        </form>
      </div>
      {/* Notification Component */}
      {notification.visible && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

    </div>
  );
};

export default Contact;


