import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import PageTitle from '../../common/PageTitle/PageTitle';


import { connect } from 'react-redux';
import { getRoomById } from '../../../redux/roomsRedux.js';


import styles from './Room.module.scss';

const Component = ({ image, name, cost, person, difficulty, time, id, intro, description }) => {
  return (
    <section>
      <Grid>
        <PageTitle text={name} />
        <Row>
          <Col xs={12} sm={6} lg={2} className={styles.column}>
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
          </Col>
          <Col lg={10}>
            <article className={styles.description}>
              <h2>Co to za pokój?</h2>
              <span>{intro}</span>
              <h2>Co Cię tu spotka?</h2>
              <span>{description}</span>
            </article>
          </Col>
        </Row>
      </Grid >
      <Grid>
        <Row>
          <Col xs={12}>
            <PageTitle text='Kup voucher' />
            {/* <OrderForm tripCost={cost} tripName={name} tripId={id} countryCode={country.alpha3Code} /> */}
          </Col>
        </Row>
      </Grid>
    </section>
  );
};

Component.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  person: PropTypes.string,
  cost: PropTypes.string,
  difficulty: PropTypes.string,
  time: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  intro: PropTypes.string,
  description: PropTypes.string,
};

const mapStateToProps = (state, props) => {
  const room = getRoomById(state, props.match.url.slice(6));

  return {
    ...room,
  };
};

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Room,
  Container as Room,
  Component as RoomComponent,
};
