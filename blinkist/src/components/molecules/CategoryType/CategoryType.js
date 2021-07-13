import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function CategoryType(props) {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center">
      <HomeIcon />
      <h4>
        {props.categoryType}
      </h4>
    </Box>
  );
}