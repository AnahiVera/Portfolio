import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa"

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Anahi Vera Rogel </span>
            from <span className="purple"> Dalcahue, in Chiloe Island, Chile.</span>
            <br />
            I am currently on a journey to consolidate my knowledge, explore, and learn all about Software Development.
            <br />
            I have completed the Full Stack Bootcamp at 4Geeks Academy and hold a Bachelor's Degree in English Teaching and Education.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <FaRegHeart /> Playing Games
            </li>
            <li className="about-activity">
              <FaRegHeart /> Reading
            </li>
            <li className="about-activity">
              <FaRegHeart /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Believe you can and you're halfway there!"{" "}
          </p>
          <footer className="blockquote-footer">Theodore Roosevelt</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
