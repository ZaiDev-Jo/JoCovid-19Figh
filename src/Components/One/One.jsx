import React from 'react';
import { Card, CardContent, Typography, Grid, } from '@material-ui/core';
import styles from './One.module.css';
import cx from 'classnames';

const One = () => {
  return(
<div className={styles.steps}>
<Grid container spacing={3} justify="center">
  <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.one)}>
    <CardContent>
        <Typography color="textSecondary" gutterBottom>Step One</Typography>
    <Typography variant="h5"> Stay Home</Typography>
    </CardContent>
  </Grid>
  <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.two)}>
    <CardContent>
        <Typography color="textSecondary" gutterBottom>Step Two</Typography>
        <Typography variant="h5"> Wash Your Hands For 20s</Typography>
    </CardContent>
  </Grid>
  <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.three)}>
    <CardContent>
        <Typography color="textSecondary" gutterBottom>Step Three</Typography>
        <Typography variant="h5"> Use hand sanitizer constantly</Typography>
    </CardContent>
  </Grid>
  <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.Four)}>
    <CardContent>
        <Typography color="textSecondary" gutterBottom>Four</Typography>
  <Typography variant="h5">[المُؤْمِنُ لِلْمُؤْمِنِ كالْبُنْيانِ، يَشُدُّ بَعْضُهُ بَعْضًا ثُمَّ شَبَّكَ بيْنَ أصابِعِهِ]</Typography>
    </CardContent>
  </Grid>
</Grid>
</div>
        )
}

export default One;