import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../pages/SignIn';
import Films from '../pages/Films';
import MovieInfo from '../pages/MovieInfo';

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
    <Router.Screen name="MovieInfo" component={MovieInfo} />
  </Router.Navigator>
);

export default Routes;
