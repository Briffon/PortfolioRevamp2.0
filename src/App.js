import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Nav from "./components/Nav";
import Landing from "./components/pages/Landing";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import React from "react";

function App() {
  return (
    <div className="portfolio-container">
      <img className="overlay" src="./images/black.jpg" alt="texture" />
      <img src="./images/wave.svg" alt="wave" className="wave-svg" />
      <ReactFullpage
        anchors={[
          "firstPage",
          "secondPage",
          "thirdPage",
          "fourthPage",
          "lastPage",
        ]}
        slidesNavigation={true}
        scrollOverflow={true}
        scrollBar={true}
        licenseKey={"A7DBD34E-73DB4778-A858A699-0C1DEE01"}
        fixedElements=""
        menu={true}
        render={({ fullpageApi }) => {
          return (
            <>
              <Nav api={fullpageApi} />
              <Landing />
              <About />
              {/* <Portfolio />
              <Contact /> */}
            </>
          );
        }}
      />
    </div>
  );
}

export default App;
