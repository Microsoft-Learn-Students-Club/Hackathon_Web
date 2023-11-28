import React from "react";
// import Typewriter from 'react-typewriter-effect';      // Uncomment this line to use the typewriter effect

const Home = () => {
  return (
    <div className="bg-black p-8 text-center h-screen flex flex-col justify-center items-center">
      {/* Can add club logo here */}
      <h1 class="font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-l from-rose-950 via-purple-400 to-purple-800">
        Welcome to MLSC Codefest: <br />Coherence 1.0
      </h1>
      <p className="text-2xl text-white mt-10">
        Join us for an exciting hackathon experience!
      </p>
      {/* Uncomment following code block for typing effect.*/}
      {/* <Typewriter
        options={{
          strings: ['Connect. Collaborate. Code.'],
          autoStart: true,
          loop: false,
        }}
      /> */}
    </div>
  );
};

export default Home;
