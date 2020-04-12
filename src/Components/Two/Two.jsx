import React from 'react';
import { Card, CardContent, Typography, Grid, } from '@material-ui/core';
import styles from './Two.module.css';
import cx from 'classnames';

const Two = () => {
  return(
<div className={styles.symptoms}>
<Grid container spacing={3} justify="center">
  <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.one)}>
    <CardContent>
        <Typography color="textSecondary" gutterBottom>One</Typography>
    <Typography variant="h5"> COVID-19 symptoms may appear from two days to 27 days:</Typography>
    </CardContent>
  </Grid>
  <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.two)}>
    <CardContent>
        <Typography color="textSecondary" gutterBottom>Two</Typography>
        <Typography variant="h5"> High Fever</Typography>
    </CardContent>
  </Grid>
  <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.three)}>
    <CardContent>
        <Typography color="textSecondary" gutterBottom>Three</Typography>
        <Typography variant="h5"> Coughing And TightnessBreathing,</Typography>
    </CardContent>
  </Grid>
  <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.four)}>
    <CardContent>
        <Typography color="textSecondary" gutterBottom>Four</Typography>
        <Typography variant="h5">  Fatigue And Aches</Typography>
    </CardContent>
  </Grid>
  <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.five)}>
    <CardContent>
        <Typography color="textSecondary" gutterBottom>Five</Typography>
        <Typography variant="h5">  Runny Nose And Sore Throat</Typography>
    </CardContent>
  </Grid>
  <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.six)}>
    <CardContent>
        <Typography color="textSecondary" gutterBottom>Six</Typography>
        <Typography variant="h5"> Some patients also felt a loss of sense of smell and taste</Typography>
    </CardContent>
  </Grid>
</Grid>
</div>
        )
}

export default Two;