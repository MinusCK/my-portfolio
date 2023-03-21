import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./aboutme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Image, Container } from "react-bootstrap";
import nav_logo from "../assets/image/logo_24px.png";
import about_me from "../assets/image/about-temp.png";
import { CameraReels, Motherboard, Soundwave } from "react-bootstrap-icons";

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
            {/* <p>If I am a</p> */}
            {/* <Row>
              <Col sm={12} md={12}> */}
            <div className="wrapper">
              <div className="center-line">
                <a href="#" className="scroll-icon">
                  <i className="fas fa-caret-up"></i>
                </a>
              </div>
              <div className="row row-1">
                <section>
                  <i className="icon fas fa-home">
                    <CameraReels className="timeline-icon-color" />
                  </i>

                  <div className="details">
                    <span className="title">Become a wedding Videographer</span>
                    <div style={{ flex: "1" }}></div>
                    <span style={{ color: "black" }}>
                      Jan
                      <br />
                      2015
                    </span>
                  </div>
                  <p className="time-line-p">
                    In 2015, I became a photographer with a passion for helping
                    newlyweds capture the happiest moments of their big day. As
                    a photographer, I understood the importance of creating
                    beautiful memories that would last a lifetime. I was
                    dedicated to using my technical and artistic skills to
                    capture the emotions, personalities, and unique love stories
                    of each couple.
                  </p>
                </section>
              </div>
              <div className="row row-2">
                <section>
                  <i className="icon fas fa-star">
                    <Motherboard className="timeline-icon-color" />
                  </i>
                  <div className="details">
                    <span className="title">
                      Graduate from City University of Hong Kong
                    </span>
                    <span style={{ color: "black" }}>
                      May
                      <br />
                      2018
                    </span>
                  </div>
                  <p className="time-line-p">
                    As a student of Creative Media, I have gained knowledge in
                    both multimedia and computer science. The program has
                    equipped me with technical skills and tools necessary to
                    create innovative and interactive media content. Through my
                    studies, I have learned how to merge creativity and
                    technology, and how to use coding to enhance digital media
                    projects.
                  </p>
                </section>
              </div>
              <div className="row row-1">
                <section>
                  <i className="icon fas fa-rocket">
                    <Soundwave className="timeline-icon-color" />
                  </i>
                  <div className="details">
                    <span className="title">Become a Media Specialist</span>
                    <span style={{ color: "black", alignItems: "right" }}>
                      Feb <br />
                      2021
                    </span>
                  </div>
                  <p className="time-line-p">
                    As a Media Specialist, my job involves creating product
                    introduction videos and occasionally modifying website
                    content and product descriptions for the company. I also
                    have experience in the field of marketing and apply this
                    knowledge to my work. This dynamic role allows me to combine
                    my skills in media production, web design, and marketing to
                    effectively communicate the company's message and promote
                    its products.
                  </p>
                </section>
              </div>
              <div className="row row-2">
                <section>
                  <i className="icon fas fa-globe"></i>
                  <div className="details">
                    <span className="title">Become a Junior Web Developer</span>
                    <span style={{ color: "black", alignItems: "right" }}>
                      Jun
                      <br />
                      2022
                    </span>
                  </div>
                  <p className="time-line-p">
                    As a web developer, I specialize in building websites using
                    React.js and creating UI based on the designs of UI/UX
                    designers. I am skilled in collaboration and communication
                    with designers to ensure that their vision is accurately
                    translated into functional and aesthetically pleasing web
                    pages.
                  </p>
                </section>
              </div>
            </div>
            {/* </Col>
            </Row> */}
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
