import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission - in a real implementation, this would send data to a server
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message. We will get back to you soon!'
    });

    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-32 bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80")'
      }}>
        <div className="absolute inset-0 gradient-primary opacity-90"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair animate-fade-in">Get in Touch</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8 animate-slide-up delay-200"></div>
          <p className="text-xl text-white max-w-2xl mx-auto animate-slide-up delay-300">
            We're here to answer your questions and discuss how we can transform your architectural vision into reality.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="bg-gray-50 p-10 rounded-xl shadow-soft hover-lift reveal">
            <h2 className="text-3xl font-bold text-gradient mb-10 font-playfair">Connect With Us</h2>

            <div className="space-y-10">
              <div className="flex items-start stagger-container">
                <div className="w-14 h-14 gradient-primary rounded-full flex items-center justify-center mr-6 shrink-0 stagger-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="stagger-item">
                  <h3 className="text-xl font-semibold text-[#B3BD31] mb-2">Office Address</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Office No. 5, Vivarium Design Studio Private Limited,<br />
                    Sai Rama, Plot No. 3A, Sector 2,<br />
                    Kharghar, Navi Mumbai, Maharashtra 410210
                  </p>
                </div>
              </div>

              <div className="flex items-start stagger-container">
                <div className="w-14 h-14 gradient-primary rounded-full flex items-center justify-center mr-6 shrink-0 stagger-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="stagger-item">
                  <h3 className="text-xl font-semibold text-[#B3BD31] mb-2">Email</h3>
                  <a href="mailto:info@vivarium.co.in" className="text-gray-700 hover:text-[#B3BD31] transition-colors">
                    info@vivarium.co.in
                  </a>
                </div>
              </div>

              <div className="flex items-start stagger-container">
                <div className="w-14 h-14 gradient-primary rounded-full flex items-center justify-center mr-6 shrink-0 stagger-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="stagger-item">
                  <h3 className="text-xl font-semibold text-[#B3BD31] mb-2">Phone</h3>
                  <a href="tel:+919930336099" className="text-gray-700 hover:text-[#B3BD31] transition-colors">
                    +91 9930336099
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-[#B3BD31] mb-5">Office Hours</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium text-gray-800 mb-1">Monday - Friday</p>
                    <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium text-gray-800 mb-1">Saturday</p>
                    <p className="text-gray-600">10:00 AM - 3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal">
            <h2 className="text-3xl font-bold text-gradient mb-10 font-playfair">Send Us a Message</h2>

            {formStatus.submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg animate-fade-in">
                <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
                <p>{formStatus.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-slide-up">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="animate-slide-up delay-100">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="animate-slide-up delay-200">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div className="animate-slide-up delay-300">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="animate-slide-up delay-400">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <div className="animate-slide-up delay-500">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#B3BD31] text-white font-semibold rounded-md hover-lift transition-all duration-300 hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map and Clients Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 reveal">
            <h2 className="text-3xl font-bold text-gradient mb-10 font-playfair text-center">Our Location</h2>
            <div className="h-96 bg-gray-200 rounded-xl overflow-hidden shadow-soft">
              {/* Google Maps Embed for Kharghar, Navi Mumbai location */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8234567890123!2d73.06336975739643!3d19.028804268820384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAxJzQzLjciTiA3M8KwMDMnNDguMSJF!5e0!3m2!1sen!2sin!4v1640995200000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vivarium Design Studio - Office No. 5, Sai Rama, Kharghar"
              ></iframe>

              {/* Direct Google Maps Link */}
              <div className="mt-4 text-center">
                <a
                  href="https://maps.app.goo.gl/mwCNg7fZECLAbCD66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#B3BD31] text-white font-semibold rounded-lg hover:bg-[#9da728] transition-colors duration-300 shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>


        </div>
      </section>

    </div>
  );
};

export default Contact;
