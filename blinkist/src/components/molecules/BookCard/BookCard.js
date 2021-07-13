import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React from "react";
import ProgressBar from '../../atoms/ProgressBar/ProgressBar'

function BookCard(props) {
     return (
      <div>
        <Card>
          <CardMedia
            title={props.books.bookTitle} >
            <img class="book-cover__image" alt="Resilient by Sevetri Wilson"
              style={{ maxWidth: '100%' }}
              srcset="https://images.blinkist.com/images/books/60c864126cee070007f8b320/1_1/640.jpg 2x" src="https://images.blinkist.com/images/books/60c864126cee070007f8b320/1_1/470.jpg" />
          </CardMedia>
          <CardContent className={props.classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.books.bookTitle}
            </Typography>
            <Typography gutterBottom>
              {props.books.authors}
            </Typography>
            <Typography>
            <span role="img">🕘</span> 13 min read{" "}
            </Typography>
            <Typography>
            {props.books.inLibrary}
            </Typography>
          </CardContent>
          <CardActions>
           {(!props.books.inLibrary || props.books.isReadFinished || props.books.isReading)
           && <Button display='block' color="primary"
              onClick={props.handleClick} >
              {props.buttonAction}
            </Button>  }    
          </CardActions>
          {(props.books.inLibrary) && <ProgressBar></ProgressBar> }  
        </Card>
       
      </div>
    );
  }



export default BookCard;
