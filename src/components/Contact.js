import React from 'react';
import "./style/contact.css";

const ContactUs = () => {
  return (
    <div className="contact-main">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

      <div className="flex flex-wrap justify-center">
        <div className="info">
          <h3 className="info-head">Venue</h3>
          <p className="text-lg font-bold">
            Vidyavardhini's College of Engineering and Technology
          </p>
          <p className="text-lg">
            K.T. Marg, Vartak College Campus Vasai Road<br /> Vasai-Virar, Maharashtra 401202
          </p>

          <h3 className="contact-num">Contact Numbers</h3>
          <p className="text-lg">Rishabh Tripathi: +91 9369744734</p>
          <p className="text-lg">Sanika Patil: +91 7738328956</p>

          <h3 className="email-head">Email</h3>
          <p className="text-lg">For Enquiries: <a href="mailto:mlsc@vcet.edu.in">mlsc@vcet.edu.in</a></p>
        </div>

        <div classname="space"></div>

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
    </div>
  );
};

export default ContactUs;
