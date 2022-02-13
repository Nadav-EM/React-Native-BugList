import { ADD, INPUT, REMOVE, RESOLVE } from "./actions";

let todoId = 0;

export function reducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          key: ++todoId,
          desc: action.payload,
          resolved: false,
        },
      ];
    case REMOVE:
      return state.filter((bug) => bug.key != action.payload);

    case RESOLVE:
      return state.map((bug) =>
        bug.key != action.payload ? bug : { ...bug, resolve: !bug.resolve }
      );
    default:
      return state;
  }
}

export function handleInput(state = "", action) {
  switch (action.type) {
    case INPUT:
      return action.payload;
    default:
      return state;
  }
}
