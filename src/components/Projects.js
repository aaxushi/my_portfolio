import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/bnb.jpeg";
import projImg5 from "../assets/img/trek.jpeg";
import projImg6 from "../assets/img/cc.jpeg";
import projImg7 from "../assets/img/pr.jpeg";
import projImg8 from "../assets/img/fb.jpeg";
import projImg9 from "../assets/img/wt.jpeg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  // Define different arrays of projects for each eventKey
  const experienceProjects = [
    {
      title: "ResQDrone |",
      description: "Drone Management Portal",
      imgUrl: projImg1,
    },
    {
      title: "VNAB |",
      description: "Finance Tracker for Vitians",
      imgUrl: projImg2,
    },
    {
      title: "CoNetra |",
      description: "Extensive Covid Data Visualization",
      imgUrl: projImg3,
    },
  ];

  const clubsProjects = [
      {
        title: "Senior Core Member |",
        description: "Bulls & Bears Club",
        imgUrl: projImg4,
      },
      {
        title: "Events Coordinator |",
        description: "Trekking Club",
        imgUrl: projImg5,
      },
      {
        title: "Junior Core  Member |",
        description: "Creativity Club",
        imgUrl: projImg6,
      },
  ];

  const awardsProjects = [
    {
      title: "Program Representative |",
      description: "2022-23 & 2023-24",
      imgUrl: projImg7,
    },
    {
      title: "Winners of Football Tounament |",
      description: "CM Trophy ,CMC",
      imgUrl: projImg8,
    },
    {
      title: "Best Women's Team |",
      description: "Women Techies Hackathon",
      imgUrl: projImg9,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Awards & Scholarships</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Clubs & Chapters</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Experience</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          awardsProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          clubsProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          experienceProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
