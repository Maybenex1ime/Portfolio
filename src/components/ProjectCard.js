import { Col,Button } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <Button variant="primary" href ={link} >
              <h4>{title}
              </h4>
          </Button>
            <p></p>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
