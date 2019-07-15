import produce from 'immer';

const initialState = {
  topics: {},
  helpers: {}
};

const reducer = produce((draft, action) => {
  switch(action.type) {
    default:
      return;
  }
}, initialState)

export default reducer
