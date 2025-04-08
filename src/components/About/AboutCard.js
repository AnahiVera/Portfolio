import React from "react";
import Card from "react-bootstrap/Card";

import { FaRegHeart } from "react-icons/fa"

function AboutCard() {
  return (
    <Card className="quote-card-view">
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p style={{ textAlign: "justify" }}>
        Hi everyone, I am <span className="purple"> Anahi Vera Rogel </span>
        from <span className="purple"> Dalcahue, in Chiloe Island, Chile.</span>
        <br />
        I am currently on a journey to consolidate my knowledge, explore, and learn all about Software Development.
        <br />
        I have completed the Full Stack Bootcamp at 4Geeks Academy and hold a Bachelor's Degree in English Teaching and Education.
        <br />
        <br />
        </p>
        <span className="purple">What drives me in tech:</span>
        <ul>
          <li className="about-activity">
            <FaRegHeart /> Solving real problems through code
          </li>
          <li className="about-activity">
            <FaRegHeart /> Creating intuitive user experiences
          </li>
          <li className="about-activity">
            <FaRegHeart /> The endless learning possibilities
          </li>
        </ul>
        
        <span className="purple">My current tech focus:</span>
        <ul>
          <li className="about-activity">
            <FaRegHeart /> Building projects with React & Node.js
          </li>
          <li className="about-activity">
            <FaRegHeart /> Learning backend architecture
          </li>
          <li className="about-activity">
            <FaRegHeart /> Exploring QA methodologies
          </li>
        </ul>
        
        <span className="purple">Apart from coding, some other activities that I love to do!</span>
        <ul>
          <li className="about-activity">
            <FaRegHeart /> Playing Games (both video & board games)
          </li>
          <li className="about-activity">
            <FaRegHeart /> Reading fantasy and sci-fi novels
          </li>
                    <li className="about-activity">
            <FaRegHeart /> Traditional Chilean cooking
          </li>
        </ul>

        <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
          "Believe you can and you're halfway there!"{" "}
        </p>
        <footer className="blockquote-footer">Theodore Roosevelt</footer>
        
        
      </blockquote>
    </Card.Body>
</Card>
  );
}

export default AboutCard;
