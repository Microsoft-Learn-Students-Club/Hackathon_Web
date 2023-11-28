import React from 'react';
import './style/Contact.css';

const ContactUs = () => {
  return (
    <div className="contact-parent">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

      <div className="flex flex-wrap justify-center">
        {/* Contact Information */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">Reach Us</h3>
          <p className="text-lg mb-2">
            Vidyavardhini's College of Engineering and Technology
          </p>
          <p className="text-lg">
          K.T. Marg, Vartak College Campus Vasai Road,<br /> Vasai-Virar, Maharashtra 401202
          </p>

          <h3 className="text-2xl font-bold mt-4 mb-2">Contact Numbers</h3>
          <p className="text-lg mb-2">General Enquiries: +91 9369744734</p>
          <p className="text-lg">Technical Support: +91 9369744734</p>

          <h3 className="text-2xl font-bold mt-4 mb-2">Email</h3>
          <p className="text-lg">For Enquiries: rishabh.tripathi@mlsc.com</p>
        </div>

        {/* Embedded Google Maps */}
        <div className="w-full md:w-1/2 rounded-md">
        <iframe
          title="College Location"
          className="mt-4"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.659991421949!2d72.82615867523565!3d19.383869581885122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aec0a4b41bef%3A0xbd1a4ca919d6a613!2sVidyavardhini&#39;s%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1701160672294!5m2!1sen!2sin"
          width="450"
          height="300"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      </div>

      {/* Add more content as needed */}
    </div>
  );
};

export default ContactUs;
