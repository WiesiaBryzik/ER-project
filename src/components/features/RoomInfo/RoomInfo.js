import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './RoomInfo.module.scss';


class RoomInfo extends React.Component {
  render() {

    const { id, image, name, cost, person, difficulty, time } = this.props;
    return (
      <Link to={`room/${id}`} className={styles.link}>
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
  }
}

RoomInfo.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  cost: PropTypes.number,
  time: PropTypes.string,
  person: PropTypes.string,
  difficulty: PropTypes.string,
  intro: PropTypes.string,
  description: PropTypes.string,
  record: PropTypes.number,
};

export default RoomInfo;
