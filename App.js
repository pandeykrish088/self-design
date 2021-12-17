import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import Home from "./screens/Home";
import StopWatch from "./screens/StopWatch";
import Timer from "./screens/Timer";

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  StopWatch: StopWatch,
  Timer: Timer
});

const AppContainer = createAppContainer(TabNavigator); 

export default class App extends React.Component{
  render() {
  return (
    <View>
     <AppContainer/>
   </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
