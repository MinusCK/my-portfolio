import React, { useEffect, useState } from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import nav_logo from "../assets/image/logo_24px.png";
import logo from "../assets/image/logo2.svg";
import nav_icon1 from "../assets/image/nav-icon1.svg";
import nav_icon2 from "../assets/image/nav-icon2.svg";
import nav_icon3 from "../assets/image/nav-icon3.svg";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const onUpdateActiveLink = (page: string) => {
    setActiveLink(page);
  };
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" className="nav-logo" />
        </Navbar.Brand>
        <div></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "navbar-link active" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about-me"
              className={
                activeLink === "about-me" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about-me")}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#myProject"
              className={
                activeLink === "my-project"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("my-projec")}
            >
              My Project
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="http://linkedin.com/in/minus-cheung-4b8994258"
                target="_blank"
              >
                <img src={nav_icon1} />
              </a>
              <a href="https://www.facebook.com/RayCKH/" target="_blank">
                <img src={nav_icon2} />
              </a>
              <a href="https://www.instagram.com/minusckh/" target="_blank">
                <img src={nav_icon3} />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
