import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer } from "./reducer";
import { handleInput } from "./reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ reducer, handleInput });
const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
