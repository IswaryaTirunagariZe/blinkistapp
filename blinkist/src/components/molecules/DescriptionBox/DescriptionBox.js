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
            maxwidth: 300,
            height:180
        },
        ui__descriptionBox__image: {
            height: 120,
            width:200
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
                <Typography variant="h4" gutterBottom className={classes.bold}>
                Explore books on Entrepreneurship
                </Typography>
                <Typography variant="h6" component="p">
                    Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.
                </Typography>
            </CardContent>
            <CardMedia>
            <img src="https://www.pikpng.com/pngl/m/238-2388525_download-button-transparent-clipart-app-store-download-buttons.png" maxwidth="2px"
           className={classes.ui__descriptionBox__image}></img>
            </CardMedia>
        </Card>


    );

}

export default DescriptionBox;
