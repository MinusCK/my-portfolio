import React, { useEffect, useState } from "react";
import "./banner.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/image/header-img.svg";
import headerImg2 from "../assets/image/header-img2.jpg";
import headerImg3 from "../assets/image/header-img3.jpg";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Photographer", "Videographer", "Web Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-center">
          <Col xs={12} md={12} xl={12}>
            <span className="tagline">Welcome</span>
            <div className="banner-my-name">
              <div className="my-name">{`Yooo!I am Minus~`}</div>
            </div>
            <br />
            <h1>
              <span className="wrap">
                I am a <br />
                <span
                  style={
                    loopNum === 0
                      ? { fontFamily: "ChenYuluoyan" }
                      : loopNum === 1
                      ? { fontFamily: "Froxima" }
                      : { fontFamily: "FiraCode" }
                  }
                >
                  {text}
                </span>
                |.
              </span>
            </h1>
            <p>
              Hey there, I'm Minus and I'm so excited to welcome you to my
              personal webpage!
            </p>
          </Col>
          {/* <Col xs={12} md={6} xl={5}>
            <img src={headerImg3} alt="header_img"></img>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
