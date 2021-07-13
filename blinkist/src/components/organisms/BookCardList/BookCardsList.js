import React from 'react'
import { connect } from 'react-redux'
import { addToLibrary } from '../../../actions/books.actions'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import BookCard from '../../molecules/BookCard/BookCard';
import Typography from '@material-ui/core/Typography';

const categeories = [
  {
    'id': 1,
    'cat': 'Entertainment'
  },
  {
    'id': 2,
    'cat': 'Trending'
  },
  {
    'id': 3,
    'cat': 'To Do'
  },
];
const classes={};

const BookCardsList = ({ books, addToLibrary }) => (
  <main>
    {categeories.map((categeories) => (
      <Container maxWidth="md">
        <Typography gutterBottom variant="h5" component="h2">
          {categeories.cat}
        </Typography>
        <Grid container spacing={4} gutterBottom >
           {books.filter(_books => _books.category === categeories.cat).map((book) => (
            <Grid item key={book.id} xs={12} sm={6} md={4}>
              <BookCard books={book} buttonAction="+ Add To Library"
                handleClick={() => addToLibrary(book.id)} classes={classes}></BookCard>
            </Grid>

          ))}
        </Grid>
      </Container>
   ))}

  </main>
);

const mapStateToProps = state => ({
  books: state.books
})

export default connect(
  mapStateToProps,
  { addToLibrary }
)(BookCardsList)