const defaultState = {
  count: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "INCREMENT_BY_VALUE":
      return {
        count: state.count + action.payload,
      };
      
    case "DECREMENT_BY_VALUE":
      return {
        count: state.count - action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
