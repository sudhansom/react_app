export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const increment_by_value = (value) => {
  return {
    type: "INCREMENT_BY_VALUE",
    payload: value,
  };
};

export const decrement_by_value = (value) => {
  return {
    type: "DECREMENT_BY_VALUE",
    payload: value,
  };
};
