import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator, BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import {
  ThemeProvider,
  useThemeContext,
} from "./src/context/ThemeContext/ThemeContext";
import PlansScreen from "./src/screens/PlansScreen/PlansScreen";
import ProjectsScreen from "./src/screens/ProjectsScreen/ProjectsScreen";
import planReducer from "./src/store/reducers/PlanReducer";
import { watchPlanSaga } from "./src/store/sagas/PlanSaga";

export type RootTabParamList = {
  Projects: undefined;
  Plans: undefined;
};

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  plans: planReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function* combineSagas() {
  yield all([watchPlanSaga()]);
}
sagaMiddleware.run(combineSagas);

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  const theme = useThemeContext();
  return (
    <ThemeProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Plans"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName: string = "md-map";
                if (route.name === "Projects") {
                  iconName = focused ? "ios-list-box" : "ios-list";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              swipeEnabled: true,
            })}
            tabBarOptions={{
              activeTintColor: theme.accent,
              activeBackgroundColor: theme.primary,
              inactiveTintColor: theme.fontColor,
              inactiveBackgroundColor: theme.primary,
            }}
          >
            <Tab.Screen name="Plans" component={PlansScreen} />
            <Tab.Screen name="Projects" component={ProjectsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}
