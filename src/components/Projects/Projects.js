import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import quiz from "../../Assets/Projects/quiz.png";
import pdfconvertor from "../../Assets/Projects/pdfconvertor.png";
import super_market from "../../Assets/Projects/super_market.png";
import chatify from "../../Assets/Projects/chatify.png";
import job from "../../Assets/Projects/job.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Snappy Chat"
              description="This is complete web chat application using mongoDb,ReactJS,NodeJS,ExpressJS (MERN tech stack)"
              ghLink="https://github.com/HARSH760781/CHAT_APP"
              demoLink="snappy-chat-z16s.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={job}
              isBlog={false}
              title="Online Job Portal"
              description="This is complete job portal usable for both applicants and recruiters . Here recruiter can post jobs and applicants can apply for jobs with its status."
              ghLink="https://github.com/HARSH760781/Job-Portal"
              demoLink="https://job-portal-8ui6.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={super_market}
              isBlog={false}
              title="Super_Market_APP"
              description="This is an ecommerce website for shopping of yours wish .It allow you to purchase fruits , vegetable and some other products as well.This is complete MERN project."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz APp"
              description="This project is basically a Quiz app where we can learn and test our skills and knowledge and know its status.Here time management also improve"
              ghLink="https://github.com/HARSH760781/Quiz-App"
              demoLink="https://quizgame-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pdfconvertor}
              isBlog={false}
              title="Image to PDF convertor"
              description="This is useful when we required a document in form of pdf but not having in that formate .So we need to convert the image in Pdf ."
              ghLink="https://github.com/HARSH760781/Image-to-Pdf-Convertor"
              demoLink="https://image-to-pdf-convertor.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
