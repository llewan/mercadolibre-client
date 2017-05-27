import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { ThemeProvider } from 'styled-components';
import routes from './routes';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router history={browserHistory} routes={routes} />
  </ThemeProvider>, document.getElementById('root'));