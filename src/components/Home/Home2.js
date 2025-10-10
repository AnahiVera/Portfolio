import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
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
              I’m a bilingual (English/Spanish) <b className="purple">Full Stack Developer</b> certified by 4Geeks Academy and currently deepening my knowledge through the <b className="purple">Full Stack Open</b> program by the University of Helsinki.
              <br />
              <br />
              My background as an English teacher and administrative professional strengthened my <b className="purple">organization</b>, <b className="purple">communication</b>, and <b className="purple">teamwork</b> skills — which now complement my technical experience in <b className="purple">web development</b>.
              <br />
              <br />
              I’ve contributed to product improvement at <b className="purple">Hoktus</b>, developing RESTful APIs with <b className="purple">NestJS</b>, enhancing <b className="purple">responsive interfaces</b> with React and TailwindCSS, and optimizing user experience across platforms.
              <br />
              <br />
              My current stack includes <b className="purple">JavaScript, React, NestJS, Node.js, TypeScript, Express, SQL, MongoDB, Python</b> and <b className="purple">Flask</b>, with hands-on experience in <b className="purple">JWT authentication</b> and <b className="purple">Firebase</b> for document and storage.
              <br />
              <br />
              I enjoy creating <b className="purple">user-friendly, efficient applications</b> that merge functionality with attractive design. My goal is to keep growing as a developer and contribute to <b className="purple">innovative, impactful projects</b>.
              <br />
              <br />
              If you’re looking for someone adaptable, collaborative, and a team player, let’s connect!
            </p>
          </Col>


          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                style={{ width: '600px', height: '600px' }}
                alt="avatar"
              />
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
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/anacohi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
