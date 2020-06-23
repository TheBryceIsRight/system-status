import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import { palette } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import CopyrightIcon from '@material-ui/icons/Copyright';


export default function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright '}
      <Router>
      <Button startIcon={<CopyrightIcon />} variant='text' style={{borderColor: '#7E9EF5', color: "#FFFFFF" }} component={RouterLink} to="/">Elavon</Button>
      </Router>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}