import React from 'react';
import Select from 'react-select';
import { allBooks } from '../../../api/books';
import BookDetails from '../../molecules/BookDetails/BookDetails'
import {Box} from "@material-ui/core";



function Search() {
  const [CurrentMenu, setCurrentMenu] = React.useState(null);
  function handleClick(event){
    setCurrentMenu(<BookDetails></BookDetails>);
  }
  return (
   <div>
      <Select
        options={allBooks.map(book => ({ value: book.bookTitle, label: book.bookTitle }))} 
      onChange={(handleClick)}/>
      <Box> {CurrentMenu} </Box>
      </div>
  );
}


export default Search;