import React, { useState } from "react";
import logo from "./logo.svg";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import tesi_img from "../assets/image/test_img.jpeg";
import { Container, Row } from "react-bootstrap";
import bg from "../assets/image/temp_bg.jpg";
function Footer() {
  return (
    <div className="footer">
      <Container className="">
        <Row className="align-item-center"></Row>
      </Container>
    </div>
  );
}

export default Footer;
