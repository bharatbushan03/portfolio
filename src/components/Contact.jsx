import React, { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [submitError, setSubmitError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');
        setSubmitError(false);

        try {
            const response = await fetch('https://formsubmit.co/ajax/bharatbushan5320@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: 'New portfolio contact form submission',
                    _template: 'table'
                })
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setSubmitMessage('Thank you for your message. I will get back to you soon!');
            setFormData({ name: '', email: '', message: '' });
        } catch {
            setSubmitError(true);
            setSubmitMessage('Something went wrong. Please try again in a moment.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title reveal">Get In Touch</h2>

                <div className="contact-container">
                    <div className="contact-info reveal">
                        <h3 className="info-title">Let's build something amazing together.</h3>
                        <p className="info-desc">
                            Whether you need a complex system architectured from scratch,
                            or a top-tier engineering consultant for your next big project,
                            feel free to reach out.
                        </p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon glass">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <p>bharatbushan5320@gmail.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon glass">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Jammu, J&K (Remote)</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="contact-form-container glass reveal" style={{ transitionDelay: '0.2s' }}>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Rajeev Sharma"
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
                                    required
                                    placeholder="raju@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                            </button>
                            {submitMessage ? (
                                <p
                                    role="status"
                                    aria-live="polite"
                                    style={{ marginTop: '12px', color: submitError ? '#ef4444' : '#22c55e' }}
                                >
                                    {submitMessage}
                                </p>
                            ) : null}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
