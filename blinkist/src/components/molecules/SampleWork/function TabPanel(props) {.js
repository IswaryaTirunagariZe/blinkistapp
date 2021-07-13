function TabPanel(props) {
    const { children, value, index, ...other } = props;
    // eslint-disable-next-line no-unused-vars
    const [finishReading, setfinishReading] = React.useState(null);
    // eslint-disable-next-line no-unused-vars
    const handleFinishReading=()=>{
      
    };
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  


  <div>       <input
                type="button"
                value="Add Book" onClick={addBook}
            />
            <input
                type="button"
                value="Update Book"
                onClick={removeBook}
            />
            {

                <Grid container spacing={4}>
                    {bookState.filter(books => books.inLibrary == true && books.isReadFinished == true).map((books) => (
                        <Grid item key={books.id} xs={12} sm={6} md={4}>
                            <BookCard books={books} classes={classes} buttonAction="Read Again"></BookCard>
                        </Grid>
                    ))}
                </Grid>

            }
            </div> 


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
           <Button display='block' color="primary"
              onClick={finishReading} >
              {props.buttonAction}
            </Button>         
          </CardActions>
          {/*<ProgressBar></ProgressBar>*/}
        </Card>