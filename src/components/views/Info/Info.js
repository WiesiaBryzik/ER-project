import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Info.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <h2>Info</h2>
    <p> Budujemy tę stronę dla Ciebie! Wróć za jakiś czas. </p>
    {children}
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
  Component as Info,
  // Container as Info,
  Component as InfoComponent,
};
