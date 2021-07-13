import * as actionsTypes from './ActionTypes';



export const getAllbooks = () => dispatch => {
  //const books=getBooksFromJson();
  dispatch(getBooks());
}
const getBooks = books => ({
  type: actionsTypes.GET_ALL_BOOKS,
  books
})
const addToBookLibrary = bookId => ({
  type: actionsTypes.ADD_TO_LIBRARY,
  bookId
})

const finishReading = bookId => ({
  type: actionsTypes.FINISH_READING,
  bookId
})
const readAgain = bookId => ({
  type: actionsTypes.READ_AGAIN,
  bookId
})
const addNewBookToList = book => ({
  type: actionsTypes.ADD_BOOK_TO_LIST,
  book
})

export const addToLibrary = (bookId) => dispatch => {
 dispatch(addToBookLibrary(bookId))
  }

export const libraryButtonActions = (buttonAction,bookId) => dispatch => {
  if(buttonAction==='FinishReading'){
    dispatch(finishReading(bookId))
  }
    if(buttonAction==='ReadAgain'){
    dispatch(readAgain(bookId))
  }
     }

export const addNewBook = (book) => dispatch => {
  dispatch(addNewBookToList(book))
    }