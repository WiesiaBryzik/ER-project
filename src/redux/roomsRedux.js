/* SELECTORS */

export const getAllRooms = ({ rooms }) => rooms;

export const getRoomById = ({ rooms }, roomId) => {
  const filtered = rooms.filter(room => room.id === roomId);

  console.log(roomId);

  // filter rooms by roomId

  return filtered.length ? filtered[0] : { error: true };
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators

*/
// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
