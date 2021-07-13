// Form.js

import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { connect } from 'react-redux'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../atoms/TabPanel/TabPanel'
import BookCard from '../../molecules/BookCard/BookCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { libraryButtonActions } from '../../../actions/books.actions'


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

const LibraryBookList = ({ books, libraryButtonActions }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          {books.filter(books => books.inLibrary == true && books.isReadFinished == true).map((books) => (
            <Grid item key={books.id} xs={12} sm={6} md={4}>
              <BookCard books={books} classes={classes} buttonAction="Read Again"
                handleClick={() => libraryButtonActions('ReadAgain',books.id)}></BookCard>
            </Grid>
          ))}
          </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
          <p>Currently Reading</p>
          <Grid container spacing={4}>
          {books.filter(books => books.inLibrary == true && books.isReading == true).map((books) => (
            <Grid item key={books.id} xs={12} sm={6} md={4}>
              <BookCard books={books} classes={classes} buttonAction="Finish Reading"
                handleClick={() => libraryButtonActions('FinishReading',books.id)}></BookCard>
            </Grid>
          ))}
        </Grid>
        </TabPanel>
          </div>

  );
};

const mapStateToProps = state => ({
  books: state.books
})

export default connect(
  mapStateToProps,
  { libraryButtonActions }
)(LibraryBookList)