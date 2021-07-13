import { combineReducers } from 'redux'
import { FINISH_READING, ADD_TO_LIBRARY,GET_ALL_BOOKS } from '../actions/ActionTypes'
import api from '../api/getBooks'
import { allBooks } from '../api/books';

const getBooksFromJson = () => {  
  const response = api.get("/books").then(resp => {
    var data = resp.data;
    return response.data;
})
.catch(error => {
    console.log(error);
});
  
};

const initialState = {
  //books: [getBooksFromJson()]
  books:allBooks
}


const books = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_LIBRARY':
      state.filter(_books => _books.id == action.bookId).map((book)=>
      { book.inLibrary=true;
        book.isReading=true;
        book.isReadFinished=false;
      })
      return [...state]
      case 'GET_ALL_BOOKS':
      return state 
      case 'FINISH_READING':
        state.filter(_books => _books.id == action.bookId).map((book)=>
        { book.isReadFinished=true;
          book.isReading=false;
        })
        return [...state] 
      case 'READ_AGAIN':
        state.filter(_books => _books.id == action.bookId).map((book)=>
        { book.isReading=true;
        book.isReadFinished=false})
      return [...state] 
      case 'ADD_BOOK_TO_LIST':
        state.push(action.book);
      return [...state]  
    default:
      return state.books
  }
}

export default combineReducers({
  books
})

