import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid, Collapse } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function RadioButtonsGroup() {
  const classes = useStyles();
  const [value, setValue] = React.useState({
    likeKittens: 'No',
    seeKittens: 'No'
  });

  const handleChange = name => event => {
    setValue({...value, [name]: event.target.value });
  };

  const { likeKittens, seeKittens } = value;
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      spacing={2}
      style={{ padding: '2em' }}
    >
      <Grid item>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Do you like kittens?</FormLabel>
          <RadioGroup name="likeKittens" value={likeKittens} onChange={handleChange('likeKittens')}>
            <Grid container direction='row'>
              <Grid item>
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              </Grid>
              <Grid item>
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
        <Collapse in={likeKittens === 'Yes' ? true : false}>

          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Do want to see kittens?</FormLabel>
            <RadioGroup name="seeKittens" value={seeKittens} onChange={handleChange('seeKittens')}>
              <Grid container direction='row'>
                <Grid item>
                  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                </Grid>
                <Grid item>
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
          <Collapse in={seeKittens === 'Yes' ? true : false}>
            <img alt='kitten placeholder' src='https://placekitten.com/500/500' />
          </Collapse>

        </Collapse>
      </Grid>
    </Grid>
  );
}