import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../pages/Splash';
import Films from '../pages/Films';

const Router = createStackNavigator();

const Routes: React.FC = () => (
  <Router.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#0e0e0e' },
    }}
  >
    <Router.Screen name="Splash" component={Splash} />
    <Router.Screen name="Films" component={Films} />
  </Router.Navigator>
);

export default Routes;
