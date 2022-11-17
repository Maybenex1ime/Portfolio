import { Container, Row, Col } from "react-bootstrap";
import {AiFillFacebook, AiFillGithub, AiFillInstagram} from "react-icons/ai";

export const Footer = () => {
  const size_icon = 35;
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
                <AiFillGithub size = {size_icon}/>
              </a>
              <a href="#">
                <AiFillFacebook size = {size_icon}/>
              </a>
              <a href="#">
                <AiFillInstagram size = {size_icon} />
              </a>
            </div>
            <p>Thank you for attention</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
