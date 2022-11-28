import {Col, Button} from 'react-bootstrap';
import React from 'react';
import object from 'prop-types';

export const ProjectCard = ({title, description, imgUrl, link}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={'url'}/>
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
  title: object,
  description: object,
  imgUrl: object,
  link: object,
};

ProjectCard.defaulProps = {
  title: {},
  description: {},
  imgUrl: {},
  link: {},
};
