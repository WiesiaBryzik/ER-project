/* SELECTORS */

export const getAllRooms = ({ rooms }) => rooms;

export const getRoomById = ({ rooms }, roomId) => {
  const filtered = rooms.filter(room => room.id === roomId);

  console.log(roomId);

  // filter rooms by roomId

  return filtered.length ? filtered[0] : { error: true };
};

/* ACTIONS */


// action name creator
const reducerName = 'rooms';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_QUANTITY = createActionName('ADD_QUANTITY');

// action creators

export const createAction_addQuantity = (roomId, quantity) => ({ roomId, quantity, type: ADD_QUANTITY });

// reducer

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_QUANTITY:
      return [...statePart, { ...action.payload }];
    default:
      return statePart;
  }
}
