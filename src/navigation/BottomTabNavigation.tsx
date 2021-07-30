import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeNavigation';
import ScannerStackNavigator from './ScannerNavigation';
import { TouchableOpacity } from 'react-native';
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
     return (
          // <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
          <Tab.Navigator>
               <Tab.Screen name="Home" component={HomeStackNavigator} />
               <Tab.Screen name="Scanner" component={ScannerStackNavigator} />
          </Tab.Navigator>
     );
}

function MyTabBar({ state, descriptors, navigation }: any) {
     const focusedOptions = descriptors[state.routes[state.index].key].options;
     const statePath = {
          pathX: "657",
          pathY: "675",
          pathA: "1500",
          pathB: "1500",
     };
     if (focusedOptions.tabBarVisible === false) {
          return null;
     }

     return (
          <View style={{ flexDirection: 'row', height: 91, alignItems: 'center', justifyContent: 'space-around' }}>

               {state.routes.map((route: any, index: any) => {
                    const { options } = descriptors[route.key];
                    const label =
                         options.tabBarLabel !== undefined
                              ? options.tabBarLabel
                              : options.title !== undefined
                                   ? options.title
                                   : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                         const event = navigation.emit({
                              type: 'tabPress',
                              target: route.key,
                              canPreventDefault: true,
                         });

                         if (!isFocused && !event.defaultPrevented) {
                              navigation.navigate(route.name);
                         }
                    };

                    const onLongPress = () => {
                         navigation.emit({
                              type: 'tabLongPress',
                              target: route.key,
                         });
                    };

                    return (

                         <View key={index + label} style={{ flex: 1, backgroundColor: isFocused ? "skyblue" : "white", justifyContent: 'center', alignItems: 'center' }}>
                              <TouchableOpacity
                                   accessibilityRole="button"
                                   accessibilityState={isFocused ? { selected: true } : {}}
                                   accessibilityLabel={options.tabBarAccessibilityLabel}
                                   testID={options.tabBarTestID}
                                   onPress={onPress}
                                   onLongPress={onLongPress}
                                   style={{ height: '100%', width: '80%', borderTopWidth: isFocused ? 3 : 0, justifyContent: 'center', alignItems: 'center' }}
                              >
                                   <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                                        {label}
                                   </Text>
                              </TouchableOpacity>
                         </View>
                    );
               })}
          </View>
     );
}
