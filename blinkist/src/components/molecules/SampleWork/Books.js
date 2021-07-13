/* eslint-disable no-sparse-arrays */
import React from 'react';
import BookCard from '../BookCard/BookCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {allBooks} from '../../organisms/BooksData'
import TabPanel from '../../atoms/TabPanel/TabPanel'


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const booksList = allBooks;
const finishedBooks=[,
  {  
      'id': 2, 
      'imageUri':"https://source.unsplash.com/random",   
      'bookTitle': 'Book2',   
      'authors': 'Book2 authors' ,
      'buttonAction' :'Read Again',
      'showInFinishReading':true,
      'showInContinueReading':false
    },
    {  
      'id': 3,  
      'imageUri':"https://source.unsplash.com/random",  
      'bookTitle': 'Book4',   
      'authors': 'Book4 authors',
      'buttonAction' :'Read Again',
      'showInFinishReading':true,
      'showInContinueReading':false 
    }];


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function LibraryBookList() {
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
            {allBooks.filter(books=> books.inLibrary==true && books.isReadFinished==true).map((books) => (
              <Grid item key={books.id} xs={12} sm={6} md={4}>
             <BookCard books={books} classes={classes} buttonAction="Read Again"></BookCard>
              </Grid>
            ))}
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container spacing={4}>         
            {finishedBooks.map((books) => (
              <Grid item key={books.id} xs={12} sm={6} md={4}>
              <BookCard books={books} classes={classes} buttonAction="Finish Reading"></BookCard> 
              </Grid>
            ))}
          </Grid>
      </TabPanel>
    </div>
  );
}