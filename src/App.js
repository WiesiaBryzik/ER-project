import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { Rooms } from './components/views/Rooms/Rooms';
import RoomDetails from './components/views/RoomDetails/RoomDetails';
import { Regulations } from './components/views/Regulations/Regulations';
import { Costs } from './components/views/Costs/Costs';
import { Info } from './components/views/Info/Info';
import { Cart } from './components/views/Cart/Cart';
import { NotFound } from './components/views/NotFound/NotFound';



function App() {
  return (
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/rooms' component={Rooms} />
        <Route exact path='/room/:id' component={RoomDetails} />
        <Route exact path='/regulations' component={Regulations} />
        <Route exact path='/costs' component={Costs} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/cart' component={Cart} />
        <Route path='*' component={NotFound} />
      </Switch>
    </MainLayout>
  );
}

export default App;
