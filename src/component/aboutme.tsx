import React, { useState } from "react";
import logo from "./logo.svg";
import "./aboutme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ButtonGroup,
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  ToggleButton,
  Image,
} from "react-bootstrap";
import nav_logo from "../assets/image/logo_24px.png";
import about_me from "../assets/image/about-temp.png";

function AboutMe() {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Photo", value: "1" },
    { name: "Video", value: "2" },
    { name: "Project", value: "3" },
  ];
  return (
    // <ButtonGroup>
    //   {radios.map((radio, idx) => (
    //     <ToggleButton
    //       className="btn-primary"
    //       key={idx}
    //       id={`radio-${idx}`}
    //       type="radio"
    //       variant={idx % 2 ? "outline-success" : "outline-danger"}
    //       name="radio"
    //       value={radio.value}
    //       checked={radioValue === radio.value}
    //       onChange={(e) => setRadioValue(e.currentTarget.value)}
    //       // variant="secondary"
    //     >
    //       {radio.name}
    //     </ToggleButton>
    //   ))}
    // </ButtonGroup>
    <div className="about-me-main">
      <Row>
        <Col xs={7}>
          <h1 className="about-me-main-headline">Hey!I am Minus.</h1>
          <div className="about-me-main-p">
            Hey there, I'm Minus and I'm so excited to welcome you to my
            personal webpage! I'm a [Your Occupation/Field of Study] based in
            [Your Location] and I've been doing my thing for [Number of Years]
            years now. I absolutely love [Your Passion/Interest] and I'm always
            on the lookout for new opportunities to learn and grow. Through this
            webpage, I hope to share my experiences and connect with others who
            share my interests. So grab a cup of coffee and let's dive in!
          </div>
        </Col>
        <Col>
          <Image fluid src={about_me}></Image>
        </Col>
      </Row>
    </div>
  );
}

export default AboutMe;
