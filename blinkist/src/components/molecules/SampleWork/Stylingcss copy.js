import { makeStyles} from '@material-ui/core/styles';

const useStyles = 
makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    h2: {
        marginbottom: 1
      },  
    ui__library__content :{
    padding: 1.5,
    paddingright: 2.5,
    background: '#EFF7F4',
    display: 'flex',
    alignitems: 'center',
    position: 'relative',
    borderradius: 4,
    maxwidth: 148,    
    },
    ui__library__info :{
        height:100
      },
   span :{
        color: 'red',
        fontsize: 'small'
      },
    h4: {
        margin: 0,
        margintop:4
      },
    ui__library__close :{
        position: 'absolute',
        right: 16,
        top: 16,
        cursor: 'pointer'
      }

  }));
  export default function MyLibrary() {
    const classes = useStyles();
    return (
      <div>
        <h2>My Library</h2>
        <div className={classes.ui__library__content}>
          <span className={classes.ui__library__close}>x</span>
  
          <div className={classes.ui__library__info}>
            <span className={classes.span}>New</span>
            <h4>Find audiobooks on the blinkist app</h4>
            <p>
              With premium you'll get the whole blinkist library for free, plus
              full-length nonfiction audiobooks at special member price
            </p>
          </div>
          <img src="https://www.pikpng.com/pngl/m/238-2388525_download-button-transparent-clipart-app-store-download-buttons.png" maxwidth="2px"
           className={classes.ui__library__info}></img>
        </div>
        </div>
    );
  }

 
    


 