import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "./component/navbar";
import Main from "./component/main";
import AboutMe from "./component/aboutme";
import MyProject from "./component/myProject";
import Banner from "./component/banner";
import Footer from "./component/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe />
      <MyProject />
      <Footer />
      {/* <Main />
        <AboutMe />
        <MyProject /> */}
    </div>
  );
}

export default App;
