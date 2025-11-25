import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Game from "../../Assets/Projects/tic-tac-toe.png";
import retro from "../../Assets/Projects/reproductor.png";
import Bgame from "../../Assets/Projects/battleship.png";
import Flash from "../../Assets/Projects/FlashJobs.png";
import Galaxy from "../../Assets/Projects/starwars.png"
import weather from "../../Assets/Projects/weatherApp.png"
import phonebook from "../../Assets/Projects/Phonebook.png"
import forms from "../../Assets/Projects/imgForms.png"

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

        <p style={{ color: "gray" }}>“A slow beginning still takes you farther than standing still.”</p>


        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          


        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forms}
              isBlog={false}
              title="Personalized Forms"
              description=
              "This module was one of the several components I developed while working at Hoktus. It enables the creation of fully customizable forms for flows such as login, registration, and other internal processes. It supports multi-page structures, and each page can include various field types: free-text inputs, titles, descriptions, checkboxes, multi-select options, predefined inputs, date pickers, email, password, address fields, and more. Each field includes its own data validation, configuration options, and the ability to mark it as required, providing the company with a flexible and scalable tool for building tailored form experiences.The module was implemented using React, Tailwind CSS, ui.shadcn, and custom CSS to deliver a clean, modern and consistent UI.."
              demoLink="https://drive.google.com/drive/u/0/folders/1W0Hou5XIq4vtofZTLCG7ilfVPWQTNuvI" 
            />
          </Col>
          



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phonebook}
              isBlog={false}
              title="Phonebook with MongoDB"
              description="This full-stack Phonebook Application combines a React frontend with a Node.js/Express backend to deliver a complete contact management solution. It demonstrates modern web development practices including RESTful API design (Express.js), database integration (MongoDB/Mongoose), and responsive UI development (React with Bootstrap). The system features CRUD operations with real-time search, form validation, and toast notifications, deployed on Render with optimized production builds"
              ghLink="https://github.com/AnahiVera/PhoneBook-Backend"
              demoLink="https://phonebook-backend-cfo1.onrender.com/" 
            />
          </Col>

          
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Flash}
              isBlog={false}
              title="Flash Jobs Web Application"
              description="Flash Jobs, is a comprehensive web application designed to connect job seekers and employers seamlessly. On the front end, it utilizes Bootstrap for responsive design, SweetAlert for user-friendly notifications, JavaScript, and React for interactive and dynamic user experiences. The back end is powered by Python with Flask, using SQLAlchemy for database management and Flask-JWT Extended for secure user authentication. Docker ensures a containerized environment for efficient deployment, and PostgreSQL serves as the robust relational database. Additionally, the integration with Cloudinary enhances the application by enabling streamlined media and image handling"
              ghLink="https://github.com/AnahiVera/flash-jobs-final-project/tree/master"
              demoLink="https://drive.google.com/file/d/15xGQah79CoFRioM9kLUNaB1KOoueguXD/view?usp=sharing" 
            />
          </Col>

          
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={retro}
              isBlog={false}
              title="Music Player"
              description="The Music Player project is a React application that delivers an intuitive and engaging audio experience. It features a list of songs fetched from an API, allowing users to play, pause, and navigate between tracks. Upon loading the page, the player starts playing the first song by default. Additional functionalities include a volume control slider, a shuffle mode for random playback, and a timeline slider to track progress and seek specific song parts. Styled with a neon gaming aesthetic, the music player blends functionality with a fun design for a modern and user-friendly interface."
              ghLink="https://github.com/AnahiVera/music-player-react"
              demoLink="https://music-player-react-pi.vercel.app/"
            />
          </Col>

        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="This project is a React-based application that allows users to check current weather conditions for different locations. It fetches weather data from an external API and displays information like temperature, humidity, wind speed, and weather conditions. It includes features such as dynamic search functionality, map display of location and responsive design for usability across devices."
              ghLink="https://github.com/AnahiVera/WeatherApp"
              demoLink="https://weather-app-nu-navy.vercel.app/"      
            />
          </Col> 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
