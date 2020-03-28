import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import PageTitle from '../../common/PageTitle/PageTitle';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Cart.module.scss';

const Component = ({ name }) => (
  <Grid>
    <Row>
      <Col xs={12} sm={6} lg={8} >
        <PageTitle text='Koszyk' />
        <div className={styles.cart}>
          <table>
            <td>
              <tr>Nazwa produktu</tr>
              <tr>name {name}</tr>
            </td>
            <td>
              <tr> Cena</tr>
              <tr> 123zł</tr>
            </td>
            <td>
              <tr> Ilość</tr>
              <tr> 3szt</tr>
            </td>
            <td>
              <tr>Suma</tr>
              <tr>Ilość x cena</tr>
            </td>
          </table>
        </div>
      </Col>
    </Row>
  </Grid>


);

Component.propTypes = {
  name: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Cart,
  // Container as Cart,
  Component as CartComponent,
};
