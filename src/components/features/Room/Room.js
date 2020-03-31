import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';

import PageTitle from '../../common/PageTitle/PageTitle';
// import RoomInfo from '../../features/RoomInfo/RoomInfo';

// import { connect } from 'react-redux';
// import { getRoomById, loadRoomsRequest, getRequest } from '../../../redux/roomRedux.js';


import styles from './Room.module.scss';
// import { Carousel } from '../../features/Carousel/Carousel';

class Room extends React.Component {

  componentDidMount() {
    const { loadRooms, match } = this.props;
    loadRooms(match.params.id);
  }

  render() {
    const { rooms } = this.props;
    return (
      <section>
        <Grid>
          <Row>
            <Col xs={12} sm={6} lg={2} >
            </Col>
            <Col lg={8} className={styles.container}>
              <div className={styles.title}>
                {/* <PageTitle text={name} /> */}
              </div>
            </Col>
          </Row>

          <Row>
            {/* <Col xs={12} sm={6} lg={2}>
              <RoomInfo key={rooms.id} {...rooms} />
            </Col> */}
            <Col lg={8}>
              <article className={styles.description}>
                <h2>Co to za pokój?</h2>
                <span>{rooms[0].intro}</span>
                <h2>Co Cię tu spotka?</h2>
                <span>{rooms[0].description}</span>
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
              <p className={styles.record}>{rooms[0].record} min </p>
              <span> Rekord w pokoju liczymy bez podpowiedzi.</span>
            </Col>
            {/* <Col className={styles.carousel} xs={12} sm={6} lg={8} >
              <Carousel {...rooms} />
            </Col> */}
            <Col xs={12} sm={6} lg={2} >
            </Col>
          </Row>
        </Grid>

      </section>
    );
  }
}

Room.propTypes = {
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
  loadRooms: PropTypes.func.isRequired,
};



export default withRouter(props => <Room {...props}/>);
// export {
//   // Component as Room,
//   Container as Room,
//   Component as RoomComponent,
// };
