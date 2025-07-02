import React from 'react';

const Contact = () => (
  <section className="max-w-2xl mx-auto py-10">
    <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h2>
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <p className="text-gray-700 mb-2">Office No. 5, Plot No. 3A, Sairama CHS, Station Rd., Sector-2, Kharghar, Navi Mumbai - 410210</p>
      <p className="text-gray-700 mb-2">Email: <a href="mailto:info@vivarium.co.in" className="text-blue-700 underline">info@vivarium.co.in</a></p>
      <p className="text-gray-700 mb-2">Phone: <a href="tel:+919930336099" className="text-blue-700 underline">+91 9930336099</a></p>
    </div>
    <div className="bg-blue-50 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-blue-800 mb-2">Our Clients</h3>
      <ul className="list-disc list-inside text-gray-700">
        <li>YES GERMANY</li>
        <li>OLYMPIA</li>
      </ul>
    </div>
  </section>
);

export default Contact;
