import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import PageContainer from "../atoms/PageContainer/PageContainer";


function PageTemplate(props) {
  const useStyles = makeStyles((theme) =>
    createStyles({
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      root: {
        flexGrow: 1,
      },
    }),
  );
  
  const classes = useStyles();
  return (
    <PageContainer>
      {props.headerBar}
      <Grid container spacing={3}>
        <Grid item xs={12} >
          {props.descriptionBox}
        </Grid>
        <Grid item xs={12}>
          {props.bookCardsList}
        </Grid>
        <Grid item xs={12}>
          {props.footer}
        </Grid>
      </Grid>
    </PageContainer>
  );

}

export default PageTemplate;

