import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage:
      'url("http://www.transparenttextures.com/patterns/gplay.png")',
    backgroundPosition: "center",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(35),
  },
  textContainer: {
    color: "#FFFFFF",
    textAlign: "center",
  },
}));

function About() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className={classes.textContainer}>
              <Typography variant="h2" component="h2">
                <h2 className="glitter"> About Us</h2>
              </Typography>
              <Typography variant="subtitle1">
                Welcome to GameZone, your one-stop destination for all things
                gaming! Our mission is to provide gamers of all ages and skill
                levels with a fun and engaging online platform where they can
                play their favorite games, connect with other gamers, and
                explore new titles.
              </Typography>
              <Typography variant="subtitle1">
                If you have any questions or concerns about GameZone, please
                don't hesitate to contact us. We're always happy to hear from
                our users, and we're committed to providing you with the best
                possible gaming experience. Thanks for choosing GameZone!
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
