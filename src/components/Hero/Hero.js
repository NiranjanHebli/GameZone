import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Container, Typography } from '@material-ui/core';
import heroImage from './image.jpg';


const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '650px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '75px',
    color: theme.palette.common.white,
    paddingBottom:theme.spacing(35),
    paddingTop:theme.spacing(55),
  },

}));

function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.hero}>
      <Container maxWidth="md">
      </Container>
    </div>
  );
}

export default Hero;
