import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import PageTitle from '../../common/PageTitle/PageTitle';
import RoomInfo from '../../features/RoomInfo/RoomInfo';

import { connect } from 'react-redux';
import { getRoomById } from '../../../redux/roomsRedux.js';
// import { createAction_addQuantity } from '../../../redux/roomRedux';


import styles from './Room.module.scss';
import { Carousel } from '../../features/Carousel/Carousel';
// import { AddToCart } from '../../features/AddToCart/AddToCart';

class Component extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    intro: PropTypes.string,
    description: PropTypes.string,
    room: PropTypes.object,
    record: PropTypes.number,
  }

  render() {
    const { name, id, intro, description, room, record } = this.props;
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
            <Col xs={12} sm={6} lg={2} >
              <div className={styles.sticky}>
                <PageTitle text='Kup voucher na ten pokój' />
                <article className={styles.voucher}>
                  <form>
                    <fieldset>
                      <button> Dodaj do koszyka </button>
                    </fieldset>
                  </form>
                  <p className={styles.voucherText}>Po zakupie vouchera prosimy o kontakt telefoniczny w celu dokonania rezerwacji.</p>
                </article>
              </div>
            </Col>
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
  }
}

const mapStateToProps = (state, props) => {
  const room = getRoomById(state, props.match.url.slice(6));

  return {
    ...room,
    room,
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addQuantity: (roomId, quantity) => dispatch(createAction_addQuantity(roomId, quantity,
  )),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Room,
  Container as Room,
  Component as RoomComponent,
};
