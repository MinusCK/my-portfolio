import React, { useState } from "react";

import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import tesi_img from "../assets/image/test_img.jpeg";
import { Col, Container, Row } from "react-bootstrap";
import bg from "../assets/image/temp_bg.jpg";
import logo from "../assets/image/logo.png";
import nav_icon1 from "../assets/image/nav-icon1.svg";
import nav_icon2 from "../assets/image/nav-icon2.svg";
import nav_icon3 from "../assets/image/nav-icon3.svg";
function Footer() {
  return (
    <div className="footer">
      <Container className="">
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="logo" className="footer-logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
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
            <p>CopyRight 2023. All Right Reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
