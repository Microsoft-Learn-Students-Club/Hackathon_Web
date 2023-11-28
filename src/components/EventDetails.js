import React from 'react';

const EventDetails = () => {
  return (
    <div className="text-white p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Event Details</h2>
      <p className="text-lg mb-4">
        MLSC Codefest: Coherence 1.0 is a hackathon that focuses on bringing together coding enthusiasts,
        developers, and creative minds. Here are some key details about the event:
      </p>
      <ul className="text-left list-disc">
        <li>Theme: Coherence 1.0</li>
        <li>Date: 17th - 18th February 2024</li>
        <li>Location: Vidyavardhini's College of Engineering and Technology, Vasai</li>
        <li>Registration Deadline: 01st February 2024</li>
      </ul>
      <p className="text-lg mt-4">
        Join us for a day filled with coding challenges, learning opportunities, and the chance to showcase
        your skills in a collaborative and innovative environment.
      </p>
      {/* Add more content as needed */}
    </div>
  );
};

export default EventDetails;
