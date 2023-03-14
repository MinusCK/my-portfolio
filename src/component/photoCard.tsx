import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Col, Container, Modal } from "react-bootstrap";
import "./photoCard.css";
import VideoPopup from "./videoPopup";

const PhotoCard = (props: {
  //   key: string;
  title: string;
  description: string;
  imgUrl: any;
  key: string;
  id: string;
  videoUrl: string;
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  // const img = require(props.imgUrl);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  //   const number = props.key;
  const closePopup = () => {
    setShowPopup(false);
  };
  console.log(props.imgUrl);
  return (
    <>
      <Col
        sm={6}
        md={4}
        onClick={() => setShowPopup(true)}
        // className="photocard-flex"
        // key={props.key}
      >
        <div className="proj-imgbx">
          <img src={props.imgUrl} />
          <div className="proj-txtx">
            <h4>{props.title}</h4>
            <span>{props.description}</span>
          </div>
        </div>
      </Col>
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup">
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src={props.videoUrl}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoCard;
