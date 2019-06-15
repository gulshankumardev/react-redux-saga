import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  todos: todoReducer
});

export default rootReducer;
