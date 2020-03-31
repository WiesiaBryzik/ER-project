import React from 'react';
import PropTypes from 'prop-types';

import PageTitle from '../../common/PageTitle/PageTitle';
import RoomsList from '../../features/RoomsList/RoomsList';

import { Grid, Row, Col } from 'react-flexbox-grid';

import { connect } from 'react-redux';
import { getAllRooms, loadRoomsRequest, getRequest } from '../../../redux/roomRedux.js';

// import styles from './Rooms.module.scss';

class Component extends React.Component {

  componentDidMount() {
    const { loadRooms } = this.props;
    loadRooms();
  }

  render() {
    const { rooms } = this.props;
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <PageTitle text='Nasze pokoje' />
          </Col>
        </Row>
        <RoomsList rooms={rooms} />
      </Grid>
    );
  }
}

Component.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
      time: PropTypes.string.isRequired,
      person: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
    }),
  ),
  loadRooms: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  rooms: getAllRooms(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadRooms: () => dispatch(loadRoomsRequest()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Rooms,
  Container as Rooms,
  Component as RoomsComponent,
};
