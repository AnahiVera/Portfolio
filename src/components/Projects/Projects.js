import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Game from "../../Assets/Projects/tic-tac-toe.png";
import emotion from "../../Assets/Projects/emotion.png";

import Bgame from "../../Assets/Projects/battleship.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Galaxy from "../../Assets/Projects/Galaxy.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Galaxy}
              isBlog={false}
              title="Star Wars Blog"
              description="The Star Wars Blog project is a React-based application that fetches and displays data from the Star Wars API (SWAPI). It features a dynamic user interface where users can learn about their favorite Star Wars characters, planets, and starships. Each item has its dedicated details page, styled with Bootstrap and custom CSS to enhance the visual appeal. The blog's functionalities include seamless navigation, responsive design, and the ability to bookmark or favorite items for quick access."
              ghLink="https://github.com/AnahiVera/Starwars-blog"
              demoLink="https://starwars-blog-ruby.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Game}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="Interactive Game Tic-Tac-Toe project is a React-based application that allows two players to select their symbols (X or O), input their names, and compete on an interactive game board. The game consists of three main components: Square (individual cells), Board (the grid structure), and Game (manages player interactions and game logic)."
              ghLink="https://github.com/AnahiVera/TicTiacToe"
              demoLink="https://tic-tac-toe-kappa-tawny-22.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bgame}
              isBlog={false}
              title="Battleship Game"
              description="The Battleship game is a React-based application where players compete against the CPU in a classic naval strategy game. Ship Placement involves random positioning on both the player's and CPU's boards at the start of each turn. Turns and Attacks are interactive, allowing the player to click on the CPU's board to attack, followed by the CPU's randomized counterattack. Victory and Game Over states are clearly marked with popup messages, celebrating the winner or signaling the end of the gamee"
              ghLink="https://github.com/AnahiVera/BattleShipGame"
              demoLink="https://battle-ship-game-omega.vercel.app/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
