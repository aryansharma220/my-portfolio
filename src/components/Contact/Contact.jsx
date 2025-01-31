import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { IoCopyOutline } from "react-icons/io5";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSendMessage, setShowSendMessage] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('aryansharma220318@gmail.com');
    setShowCopyMessage(true);
    setTimeout(() => {
      setShowCopyMessage(false);
    }, 2000);
  };

  const validateForm = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = 'Name is required';
    if (!form.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = 'Email is invalid';
    if (!form.message.trim()) errors.message = 'Message is required';
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length > 0) return;
    
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
      setShowSendMessage(true);
      setTimeout(() => {
        setShowSendMessage(false);
      }, 2000);
    } catch (error) {
      setLoading(false);
    }
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
                <div className="email-copy-container">
                  <button className="email-button" onClick={handleCopyEmail}>
                    <IoCopyOutline/> Copy my email address
                  </button>
                  {showCopyMessage && (
                    <div className="copy-message">Email copied!</div>
                  )}
                </div>
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
          {isSubmitted && formErrors.name && <span className="error-message">{formErrors.name}</span>}
          <label htmlFor='email'>Your Email</label>
          <input type="email" name="email" value={form.email} required onChange={handleChange} />
          {isSubmitted && formErrors.email && <span className="error-message">{formErrors.email}</span>}
          <label htmlFor='message'>Message For Me</label>
          <textarea name="message" rows="5" value={form.message} required placeholder="Hi, I am interested in...." onChange={handleChange} />
          {isSubmitted && formErrors.message && <span className="error-message">{formErrors.message}</span>}
          <div className="send-message-container">
            <button className='button' type="submit" disabled={loading}>
              {loading ? <div className="contact-loader"></div> : 'Send Message'}
            </button>
            {showSendMessage && (
              <div className="send-success-message">Message sent successfully!</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;


