import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import { ThemeProvider, useThemeContext } from './src/context/ThemeContext/ThemeContext'
import PlansScreen from './src/screens/PlansScreen/PlansScreen'
import ProjectsScreen from './src/screens/ProjectsScreen/ProjectsScreen';


export type RootTabParamList = {
  Projects: undefined,
  Plans: undefined
}

const Tab = createBottomTabNavigator<RootTabParamList>()

export default function App() {
  const theme = useThemeContext()
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Plans" screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Projects') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Plans') {
              iconName = 'md-map';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          swipeEnabled: true
        })}
        tabBarOptions={{
          activeTintColor: theme.accent,
          activeBackgroundColor: theme.primary,
          inactiveTintColor: theme.fontColor,
          inactiveBackgroundColor: theme.primary
        }}
        >
          <Tab.Screen name="Plans" component={PlansScreen} />
          <Tab.Screen name="Projects" component={ProjectsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}