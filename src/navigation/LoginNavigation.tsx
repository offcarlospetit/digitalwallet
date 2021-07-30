// In App.js in a new project

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { Login, SignUp } from "../components/index";

function LoginStackNavigator() {
     return (
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SignUp">
               <Stack.Screen name="SignUp" component={SignUp} />
               <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
     );
}

export default LoginStackNavigator;