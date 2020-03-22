import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { Rooms } from './components/views/Rooms/Rooms';
import { Room } from './components/views/Room/Room';
import { Vouchers } from './components/views/Vouchers/Vouchers';
import { Costs } from './components/views/Costs/Costs';
import { Info } from './components/views/Info/Info';
import { Cart } from './components/views/Cart/Cart';
import { NotFound } from './components/views/NotFound/NotFound';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/rooms' component={Rooms} />
              <Route exact path='/room/:roomId' component={Room} />
              <Route exact path='/vouchers' component={Vouchers} />
              <Route exact path='/costs' component={Costs} />
              <Route exact path='/info' component={Info} />
              <Route exact path='/cart' component={Cart} />
              <Route path='*' component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
