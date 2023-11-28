// src/components/About.js
import './style/AboutUs.css';

import React from "react";

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]

const About = () => {
  const people = [
    {
      name: 'Rishabh Tripathi',
      role: 'MLSA & MLSC Lead',
      imageUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=256&h=256&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      linkedinUrl: 'https://www.linkedin.com/in/leslie-alexander'
    },
    {
      name: 'Sanika Patil',
      role: 'MLSC Co-Lead',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      linkedinUrl: 'https://www.linkedin.com/in/leslie-alexander'
    },
    {
      name: 'Kshitij Patil',
      role: 'Web Lead - Dev Team',
      imageUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=256&h=256&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      linkedinUrl: 'https://www.linkedin.com/in/leslie-alexander'
    },
    {
      name: 'Om Achrekar',
      role: 'AI/ML Lead - Dev Team',
      imageUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=256&h=256&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      linkedinUrl: 'https://www.linkedin.com/in/leslie-alexander'
    },
    {
      name: 'Karan Patra',
      role: 'App Lead - Dev Team',
      imageUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=256&h=256&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      linkedinUrl: 'https://www.linkedin.com/in/leslie-alexander'
    },
    {
      name: 'Hrushikesh Shetty',
      role: 'Hai kidhar toh',
      imageUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=256&h=256&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      linkedinUrl: 'https://www.linkedin.com/in/leslie-alexander'
    },
    // More people...
  ];

  return (
    <div className="AboutUs-parent">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our team</h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Rishabh Tripathi OnlyFans
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <a href={person.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                  </a>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
