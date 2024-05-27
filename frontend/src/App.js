import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AppHeader from "./component/Header";
import AppHero from "./component/hero";
import About from "./component/AboutUs";
import AppServices from "./component/servicesUs";
import Contact from "./component/ContactUs";
import Footer from "./component/Footer";

function App() {
  const componentSpacingStyle = {
    marginBottom: "20px", // Adjust this value as needed
  };

  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <div style={componentSpacingStyle}>
          <AppHero />
        </div>

        <div style={componentSpacingStyle}>
          <About />
        </div>

        <br />
        <br />

        <div style={componentSpacingStyle}>
          <Contact />
        </div>

        <br />
        <br />

        <div style={componentSpacingStyle}>
          <AppServices />
        </div>

        <br />
        <br />

        <div style={componentSpacingStyle}>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
