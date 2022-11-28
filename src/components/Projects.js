import {Container, Row, Col, Tab, Nav} from 'react-bootstrap';
import {ProjectCard} from './ProjectCard';
import projImg1 from '../assets/img/xiangqi.png';
import projImg2 from '../assets/img/59876.jpg';
import projImg3 from '../assets/img/ai.png';
import projImg4 from '../assets/img/Lillusion.png';
import projImg5 from '../assets/img/Emotion-Detection.png';
import projImg6 from '../assets/img/to-do.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from 'react';

export const Projects = () => {
  // eslint-disable-next-line camelcase
  const personalProjects = [
    {
      title: 'XiangQi',
      description: 'A digital version of chines chess',
      imgUrl: projImg1,
      link: 'https://github.com/Maybenex1ime/Something_Personal',
    },
    {
      title: 'Multimedia',
      description: 'A project, through which you can learn how ' +
          'to create videos with effects and sound',
      imgUrl: projImg2,
      link: 'https://drive.google.com/drive/folders/1yHafxMJzN5mcvrmdEaaEyT5RpenVEWDj',
    },
    {
      title: 'AI Systems',
      description: 'Includes five experimentals works, ' +
          'which help learn basic AI',
      imgUrl: projImg3,
      link: 'https://github.com/Maybenex1ime/AI_System_ITMO',
    },
  ];

  const groupProject = [
    {
      title: 'Lillusion',
      description: 'An action role-playing game with a non-linear plot choice',
      imgUrl: projImg4,
      link: 'https://store.steampowered.com/app/1937300/Lillusion/',
    },
    {
      title: 'Emotion Detection',
      description: 'A trained CNN classifier model be used to ' +
          'predicted the various types of emotions of human',
      imgUrl: projImg5,
    },
    {
      title: 'To-do list app',
      description: 'Simple app, where you can plan and tasks in detail',
      imgUrl: projImg6,
      link: 'https://github.com/hieuminhvuu/Alien_list',
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({isVisible}) =>
                <div className={isVisible ?
                    'animate__animated animate__fadeIn': ''}>
                  <h2>Projects</h2>
                  <p>Here are some projects i&apos;ve worked on</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills"
                      className="nav-pills mb-5 justify-content-center
                      align-items-center"
                      id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Personal Project</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Group Project</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ?
                        'animate__animated animate__slideInUp' : ''}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            personalProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              );
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            groupProject.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              );
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
    </section>
  );
};
