import React from 'react';
import PropTypes from 'prop-types';

import PageTitle from '../../common/PageTitle/PageTitle';
import RoomInfo from '../../features/RoomInfo/RoomInfo';

import { Grid, Row, Col } from 'react-flexbox-grid';

import { connect } from 'react-redux';
import { getAllRooms } from '../../../redux/roomsRedux.js';

// import styles from './Rooms.module.scss';

const Component = ({ rooms }) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <PageTitle text='Nasze pokoje' />
        <Row>
          { rooms.map(room => (
            <RoomInfo key={room.id} {...room} />
          ))}
        </Row>
      </Col>
    </Row>
  </Grid>

);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  rooms: PropTypes.array,
};

const mapStateToProps = state => ({
  rooms: getAllRooms(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps )(Component);

export {
  // Component as Rooms,
  Container as Rooms,
  Component as RoomsComponent,
};
