import {useState, useEffect} from 'react';
import {Container, Row, Col, Nav} from 'react-bootstrap';
import headerImg from '../assets/img/header-img2.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from 'react';
import {Link} from 'react-router-dom';

export const Banner = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [, setIndex] = useState(1);
  const toRotate = ['Game Developer', 'Science Enthusiast', 'Gamer'];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) :
        fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({isVisible}) =>
                  <div className={isVisible ?
                      'animate__animated animate__fadeIn' : ''}>
                    <h1>{`Hi! I'm Manh and currently a `}
                    </h1>
                    <h1>
                      <span className="txt-rotate main-name"
                        data-rotate='[ "Game Developer",
                        "Science Enthusiast",
                        "Student" ]'>
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>My fullname is Do Duong Manh. I&apos;m 21 years old.
                      I am currently study at ITMO University.
                      And I am also a part time game developer.
                    With my fluent skill in
                    <span className="main-name"> C++, Java and C#</span>
                      and my wide knowledge in game design,
                      It would be pleased to me to share
                      my passion and apply them to your interesting products
                    </p>
                    <button size={25} >
                      <Nav.Link as = {Link} to="/skills"
                        className={activeLink === 'skills' ?
                            'active navbar-link' : 'navbar-link'}
                        onClick={() => onUpdateActiveLink('skills')}
                      >
                        <span className="tagline">
                          Let’s Find more about me</span>
                      </Nav.Link>
                    </button>

                  </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({isVisible}) =>
                  <div className={isVisible ?
                      'animate__animated animate__zoomIn' : ''}>
                    <img src={headerImg} alt="Header Img"/>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
