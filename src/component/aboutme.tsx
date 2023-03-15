import React, { useState } from "react";
import logo from "./logo.svg";
import "./aboutme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Image, Container } from "react-bootstrap";
import nav_logo from "../assets/image/logo_24px.png";
import about_me from "../assets/image/about-temp.png";

function AboutMe() {
  return (
    <section className="about-me">
      <Container>
        <Row>
          <Col>
            <h2>About me!</h2>
            <p>Let talk about me!</p>
            <Row>
              <p>If I am a</p>

              <Col sm={12} md={4}>
                <div className="skill-card">card1</div>
              </Col>
              <Col sm={12} md={4}>
                <div className="skill-card">card1</div>
              </Col>
              <Col sm={12} md={4}>
                <div className="skill-card">card1</div>
              </Col>
              <Col sm={12} md={4}>
                <div className="skill-card">card1</div>
              </Col>
              <Col sm={12} md={4}>
                <div className="skill-card">card1</div>
              </Col>
              <Col sm={12} md={4}>
                <div className="skill-card">card1</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;
