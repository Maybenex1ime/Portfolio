import {Col, Button} from 'react-bootstrap';
import React from 'react';
import {string} from 'prop-types';

export const ProjectCard = ({title, description, imgUrl, link, alt}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={alt}/>
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
  );
};

ProjectCard.propTypes={
  title: string,
  description: string,
  imgUrl: string,
  link: string,
  alt: string,
};

ProjectCard.defaultProps = {
  title: {},
  description: {},
  imgUrl: {},
  link: {},
  alt: {},
};
