// In App.js in a new project

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from "../components/index";
const Stack = createStackNavigator();

function HomeStackNavigator() {
     return (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
               <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
     );
}

export default HomeStackNavigator;