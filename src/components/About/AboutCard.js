import React from "react";
import Card from "react-bootstrap/Card";

import { FaRegHeart } from "react-icons/fa"

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I’m <span className="purple">Anahi Vera Rogel</span> from
            <span className="purple"> Dalcahue, Chiloé Island, Chile.</span>
            <br />
            I’m a Full Stack Developer passionate about building meaningful, user-focused applications.
            After completing the Full Stack Bootcamp at <b className="purple">4Geeks Academy</b> and gaining
            hands-on experience at <b className="purple">Hoktus</b>, I’ve consolidated a foundation in modern web technologies and agile collaboration.
            <br />
            <br />
            I’m now focused on deepening my technical expertise, contributing to long-term projects, and
            continuously growing toward becoming a <b className="purple">better developer</b> capable of leading
            and mentoring others. I love environments that challenge me to learn, adapt, and deliver
            scalable, maintainable solutions.
          </p>

          <span className="purple">What drives me in tech:</span>
          <ul className="text-center">
            <li className="about-activity text-center">
              <FaRegHeart /> Solving real-world problems through code
            </li>
            <li className="about-activity text-center">
              <FaRegHeart /> Designing clean, intuitive user experiences
            </li>
            <li className="about-activity text-center">
              <FaRegHeart /> Growing through constant learning and collaboration
            </li>
          </ul>

          <span className="purple">My current tech focus:</span>
           <ul className="text-center">
            <li className="about-activity text-center">
              <FaRegHeart /> Building full-stack applications with React & Node.js
            </li>
            <li className="about-activity text-center">
              <FaRegHeart /> Strengthening backend architecture and API design
            </li>
            <li className="about-activity text-center">
              <FaRegHeart /> Improving code quality through testing and best practices
            </li>
          </ul>

          <span className="purple">Outside of tech, I enjoy:</span>
           <ul className="text-center">
            <li className="about-activity text-center">
              <FaRegHeart /> Playing games (video and board)
            </li>
            <li className="about-activity text-center">
              <FaRegHeart /> Gardening, especially growing my own vegetables
            </li>
            <li className="about-activity text-center">
              <FaRegHeart /> Cooking/eating traditional Chilean recipes
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
            "The expert in anything was once a beginner!"
          </p>
          <footer className="blockquote-footer">Helen Hayes</footer>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
