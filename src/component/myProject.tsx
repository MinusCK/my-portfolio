import React, { useState } from "react";
import logo from "./logo.svg";
import "./myProject.css";
import "bootstrap/dist/css/bootstrap.min.css";
import proimg1 from "../assets/image/photo/1.png";
import {
  Col,
  Container,
  Nav,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import PhotoCard from "./photoCard";
import colorSharp2 from "../assets/image/color-sharp2.png";
import photo1 from "../assets/image/photo/1.png";
import photo2 from "../assets/image/photo/2.png";
import photo3 from "../assets/image/photo/3.png";
import photo4 from "../assets/image/photo/4.png";
import photo5 from "../assets/image/photo/5.png";
import photo6 from "../assets/image/photo/6.png";
import photo7 from "../assets/image/photo/7.png";
import photo8 from "../assets/image/photo/8.png";

function myProject() {
  const videoProject = [
    {
      title: "20221203 Same Day Edit",
      description: "This is a HK wedding same day edit.",
      imgUrl: require("../assets/image/cover-img/20221203.png"),
      videoUrl: "https://www.youtube.com/embed/vVDSvBdSVj8",
      key: "1",
    },
    {
      title: "20211213 Same Day Edit",
      description: "This is a HK wedding same day edit.",
      imgUrl: require("../assets/image/cover-img/20211213.png"),
      videoUrl: "https://www.youtube.com/embed/EoEJc_seEWg",
      key: "2",
    },
    {
      title: "Wireless charger advertising",
      description: "Product motion grafphic animation",
      imgUrl: require("../assets/image/cover-img/wirelesscharge.png"),
      videoUrl: "https://www.youtube.com/embed/HBqAlNKUwYM",
      key: "3",
    },
    {
      title: "Wireless charger advertising2",
      description: "This is a TVC.",
      imgUrl: require("../assets/image/cover-img/hypercharger.png"),
      videoUrl: "https://www.youtube.com/embed/vVDSvBdSVj8",
      key: "4",
    },
    {
      title: "兇白",
      description: "This a micro film.",
      imgUrl: require("../assets/image/cover-img/microfilm.png"),
      videoUrl: "https://www.youtube.com/embed/KSUaOq4VRac",
      key: "5",
    },
    {
      title: "Fly",
      description:
        "This is a 3D animation is about people want to escape the plant.",
      imgUrl: require("../assets/image/cover-img/fly.png"),
      videoUrl: "https://www.youtube.com/embed/6nIbx0dfhm0",
      key: "6",
    },
  ];

  interface photoProject {
    key: string;
    imgUrl: string;
  }

  const photoProject = [
    { imgUrl: require("../assets/image/photo/1.png"), key: "1" },
    { imgUrl: require("../assets/image/photo/2.png"), key: "2" },
    { imgUrl: require("../assets/image/photo/3.png"), key: "3" },
    { imgUrl: require("../assets/image/photo/4.png"), key: "4" },
    { imgUrl: require("../assets/image/photo/5.png"), key: "5" },
    { imgUrl: require("../assets/image/photo/6.png"), key: "6" },
    { imgUrl: require("../assets/image/photo/7.png"), key: "7" },
    { imgUrl: require("../assets/image/photo/8.png"), key: "8" },
    { imgUrl: require("../assets/image/photo/9.png"), key: "9" },
    // { imgUrl: require("../assets/image/photo/10.png"), key: "10" },
    // { imgUrl: require("../assets/image/photo/11.png"), key: "11" },
  ];
  return (
    <section className="myProject" id="project">
      <Container>
        <Row>
          <Col>
            <h2>My project</h2>
            <p>These are my project!</p>
            <TabContainer id="project-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-center-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first" className="pills-first">
                    Photo
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" className="pills-second">
                    Video
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" className="pills-third">
                    Web Project
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <TabPane eventKey="first">
                  <Row className="photo-row">
                    {photoProject.map((photoProject, key) => {
                      return (
                        <Col sm={6} md={4} key={key} className="photo-col">
                          <img src={`${photoProject.imgUrl}`} />
                        </Col>
                      );
                    })}
                    {/* <img src={proimg1} /> */}
                  </Row>
                </TabPane>
                <TabPane eventKey="second">
                  <Row>
                    {videoProject.map((project, index, key) => {
                      return (
                        <PhotoCard
                          {...project}
                          key={project.key}
                          id={project.key}
                        />
                      );
                    })}
                  </Row>
                </TabPane>
                <TabPane eventKey="third">
                  <Row>empty</Row>
                </TabPane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
}

export default myProject;
