
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const SignUp = ({ classes }) => (
  <React.Fragment>
    <Typography component="h1" variant="h5" align='center'>
      Sign up
    </Typography>
    <form className={classes.form} noValidate>
      <TextField
        autoComplete="name"
        name="name"
        variant="outlined"
        margin='normal'
        required
        fullWidth
        id="name"
        label="Name"
      />
      <TextField
        variant="outlined"
        required
        fullWidth
        id="email"
        margin='normal'
        label="Email Address"
        name="email"
        autoComplete="email"
      />
      <TextField
        variant="outlined"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        margin='normal'
        autoComplete="current-password"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign Up
      </Button>
    </form>
  </React.Fragment>
);

export default SignUp;
