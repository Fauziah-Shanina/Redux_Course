import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";

//every key in the combineReducers actually is a key in the 
const rootReducer = combineReducers({
  books: BooksReducer, 
  activeBook : ActiveBook
});

export default rootReducer;
