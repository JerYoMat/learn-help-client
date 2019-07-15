import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './styles/theme';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <App/>
    </Provider>
  </MuiThemeProvider>,
  document.querySelector('#root')
);