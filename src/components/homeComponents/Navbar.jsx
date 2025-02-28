﻿import React from "react";
import {
  MainLogo,
  InstagramLogo,
  FacebookLogo,
  YoutubeLogo,
} from "../../assets";

import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import MobileNavbar from "./MobileNavbar";
function Navbar() {
  const location = useLocation();

  const navigate = useNavigate();

  return (
    <>
      <>
        <div className="container navbar-container-home">
          <section className="nav-links-container">
            <Link
              to={"/portfolio"}
              className={location.pathname === "/portfolio" ? "active" : ""}
            >
              Portfolio
            </Link>
            <Link
              to="https://ayan.photography/"
              target="_blank"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
            <Link
              to={"https://ayan.photography/"}
              target="_blank"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </section>
          <section
            className="logo-container cursor"
            onClick={() => navigate("/")}
          >
            <img src={MainLogo} alt="main logo" />
          </section>

          <section className="social-container">
            <a href="https://www.facebook.com/AyaNPhotography" target="_blank">
              <img src={FacebookLogo} className="cursor" alt="facebook logo" />
            </a>
            <a href="https://www.instagram.com/ayan_hore/" target="_blank">
              <img
                src={InstagramLogo}
                className="cursor"
                alt="instagram logo"
              />
            </a>
            <a
              href="https://www.youtube.com/user/AyaNPhotography"
              target="_blank"
            >
              <img src={YoutubeLogo} className="cursor" alt="youtube logo" />
            </a>
          </section>
        </div>
      </>
      <MobileNavbar />
    </>
  );
}

export default Navbar;
