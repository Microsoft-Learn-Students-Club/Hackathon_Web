import React from 'react';
import "./style/contact.css";

const ContactUs = () => {
  return (
    <div className="text-white p-4 md:p-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>

      <div className="flex flex-col md:flex-row justify-center">
        {/* Contact Information */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-xl md:text-2xl font-bold mb-2">Reach Us</h3>
          <p className="text-lg font-semibold md:text-base mb-2">
            Vidyavardhini's College of Engineering and Technology
          </p>
          <p className="text-lg md:text-base">
            K.T. Marg, Vartak College Campus Vasai Road,
            <br />
            Vasai-Virar, Maharashtra 401202
          </p>

          <h3 className="text-xl md:text-2xl font-bold mt-4 mb-2">
            Contact Numbers
          </h3>
          <div className="mb-2">
            <p className="text-lg md:text-base mb-1">General Enquiries:</p>
            <p className="text-lg md:text-base">Rishabh Tripathi: +91 9369744734</p>
            <p className="text-lg md:text-base">Sanika Patil: +91 9876543210</p>
          </div>
          <div>
            <p className="text-lg md:text-base mb-1">Technical Support:</p>
            <p className="text-lg md:text-base">Kshitij Patil: +91 9369744734</p>
            <p className="text-lg md:text-base">Om Achrekar: +91 9876543210</p>
          </div>

          <h3 className="text-xl md:text-2xl font-bold mt-4 mb-2">Email</h3>
          <p className="text-lg md:text-base">For Enquiries: mlsc@vcet.edu.in</p>
        </div>
        <div className="w-full md:w-1/2 rounded-md overflow-hidden lg:px-20">
          <iframe
            title="College Location"
            className="mt-4 w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.659991421949!2d72.82615867523565!3d19.383869581885122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aec0a4b41bef%3A0xbd1a4ca919d6a613!2sVidyavardhini&#39;s%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1701160672294!5m2!1sen!2sin"
            width="450"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
