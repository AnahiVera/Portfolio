import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> TELL YOU </span> ABOUT MYSELF
            </h1>
            <p className="home-about-body">
              A bilingual (English/Spanish) <b className="purple">Full Stack Developer</b> transitioning from administrative roles to tech, I thrive where <b className="purple">logic meets creativity</b>.
              <br />
              <br />With training in
              <i>
                <b className="purple"> JavaScript, React, Python, Flask, Node.js, Express, SQL, and MongoDB </b>
              </i>
              and currently expanding my knowledge in
              <i>
                <b className="purple"> REST APIs, JWT authentication, and Docker</b>.
              </i>
              <br />
              <br />
              I enjoy building functional apps while deepening my understanding of <b className="purple">backend systems and QA practices</b>. My past experience in organization and teaching sharpened my <b className="purple">attention to detail</b> and <b className="purple">ability to collaborate</b> — skills I now apply to writing clean code and debugging.
              <br />
              <br />
              What sets me apart is my combination of technical skills and experience in <b className="purple">communication</b> and <b className="purple">project coordination</b>. I understand how to optimize processes and enhance user experience — not just through code but by addressing real user needs.
              <br />
              <br />
              Whenever possible, I channel my creativity into developing <b className="purple">responsive, user-friendly projects</b>, incorporating frameworks like <b className="purple">Bootstrap and React</b> and ensuring my designs have a <b className="purple">polished aesthetic</b>.
              <br />
              <br />
              I'm currently seeking opportunities where I can merge my <b className="purple">passion for technology</b> with my <b className="purple">problem-solving skills</b> to deliver efficient solutions. If you're looking for someone with a <b className="purple">growth mindset</b>, <b className="purple">technical curiosity</b>, and a <b className="purple">unique perspective</b> on web development, let's connect!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AnahiVera"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anahi-vera-rogel/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/anacohi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
