import React from 'react';
import PropTypes from 'prop-types';
import RoomInfo from '../RoomInfo/RoomInfo';
import { Row, Col } from 'react-flexbox-grid';
import styles from './RoomsList.module.scss';


const RoomsList = ({ rooms }) => (

  <Row>
    {rooms.map(room => (
      <Col key={rooms.id} xs={12} sm={6} lg={2} className={styles.column}>

        <RoomInfo {...room} />
      </Col>

    ))
    }
  </Row>
);

RoomsList.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.PropTypes.string,
      name: PropTypes.string,
      intro: PropTypes.string,
      description: PropTypes.string,
      room: PropTypes.object,
      record: PropTypes.number,
    }),
  ),
};

export default RoomsList;
