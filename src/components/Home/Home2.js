import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
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
              I discovered my passion for programming while exploring web technologies and software development. 🖥️✨
              <br />
              <br />I have experience in core technologies like
              <i>
                <b className="purple"> HTML, CSS, JavaScript, Python, and React.js, and I'm expanding my knowledge with tools like Docker and Flask. </b>
              </i>
              <br />
              <br />
              My interests lie in creating intuitive and modern web applications, such as &nbsp;
              <i>
                <b className="purple">interactive games and dynamic user interfaces </b>. I am deeply interested in learning and exploring {" "}
                <b className="purple">
                  Quality Assurance (QA) practices.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I channel my creativity into developing responsive, user-friendly projects, incorporating frameworks like <b className="purple"> Bootstrap and React</b>
              <i>
                <b className="purple">
                  {" "}
                  
                </b>
              </i>
              &nbsp; and ensuring my designs
              <i>
                <b className="purple">  have a polished aesthetic</b>
              </i>
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
