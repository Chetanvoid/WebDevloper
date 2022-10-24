export const initialState = {
  term: null,
};

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

const reducer = (state, action) => {
  console.log("action taken by ",action);
  console.log("state1 taken by ",state);

  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
      
        term: action.term,
      
      };

    default:
      return state;
      console.log("state taken by ",state);
  }
};

export default reducer;
