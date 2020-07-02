import React, { useState }  from 'react'
import { createMuiTheme, makeStyles, ThemeProvider, withStyles } from '@material-ui/core/styles'
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange,
  grey
} from "@material-ui/core/colors";


// Create a theme instance.

let theme = createMuiTheme({
  palette: {
    background: {
      default: '#1A1B36',
    }
  },
  
});

export default theme;