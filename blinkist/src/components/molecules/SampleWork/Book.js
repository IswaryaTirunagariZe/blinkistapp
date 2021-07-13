// Form.js

import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../atoms/TabPanel/TabPanel'
import { allBooks } from "../../../api/books"
import BookCard from '../BookCard/BookCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
//import update from 'immutability-helper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};
const BookCardView = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [bookState, setBookState] = useState([...allBooks]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const updateBooktoFinishReading = (item, index, books) => {
    books[index].isReadFinished = true;
    books[index].isReading = false;
  };
  function updateBooktoFinishReadAction(id) {
    bookState.filter(books => books.id == id).forEach(updateBooktoFinishReading);
    setBookState([...bookState]);
  };
  const updateBookForReadAgain = (item, index, books) => {
    books[index].isReadFinished = false;
    books[index].isReading = true;
  };
  function updateBookForReadAgainAction(id) {
    bookState.filter(books => books.id == id).forEach(updateBookForReadAgain);
    setBookState([...bookState]);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="My Library">
          <Tab label="Finished" {...a11yProps(0)} />
          <Tab label="Currently Reading" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container spacing={4}>
          {bookState.filter(books => books.inLibrary == true && books.isReadFinished == true).map((books) => (
            <Grid item key={books.id} xs={12} sm={6} md={4}>
              <BookCard books={books} classes={classes} buttonAction="Read Again"
                handleClick={() => updateBookForReadAgainAction(books.id)}></BookCard>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={4}>
          {bookState.filter(books => books.inLibrary == true && books.isReading == true).map((books) => (
            <Grid item key={books.id} xs={12} sm={6} md={4}>
              <BookCard books={books} classes={classes} buttonAction="Finish Reading"
               handleClick={() => updateBooktoFinishReadAction(books.id)}></BookCard>
             </Grid>
          ))}
        </Grid>
      </TabPanel>
    </div>

  );
};

export default BookCardView;