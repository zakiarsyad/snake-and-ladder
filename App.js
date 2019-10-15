
import React from 'react';
import { Provider } from "react-redux";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './screens/Home'
import Game from './screens/Game'
import End from './screens/End'
import store from './store/'

const RootNavigation = createAppContainer(createSwitchNavigator({
  Home,
  Game,
  End
}, { initialRouteName: 'Home'}));

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
