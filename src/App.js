import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Domains from "./components/Domains";
import Schedule from "./components/Schedule";
import GeneralGuidelines from "./components/GeneralGuidelines";
import FAQs from "./components/FAQs";
import Sponsors from "./components/Sponsors";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";
import PrizePodium from "./components/PrizePodium";
import YetToRevealPage from "./components/YetToRevealPage";
import Introduction from "./components/Introduction"; // Import your AnimatedLogo component

function App() {
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [showYetToRevealPage, setShowYetToRevealPage] = useState(false);

  useEffect(() => {
    const revealDate = new Date("January 1, 2023 00:00:00 GMT+0530");
    const currentDate = new Date();

    // Show YetToRevealPage until reveal date
    if (currentDate < revealDate) {
      setShowYetToRevealPage(true);
    } else {
      // Show Introduction after reveal date
      setShowIntroduction(true);

      // After 2 seconds, hide Introduction and set showRemainingComponents to true
      const delay = setTimeout(() => {
        setShowIntroduction(false);
        setShowRemainingComponents(true);
      }, 2000);

      // Clear the timeout when the component is unmounted
      return () => clearTimeout(delay);
    }
  }, []);

  const [showRemainingComponents, setShowRemainingComponents] = useState(false);

  return (
    <div className="App bg-black">
      {/* Display YetToRevealPage until January 1st */}
      {showYetToRevealPage && <YetToRevealPage className="yet-to-reveal" />}

      {/* Display Introduction after January 1st */}
      {showIntroduction && (
        <Introduction className="introduction" />
      )}

      {/* Display other components after a delay */}
      {showRemainingComponents && (
        <>
          <Home />
          <About />
          <Domains />
          <Schedule />
          <GeneralGuidelines />
          <PrizePodium />
          <Sponsors />
          <FAQs />
          <ContactUs />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
