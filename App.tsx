import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { ThemeProvider } from './src/context/ThemeContext/ThemeContext'
import PlansScreen from './src/screens/PlansScreen/PlansScreen'
import ProjectsScreen from './src/screens/ProjectsScreen/ProjectsScreen';


export type RootTabParamList = {
  Projects: undefined,
  Plans: undefined
}

const Tab = createBottomTabNavigator<RootTabParamList>()

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Plans">
          <Tab.Screen name="Plans" component={PlansScreen} />
          <Tab.Screen name="Projects" component={ProjectsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}