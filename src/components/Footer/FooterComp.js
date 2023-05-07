import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#000000',
    padding: theme.spacing(5),
    '& h6': {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      marginBottom: theme.spacing(2),
      color:'white',
    },
  },
  woodTexture: {
    backgroundColor: '#000000',
    backgroundImage: 'url("http://www.transparenttextures.com/patterns/gplay.png")',
    backgroundRepeat: 'repeat',
    backgroundSize: 'auto',
  },
  link: {
    color: '#ffffff',
    '&:hover': {
      color: '#cccccc',
    },
},
}));

export default function FooterComp() {
  const classes = useStyles();
  return (
    <footer className={`${classes.footer} ${classes.woodTexture}`} >
      <Typography variant="subtitle1" align="center" gutterBottom style={{color:"ffffff"}}>
      </Typography>
      <Typography variant="subtitle1" align="center" style={{color:"ffffff"}}>
      ©{new Date().getFullYear()} GameZone
      <p>A website for gaming enthusiasts!</p>
      </Typography>
      <Typography variant="subtitle1" align="center" style={{color:"ffffff"}}>
        Made With ♥ by Niranjan Hebli      
      </Typography>
    </footer>
  );
}

