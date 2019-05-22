import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from "./screens/LoginScreen/LoginScreen";
import { MapScreen } from "./screens/MapScreen/MapScreen";
import { SwipeScreen } from "./screens/SwipeScreen/SwipeScreen";
import { ReviewScreen } from "./screens/ReviewScreen/ReviewScreen";
import { createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { AppProvider } from './AppProvider';

const TabNavigator = createBottomTabNavigator({
  map: MapScreen,
  swipe: SwipeScreen,
  review: ReviewScreen
});

const MainNavigator = createSwitchNavigator({
  auth: LoginScreen,
  main: TabNavigator
}, {
  initialRouteName: "main"
})

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppProvider>
        <AppContainer />
      </AppProvider>
    );
  }
}

