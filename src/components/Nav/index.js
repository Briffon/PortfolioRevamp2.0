import React from "react";
import "./index.css";

function Nav(props) {
  const openMobileNav = (e) => {
    e.preventDefault();
    document.getElementsByClassName("mobile-menu")[0].classList.remove("close");
    document.getElementsByClassName("mobile-nav")[0].classList.add("close");
    props.api.setAllowScrolling(false);
  };

  const closeMobileNav = (e) => {
    e.preventDefault();
    document.getElementsByClassName("mobile-menu")[0].classList.add("close");
    document.getElementsByClassName("mobile-nav")[0].classList.remove("close");
    props.api.setAllowScrolling(true);
  };

  const goTo = (e, page) => {
    e.preventDefault();
    document.getElementsByClassName("mobile-menu")[0].classList.add("close");
    document.getElementsByClassName("mobile-nav")[0].classList.remove("close");
    props.api.setAllowScrolling(true);
    props.api.moveTo(page);
  };
  return (
    <div id="myMenu">
      <div className="regular-nav">
        <img
          className="nav-container-logo"
          src="./images/logo-white.png"
          alt="logo"
        />
        <ul className="myMenu__links">
          <li data-menuanchor="firstPage" className="active">
            <a href="#firstPage">Home</a>
          </li>
          <li data-menuanchor="secondPage">
            <a href="#secondPage">About</a>
          </li>
          <li data-menuanchor="thirdPage">
            <a href="#thirdPage">Portfolio</a>
          </li>
          <li data-menuanchor="fourthPage">
            <a href="#fourthPage">Contact</a>
          </li>
          <img src="./images/me.png" alt="Britton Smith" />
        </ul>
      </div>
      <div className="mobile-nav">
        <img
          className="nav-container-logo"
          src="./images/logo-white.png"
          alt="logo"
        />
        <div className="mobile-nav__hamburger" onClick={openMobileNav}>
          <div className="mobile-nav__hamburger__line"></div>
          <div className="mobile-nav__hamburger__line"></div>
          <div className="mobile-nav__hamburger__line"></div>
        </div>
      </div>
      <div className="mobile-menu close">
        <img
          onClick={(e) => closeMobileNav(e)}
          src="./images/icons/close.png"
          alt="close icon"
        />
        <button onClick={(e) => goTo(e, 1)}>Home</button>
        <button onClick={(e) => goTo(e, 2)}>About Me</button>
        <button onClick={(e) => goTo(e, 3)}>Portfolio</button>
        <button onClick={(e) => goTo(e, 4)}>Contact</button>
      </div>
    </div>
  );
}

export default Nav;
