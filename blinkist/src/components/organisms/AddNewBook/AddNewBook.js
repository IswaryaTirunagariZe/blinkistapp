import React  from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { allBooks } from "../../../api/books"
import DialogActions from '@material-ui/core/DialogActions';
import { connect } from 'react-redux'
import { addNewBook } from '../../../actions/books.actions'


const AddNewBook = ({ books, addNewBook }) => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  const newBook = [{
    'id': 122,
    'imageUri': "https://source.unsplash.com/random",
    'bookTitle': 'Book122',
    'authors': 'Book122 authors',
    'category': 'Entertainment',
    'inLibrary': true,
    'isReadFinished': false,
    'isReading': true
  }
  ];
  const handleSubmit = () => {
    addNewBook(newBook);
    handleClose();
  };


  return (
    <Dialog fullWidth aria-labelledby="simple-dialog-title" open={open} alignItems="center">
      <DialogTitle id="simple-dialog-title">Add New Book</DialogTitle>
      <Grid container spacing={3} xs={12} >
        <Grid item alignItems="center" xs={12}>
          <TextField id="outlined-basic" label="Total Books" variant="outlined" disabled="true" value={allBooks.length} />
        </Grid>
        <Grid item alignItems="center" xs={12}>
          <TextField id="outlined-basic" label="Book Title" variant="outlined" />
        </Grid>
        <Grid item alignItems="center" xs={12}>
          <TextField id="outlined-basic" label="Book Author" variant="outlined" />
        </Grid>
        <Grid item alignItems="center" xs={12}>
          <TextField id="outlined-basic" label="Book Category" variant="outlined" />
        </Grid>
        <Grid item alignItems="center" xs={12}>
          <TextField id="outlined-basic" label="Read Time" variant="outlined" />
        </Grid>
      </Grid>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
        <Button onClick={handleSubmit} color="primary" autoFocus>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}



const mapStateToProps = state => ({
  books: state.books
})


export default connect(
  mapStateToProps,
  { addNewBook }
)(AddNewBook)