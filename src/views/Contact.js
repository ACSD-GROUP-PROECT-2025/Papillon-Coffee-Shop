import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/mblgbjqq", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "Papillon Café Webform"
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        console.error('Formspree error:', errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center">
      <h2>Get in Touch – Let's Brew Some Conversation!</h2>
      
      <div className="description w-80">
        <p>At Papillon Café, we believe the best connections start over coffee — whether you want to share your latest coffee obsession, spill the beans, or just want to perk our ears.
        <br/><br/>
        Drop us a message below!</p>
        
        {submitStatus === 'success' && (
          <div className="alert alert-success">
            Thank you! Your message has been sent successfully. We'll get back to you faster than a pour-over drips. <br/>(Okay, maybe not that fast, but we promise no one here sleeps on emails — too much espresso, you see.)
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="alert alert-danger">
            Oops! Something went wrong while sending your message. Please try again later.
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="w-100">
          <div className="mb-3">
            <label htmlFor="name" className="form-label"><b>Name:</b></label>
            <input 
              type="text" 
              id="name"
              name="name" 
              placeholder="Your name" 
              className="form-control" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label"><b>Email:</b></label>
            <input 
              type="email" 
              id="email"
              name="email" 
              placeholder="coffeelover@papillon.cafe" 
              className="form-control" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="message" className="form-label"><b>Message:</b></label>
            <textarea 
              id="message"
              name="message" 
              className="form-control"
              placeholder="I love coffee!!" 
              value={formData.message}
              onChange={handleChange}
              required 
              rows="4"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Sending...
              </>
            ) : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;