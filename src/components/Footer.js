import {Container, Row, Col} from 'react-bootstrap';
import {AiFillFacebook, AiFillGithub, AiFillInstagram} from 'react-icons/ai';
import React from 'react';

export const Footer = () => {
  const sizeIcon = 35;
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            Copyright © 2022 DoManh
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/Maybenex1ime">
                <AiFillGithub size = {sizeIcon}/>
              </a>
              <a href="#">
                <AiFillFacebook size = {sizeIcon}/>
              </a>
              <a href="#">
                <AiFillInstagram size = {sizeIcon} />
              </a>
            </div>
            <p>Thank you for attention</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
