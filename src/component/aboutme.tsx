import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./aboutme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Image, Container } from "react-bootstrap";
import nav_logo from "../assets/image/logo_24px.png";
import about_me from "../assets/image/about-temp.png";

function AboutMe() {
  const [isScrolled, setIsScrolled] = useState(false);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (ref.current) {
      const elementTop = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight) {
        setIsScrolled(true);
      }
    }
  };
  return (
    <section className="about-me" id="about-me">
      <Container>
        <Row>
          <Col>
            <h2
              className={`about-me-show ${isScrolled ? "scrolled-h2" : ""}`}
              ref={ref}
            >
              About me!
            </h2>
            <div
              className={`about-me-content ${isScrolled ? "scrolled-h2" : ""}`}
              ref={ref}
            >
              As a photographer, videographer, and beginner web developer, I
              have a strong passion for visual storytelling. Despite being a
              novice in web development, I'm highly interested in website design
              and enjoy experimenting with different technologies. My ultimate
              goal is to create visually stunning and user-friendly websites
              that leave a lasting impression on viewers.
            </div>
            <p>If I am a</p>
            <Row>
              <Col sm={12} md={12}>
                <div
                  className={`skill-bars ${isScrolled ? "scrolled-h2" : ""}`}
                >
                  <div className="bar">
                    <div className="info">
                      <span>PhotoShop</span>
                    </div>
                    <div className="progress-line html">
                      <span></span>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="info">
                      <span>Premiere Pro</span>
                    </div>
                    <div className="progress-line css">
                      <span></span>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="info">
                      <span>Illustrator</span>
                    </div>
                    <div className="progress-line jquery">
                      <span></span>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="info">
                      <span>AfterEffect</span>
                    </div>
                    <div className="progress-line python">
                      <span></span>
                    </div>
                  </div>
                  {/* <div className="bar">
                    <div className="info">
                      <span>MySQL</span>
                    </div>
                    <div className="progress-line mysql">
                      <span></span>
                    </div>
                  </div> */}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;
