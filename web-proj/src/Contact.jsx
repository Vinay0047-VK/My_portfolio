import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from './components/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Create a free account at web3forms.com to get your access key
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // TODO: Replace with your actual Web3Forms access key
          access_key: "YOUR_ACCESS_KEY_HERE", 
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error("Error submitting form", result);
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong! Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatedSection id="contact" className="contact-section">
      <h2 className="section-title">
        Get In <span className="gradient-text">Touch</span>
      </h2>
      <div className="contact-container">
        <p className="contact-subtitle">
          Have an interesting project, job opportunity, or just want to say hello?
          Drop me a line below!
        </p>
        <motion.form
          onSubmit={handleSubmit}
          className="contact-form"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="yo name is..."
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your email please..."
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Collaboration/Job Opportunity/Just a hello..."
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Hi Vinay, I would ..."
              rows="5"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-submit" disabled={isLoading}>
            {isLoading ? (
              <span className="btn-loading">
                <span className="spinner" />
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                className="form-success-toast"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                Message sent successfully! I&apos;ll get back to you soon.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
