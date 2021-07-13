import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BlinkistTitleLogo from "../../molecules/TitleAndLogo/BlinkistTitleLogo";
import Text from '../../atoms/Text/Text';
import Grid from '@material-ui/core/Grid';
import Label from '../../atoms/Label/Label';

function Footer(props) {
    const useStyles = makeStyles((theme) => ({
        footer: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(6),
            alignContent: "center"
        },
        root: {
            flexGrow: 1,
            maxWidth: 752,
        },
        demo: {
            backgroundColor: theme.palette.background.paper,
        },
        title: {
            margin: theme.spacing(4, 0, 2),
        },
    }));
    const classes = useStyles();
    const categeories = [
        {
            'id': 1,
            'cat': 'Editorial',
            'linkslist': ['Book lists',
                'What is Nonfiction',
                'What to Read Next',
                'Benefits of Reading']
        },
        {
            'id': 2,
            'cat': 'Useful Links',
            'linkslist': ['Pricing',
                'Blinkist Business',
                'Gift Cards',
                'Blinkist Magazine',
                'Contact & Help'
            ]
        },
        {
            'id': 1,
            'cat': 'Company',
            'linkslist': ['About',
                'Careers',
                'Partners',
                'Code of Conduct'
            ]
        }

    ];
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    return (
            <Grid container spacing={3}>

                <Grid item xs={5} sm={4}>
                    <BlinkistTitleLogo align="center"></BlinkistTitleLogo>
                    <Text text="Big ideas in small packages Start learning now"></Text>
                </Grid>
                {categeories.map((categeories) => (
                        <Grid item xs={3} sm={2}>
                            <Label label={categeories.cat}></Label>
                        
                        {categeories.linkslist.map((linkslist) => (
                              <p>{linkslist}</p>
                        ))}
                        </Grid>
                ))}

            </Grid>

    );

}

export default Footer;
