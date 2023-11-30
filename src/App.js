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
import YetToRevealPage from "./components/YetToRevealPage"; // Create this component

function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    // const revealDate = new Date("January 1, 2024 00:00:00 GMT+0530");
    const revealDate = new Date("November 30, 2023 18:00:00 GMT+0530");
    // const revealDate = new Date("November 30, 2023 15:35:00 GMT+0530");
    const currentDate = new Date();

    // Show main content after reveal date
    if (currentDate >= revealDate) {
      setShowMainContent(true);
    }
  }, []);

  return (
    <div className="App bg-black">
      {/* Display CountdownPage before January 1st */}
      {!showMainContent && <YetToRevealPage />}

      {/* Display main content after January 1st */}
      {showMainContent && (
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
