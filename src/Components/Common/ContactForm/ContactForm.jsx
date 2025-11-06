import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.scss';

const ContactForm = ({ onClose }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // ⏰ Add a hidden time field before sending
      const timeInput = document.createElement('input');
      timeInput.type = 'hidden';
      timeInput.name = 'time'; // must match {{time}} in EmailJS template
      timeInput.value = new Date().toLocaleString();
      form.current.appendChild(timeInput);

      // 📤 Send the email
      await emailjs.sendForm(
        'service_dix17ws',     // ✅ Your EmailJS Service ID
        'template_mep1ca8',    // ✅ Your EmailJS Template ID
        form.current,          // ✅ Form reference
        'ieIhBlAiJXGwOjs1c'    // ✅ Your Public Key
      );

      // 🎉 Success state
      setSubmitStatus('success');
      form.current.reset(); // Clear form fields
      setTimeout(() => onClose(), 2000);
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-overlay" onClick={onClose}>
      <div className="contact-form-container" onClick={(e) => e.stopPropagation()}>
        <div className="contact-form-header">
          <h2>Get In Touch</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="from_name"   // ✅ Must match {{from_name}}
              required
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="from_email"  // ✅ Must match {{from_email}}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"     // ✅ Must match {{subject}}
              required
              placeholder="What's this about?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"     // ✅ Must match {{message}}
              required
              rows="5"
              placeholder="Tell me about your project or inquiry..."
            />
          </div>

          {submitStatus === 'success' && (
            <div className="status-message success">
              ✅ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="status-message error">
              ❌ Failed to send message. Please try again.
            </div>
          )}

          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
