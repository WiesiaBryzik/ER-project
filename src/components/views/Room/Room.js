import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import PageTitle from '../../common/PageTitle/PageTitle';
import RoomInfo from '../../features/RoomInfo/RoomInfo';

import { connect } from 'react-redux';
import { getRoomById } from '../../../redux/roomsRedux.js';


import styles from './Room.module.scss';
import { Carousel } from '../../features/Carousel/Carousel';

const Component = ({ room, name, intro, description, record }) => {
  return (
    <section>
      <Grid>
        <Row>
          <Col xs={12} sm={6} lg={2} >
          </Col>
          <Col lg={8} className={styles.container}>
            <div className={styles.title}>
              <PageTitle text={name} />
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={6} lg={2}>
            <RoomInfo key={room.id} {...room} />
          </Col>
          <Col lg={8}>
            <article className={styles.description}>
              <h2>Co to za pokój?</h2>
              <span>{intro}</span>
              <h2>Co Cię tu spotka?</h2>
              <span>{description}</span>
            </article>
          </Col>
          <Col className={styles.sticky} xs={12} lg={2} >
            <PageTitle text='Kup voucher na ten pokój' />
            <article className={styles.voucher}>
              <form>
                <fieldset>
                  <span>podaj ilość: </span>
                  <input type='number' min='1' max='10' />
                  <input type="submit" value="Dodaj do koszyka" />
                </fieldset>
              </form>
              <p className={styles.voucherText}>Po zakupie vouchera prosimy o kontakt telefoniczny w celu dokonania rezerwacji.</p>
            </article>
          </Col>
          {/* </Row> */}
          {/* <Row> */}
          <Col xs={12} sm={6} lg={2}>
            <PageTitle text='Rekord' />
            <span> Rekord w pokoju to: </span>
            <p className={styles.record}>{record} min </p>
            <span> Rekord w pokoju liczymy bez podpowiedzi.</span>
          </Col>
          <Col className={styles.carousel} xs={12} sm={6} lg={8} >
            <Carousel {...room} />
          </Col>
          <Col xs={12} sm={6} lg={2} >
          </Col>
        </Row>
      </Grid>

    </section>
  );
};

Component.propTypes = {
  name: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  intro: PropTypes.string,
  description: PropTypes.string,
  room: PropTypes.string,
  record: PropTypes.number,
};

const mapStateToProps = (state, props) => {
  const room = getRoomById(state, props.match.url.slice(6));

  return {
    ...room,
    room,
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
