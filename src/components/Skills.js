import meter1 from '../assets/img/English-icon.png';
import meter2 from '../assets/img/critical.png';
import meter3 from '../assets/img/collaboration.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Col} from 'react-bootstrap';
import {
  DiJava,
  DiJavascript1,
  DiPython,
  DiCss3, DiHtml5, DiGithub,
  DiTerminal, DiPostgresql,
} from 'react-icons/di';
import {
  SiDiscord,
  SiCplusplus,
  SiTensorflow,
  SiCsharp,
} from 'react-icons/si';
import React from 'react';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {max: 4000, min: 3000},
      items: 5,
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 3,
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 2,
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Programing Languages</h2>
              <p>I have learnt and have such a fluent skill on different
                <span className="main-name"> programming languages </span>
                            like         </p>
              <Carousel responsive={responsive} infinite={true}
                className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <Col xs={4} md={2} className="tech-icons">
                    <DiJava />
                    <h5>Java</h5>
                  </Col>
                </div>
                <div className="item">
                  <Col xs={4} md={2} className="tech-icons">
                    <DiJavascript1 />
                    <h5>Javascript</h5>
                  </Col>
                </div>
                <div className="item">
                  <Col xs={4} md={2} className="tech-icons">
                    <DiCss3/>
                    <h5>Css</h5>
                  </Col>
                </div>
                <div className="item">
                  <Col xs={4} md={2} className="tech-icons">
                    <DiHtml5/>
                    <h5>HTML</h5>
                  </Col>
                </div>
                <div className="item">
                  <Col xs={4} md={2} className="tech-icons">
                    <DiPython/>
                    <h5>Python</h5>
                  </Col>
                </div>
                <div className="item">
                  <Col xs={4} md={2} className="tech-icons">
                    <SiCplusplus/>
                    <h5>C++</h5>
                  </Col>
                </div>
                <div className="item">
                  <Col xs={4} md={2} className="tech-icons">
                    <SiCplusplus/>
                    <h5>C++</h5>
                  </Col>
                </div>
                <div className="item">
                  <Col xs={4} md={2} className="tech-icons">
                    <SiCsharp/>
                    <h5>C#</h5>
                  </Col>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <p></p>
      <p></p>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Tools</h2>
              <p>Beside that, i have acquainted with some
                <span className="main-name"> tools </span>
                            like</p>
              <Carousel responsive={responsive} infinite={true}
                className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <Col className="tech-icons">
                    <DiGithub />
                    <h5>Github</h5>
                  </Col>
                </div>
                <div className="item">
                  <Col className="tech-icons">
                    <SiTensorflow />
                    <h5>TensorFlow</h5>
                  </Col>
                </div>
                <div className="item">
                  <Col className="tech-icons">
                    <DiTerminal/>
                    <h5>Terminal</h5>
                  </Col>
                </div>
                <div className="item">
                  <Col className="tech-icons">
                    <DiPostgresql/>
                    <h5>PostgresSQL</h5>
                  </Col>
                </div>
                <div className="item">
                  <Col className="tech-icons">
                    <SiDiscord/>
                    <h5>Discord</h5>
                  </Col>
                </div>
              </Carousel>


            </div>
          </div>
        </div>
      </div>
      <p></p>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Soft Skill</h2>
              <p>And finally by participating in the development of projects as
                well as participating in social activities,
                I have developed for myself
              <span className="main-name"> soft skills </span>
                            such as</p>
              <Carousel responsive={responsive} infinite={true}
                className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <Col className="tech-icons" sm={20} md={14}>
                    <img src={meter1} alt="Image" />
                    <h5>English</h5>
                  </Col>
                </div>
                <div className="item">
                  <Col className="tech-icons" sm={20} md={14}>
                    <img src={meter2} alt="Image" />
                    <h5>Critical Thinking</h5>
                  </Col>
                </div>
                <div className="item">
                  <Col className="tech-icons" sm={20} md={14}>
                    <img src={meter3} alt="Image" />
                    <h5>Collaboration</h5>
                  </Col>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
