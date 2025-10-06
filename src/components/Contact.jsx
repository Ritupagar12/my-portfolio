import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="contact-section flex flex-col justify-center py-16 px-4 md:px-16">
            <h2 className="text-4xl font-bold text-center mb-2">Contact Me</h2>
            <p className="text-gray-500 text-center mb-12 italic">
                I’m always open to discuss ideas, projects, or opportunities.
            </p>

            <div className="contact-container max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
                {/* Left Side: Contact Info */}
                <div className="contact-info flex-1 flex flex-col gap-6 fade-in-left">
                    <div className="info-item flex items-center gap-4">
                        <FaEnvelope className="text-2xl text-gray-700" />
                        <span className="text-gray-800">ritupagar3@gmail.com</span>
                    </div>
                    <div className="info-item flex items-center gap-4">
                        <FaPhone className="text-2xl text-gray-700" />
                        <span className="text-gray-800">+64 224196673</span>
                    </div>
                    <div className="info-item flex items-center gap-4">
                        <FaMapMarkerAlt className="text-2xl text-gray-700" />
                        <span className="text-gray-800">New Zealand</span>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="contact-form flex-1 fade-in-right">
                    <p className="text-gray-700 mb-4">
                        Fill out the form below and I’ll get back to you as soon as possible.
                    </p>

                    {submitted && (
                        <div className="success-message mb-4">
                            ✅ Your message has been sent!
                        </div>
                    )}

                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="input-field"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="input-field"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            className="input-field h-32 resize-none"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit" className="btn-primary">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
