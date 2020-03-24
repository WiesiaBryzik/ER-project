import React from 'react';
import PropTypes from 'prop-types';

// import clsx from 'clsx';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

// import styles from './Carousel.module.scss';

const Component = ({ image1, image2, image3 }) => (
  <Carousel>

    <Carousel.Item>
      <img className="d-block w-100" src={image1} alt="First slide" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img className="d-block w-100" src={image2} alt="Second slide" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img className="d-block w-100" src={image3} alt="Third slide" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

Component.propTypes = {
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  image4: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Carousel,
  // Container as Carousel,
  Component as CarouselComponent,
};
