import { createStore } from "redux";
import bookReducer from "reducers/bookReducer";
import {allBooks} from './api/books';

function configureStore(state = { books: allBooks }) {
  return createStore(bookReducer,state);
}

export default configureStore;