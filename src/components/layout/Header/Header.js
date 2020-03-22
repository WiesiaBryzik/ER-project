import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';
import { NavLink, Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';


class Component extends React.Component {

  static propTypes = {
    // children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const className = this.props;
    return (
      <header className={styles.component}>
        <Grid>
          <Row between="md" middle="xs">
            <Col md={3} lg={4}>
              <Link to='/'>
                <div className={clsx(className, styles.root)}>
                  <span className={styles.name}> Key to Adventure</span>
                  {/* {children} */}
                </div>
              </Link>
            </Col>
            <Col md={6}>
              <nav>
                <NavLink to='/rooms' activeClassName='active'>Pokoje</NavLink>
                <NavLink to='/costs' activeClassName='active'>Cennik</NavLink>
                <NavLink to='/vouchers' activeClassName='active'>Vouchery</NavLink>
                <NavLink to='/info' activeClassName='active'>Kontakt</NavLink>
              </nav>
            </Col>
            <Col md={3} lg={2}>
              <nav className={styles.cart}>
                <NavLink to='/cart' activeClassName='active'>Cart</NavLink>
              </nav>
            </Col>
          </Row>
        </Grid>
      </header>
    );
  }
}

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
