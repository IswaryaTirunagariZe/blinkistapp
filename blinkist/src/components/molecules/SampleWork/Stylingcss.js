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
      <div >
        <img src="data:image/png;base64,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" alt="Blinkist"></img>
</div>
    );
  }

 
    


 