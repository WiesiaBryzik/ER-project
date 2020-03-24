import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './RoomInfo.module.scss';

const RoomInfo = ({ id, image, name, cost, person, difficulty, time }) => (
  <Link to={`/room/${id}`} className={styles.link}>
    <article className={styles.component}>
      <img src={image} alt={name} />
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.details}>
        <span>Ilość: {person} osób</span>
        <span>Poziom: {difficulty}</span>
        <span>Czas: {time} min</span>
        <span> Koszt: {cost}zł </span>
      </div>
    </article>
  </Link>
);

RoomInfo.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
  name: PropTypes.string,
  person: PropTypes.string,
  cost: PropTypes.number,
  difficulty: PropTypes.string,
  time: PropTypes.string,
};

export default RoomInfo;
