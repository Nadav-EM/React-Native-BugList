export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const INPUT = "INPUT";
export const RESOLVE = "RESOLVE";

export const addBug = (desc) => (dispatch) => {
  dispatch({
    type: ADD,
    payload: desc,
  });
};

export const removeBug = (key) => (dispatch) => {
  dispatch({
    type: REMOVE,
    payload: key,
  });
};
export const resolveBug = (key) => (dispatch) => {
  dispatch({
    type: RESOLVE,
    payload: key,
  });
};

export const userInput = (input) => (dispatch) => {
  dispatch({
    type: INPUT,
    payload: input,
  });
};
