// In App.js in a new project

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Scanner } from "../components/index";
const Stack = createStackNavigator();

function ScannerStackNavigator() {
     return (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
               <Stack.Screen name="Scanner" component={Scanner} />
          </Stack.Navigator>
     );
}

export default ScannerStackNavigator;