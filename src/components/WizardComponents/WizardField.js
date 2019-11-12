import React from 'react';
import { WizardConsumer } from './WizardSwitcher';
import {
  Checkbox,
  Radio,
  FormControlLabel,
  TextField,
  FormControl,
  FormGroup,
  FormHelperText,
  Typography,
  RadioGroup,
  MenuItem
} from '@material-ui/core';
import { checked, checkForLinks } from './utils';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  dropDown: {
    width: theme.spacing(20)
  }
}))

function WizardCheckBox(props) {
  return (
    <FormControl error={props.error} component='fieldset'>
      {props.questionLabel && <Typography {...props.TypographyProps}>{props.questionLabel}</Typography>}
      <FormGroup>
        {props.options.map(choice => {
          return (
            <FormControlLabel
              key={choice}
              name={props.name}
              control={
                <Checkbox
                  checked={checked(props.value, choice)}
                  onChange={props.onChange}
                  value={choice}
                />
              }
              label={checkForLinks(choice)}
            />
          )
        })}
      </FormGroup>
      {(props.error) ? <FormHelperText>{props.helperText}</FormHelperText> : null}
    </FormControl>
  )
}

function WizardRadio(props) {
  return (
    <FormControl error={props.error} component='fieldset'>
      {props.questionLabel && <Typography {...props.TypographyProps}>{props.questionLabel}</Typography>}
      <RadioGroup
        name={props.name}
        onChange={props.onChange}
      >
        {props.options.map((choice, index) => {
          return (
            <FormControlLabel
              key={index}
              value={choice}
              label={choice}
              control={<Radio name={props.name} checked={checked(props.value, choice)}/>}
            />
          )
        })}
      </RadioGroup>
      {(props.error) ? <FormHelperText>{props.helperText}</FormHelperText> : null}
    </FormControl>
  )

}

function WizardText(props) {
  return (
    <React.Fragment>
      {props.questionLabel && <Typography {...props.TypographyProps}>{props.questionLabel}</Typography>}
      <TextField {...props.TextFieldProps} {...props.WizardTextProps} name={props.name}/>
    </React.Fragment>
  )
}

function WizardDropDown(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      {props.questionLabel && <Typography {...props.TypographyProps}>{props.questionLabel}</Typography>}
      <TextField
        select
        {...props.TextFieldProps}
        {...props.WizardDropDownProps}
        name={props.name}
        className={classes.dropDown}
      >
        {props.options.map((option, index) => (
          <MenuItem
            value={(option.value) ? option.value : option}
            key={index}
          >
            {(option.value) ? ((option.label) ? option.label : option.value) : option}
          </MenuItem>
        ))}
      </TextField>
    </React.Fragment>
  )
}

export default function WizardField(props) {
  return (
    <WizardConsumer>
      {({ recordValues, values, errors, collectBulkValues, pathCode }) => {
        switch (props.fieldType) {
          default:
            return null;
          case 'checkbox':
            return (
              <WizardCheckBox
                value={values[props.name]}
                onChange={recordValues}
                error={(errors[props.name] ? true : false)}
                helperText={errors[props.name]}
                {...props}
              />
            )
          case 'radio':
            return (
              <WizardRadio
                value={values[props.name]}
                onChange={recordValues}
                error={(errors[props.name] ? true : false)}
                helperText={errors[props.name]}
                {...props}
              />
            )
          case 'text':
            return (
              <WizardText
                WizardTextProps={{
                  error: (errors[props.name] ? true : false),
                  helperText: errors[props.name],
                  value: values[props.name] || '',
                  onChange: recordValues
                }}
                pathCode={pathCode}
                {...props}
              />
            )
          case 'dropdown':
            return (
              <WizardDropDown
                WizardDropDownProps={{
                  error: (errors[props.name] ? true : false),
                  helperText: errors[props.name],
                  value: values[props.name] || '',
                  onChange: recordValues
                }}
                {...props}
              />
            )
        }
      }}
    </WizardConsumer>
  )
}