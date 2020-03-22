import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './RoomInfo.module.scss';
import { Col } from 'react-flexbox-grid';

const RoomInfo = ({ id, image, name, cost, person, difficulty, time }) => (
  <Col xs={12} sm={6} lg={2} className={styles.column}>
    <Link to={`/room/${id}`} className={styles.link}>
      <article className={styles.component}>
        <img src={image} alt={name} />
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.details}>
          <span>{person} osób</span>
          <span>trudność: {difficulty}</span>
          <span>{time} min</span>
          <span> {cost}zł</span>
        </div>
      </article>
    </Link>
  </Col>
);

RoomInfo.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
  name: PropTypes.string,
  person: PropTypes.string,
  cost: PropTypes.string,
  difficulty: PropTypes.string,
  time: PropTypes.string,
};

export default RoomInfo;
