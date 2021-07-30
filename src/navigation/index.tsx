import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
const Stack = createStackNavigator();
import HomeStackNavigator from './HomeNavigation';
import LoginNavigation from "./LoginNavigation";
import BottomTabNavigator from './BottomTabNavigation';

const theme = {
     ...DefaultTheme,
     colors: {
          ...DefaultTheme.colors,
          border: "Transparent"
     }
}

export default function NavigationWrapper() {
     return (
          <SafeAreaProvider>
               <NavigationContainer theme={theme}>
                    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
                         <Stack.Screen name="Login" component={LoginNavigation} />
                         <Stack.Screen name="Main" component={BottomTabNavigator} />
                    </Stack.Navigator>
               </NavigationContainer>
          </SafeAreaProvider>
     );
}