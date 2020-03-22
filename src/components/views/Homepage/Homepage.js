import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';


import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    {/* <h2>Escape Room</h2> */}
    <div className={styles.component}>
      <img alt='tytuł obrazka' className={styles.image} src='https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
      <span>Jesteśmy tu dla Was!</span>
    </div>
    <Grid>
      <Row between="md" middle="xs">
        <Col md={3} lg={5}>
          <p> Escape Room to rozrywka dla każdego! Spróbuj i Ty!  <br/>Wskocz w sam środek przygody, która wciągnie Cię na całego!  <br/> Zagarnij grupę znajomych i zmierz się ze swoimi ograniczeniami!</p>
        </Col>
        <Col md={3} lg={5}>
          <span> Zagadki, zagadki, wszędzie zagadki! <br/> Szukaj i znajduj! <br/> Myśl i wpadaj na pomysły! <br/>Rozwiązuj i próbuj!</span>
        </Col>
      </Row>
    </Grid>{children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
