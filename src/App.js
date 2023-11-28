import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Domains from "./components/Domains";
import Registration from "./components/Registration";
import Schedule from "./components/Schedule";
// import Resources from "./components/Resources";
import Submissions from "./components/Submission";
import JudgingCriteria from "./components/JudgingCriteria";
import FAQs from "./components/FAQs";
import Sponsors from "./components/Sponsors";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesComponent from "./components/Particles";

function App() {
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    // Add a delay of 1ms before showing the About section
    const delay = setTimeout(() => {
      setShowAbout(true);
    }, 1);

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="App bg-black">
      <ParticlesComponent/>
      <Home />
      {showAbout && <About />}

      <Registration />
      <Domains />
      <Schedule />
      {/* <Resources /> */}
      <Submissions />
      <JudgingCriteria />
      <Sponsors />
      <FAQs />
      <AboutUs />
      <ContactUs />
      <Footer />
      
    </div>
  );
}

export default App;
