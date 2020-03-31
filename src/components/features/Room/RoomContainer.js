import { connect } from 'react-redux';
import { getRoomById, loadRoomsRequest, getRequest } from '../../../redux/roomRedux';
import Room from './Room';


const mapStateToProps = state => ({
  rooms: getRoomById(state),
  request: getRequest(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadRooms: (id) => dispatch(loadRoomsRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
