import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles =
    makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
        },
        h2: {
            marginbottom: 1
        },
        ui__descriptionBox__content: {
            padding: 1.5,
            paddingright: 2.5,
            background: '#EFF7F4',
            display: 'flex',
            alignitems: 'center',
            position: 'relative',
            borderradius: 4,
            maxwidth: 148
        },
        ui__descriptionBox__image: {
            height: 120,
        },
        span: {
            color: 'red',
            fontsize: 'small'
        },
        h4: {
            margin: 0,
            margintop: 4
        },
        ui__descriptionBox__close: {
            position: 'relative',
            right: 16,
            top: 16,
            cursor: 'pointer'
        },
        bold: {
            fontWeight: 600
        }

    }));

function DescriptionBox(props) {

    const classes = useStyles();
    const image = "https://source.unsplash.com/random";
    return (
        <Card className={classes.ui__descriptionBox__content}>
            <CardContent align='left'>

                <Typography variant="subtitle2" gutterBottom className={classes.span}>
                    New
                </Typography>
                <Typography variant="h6" gutterBottom className={classes.bold}>
                    Find audiobooks on the blinkist app
                </Typography>
                <Typography variant="paragraph" component="p">
                With Premium you’ll get the whole Blinkist library for free, plus full-length nonfiction audiobooks at a special member price.
                </Typography>
            </CardContent>
            <CardMedia>
            <img src="https://www.pikpng.com/pngl/m/238-2388525_download-button-transparent-clipart-app-store-download-buttons.png" maxwidth="2px"
           className={classes.ui__descriptionBox__image}></img>
            </CardMedia>
            <CardContent>
            <Typography variant="subtitle2" gutterBottom align="right">                  X
                </Typography>
            </CardContent>
        </Card>


    );

}

export default DescriptionBox;
