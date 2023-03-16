import React, { useState } from "react";
import logo from "./logo.svg";
import "./aboutme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Image, Container } from "react-bootstrap";
import nav_logo from "../assets/image/logo_24px.png";
import about_me from "../assets/image/about-temp.png";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <Container>
        <Row>
          <Col>
            <h2>About me!</h2>
            <p>Let talk about me!</p>
            <p>If I am a</p>
            <Row>
              <Col sm={12} md={12}>
                <div className="skill-bars">
                  <div className="bar">
                    <div className="info">
                      <span>HTML</span>
                    </div>
                    <div className="progress-line html">
                      <span></span>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="info">
                      <span>CSS</span>
                    </div>
                    <div className="progress-line css">
                      <span></span>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="info">
                      <span>jQuery</span>
                    </div>
                    <div className="progress-line jquery">
                      <span></span>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="info">
                      <span>Python</span>
                    </div>
                    <div className="progress-line python">
                      <span></span>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="info">
                      <span>MySQL</span>
                    </div>
                    <div className="progress-line mysql">
                      <span></span>
                    </div>
                  </div>
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
