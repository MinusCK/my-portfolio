import React, { useEffect, useRef, useState } from "react";
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
  // const [isScrolled, setIsScrolled] = useState(false);

  // const ref = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const handleScroll = () => {
  //   if (ref.current) {
  //     const elementTop = ref.current.getBoundingClientRect().top;
  //     const windowHeight = window.innerHeight;
  //     if (elementTop < windowHeight) {
  //       setIsScrolled(true);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const handleScroll = () => {
  //   if (window.scrollY > 0) {
  //     setIsScrolled(true);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // };

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe
      // isScrolled={isScrolled} ref={ref}
      />
      <MyProject />
      <Footer />
      {/* <Main />
        <AboutMe />
        <MyProject /> */}
    </div>
  );
}

export default App;
