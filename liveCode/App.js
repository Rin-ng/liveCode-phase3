/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {
  createStackNavigator,
} from 'react-navigation';
import WelcomeScreen from './src/containers/Welcome'
import EndGameScreen from './src/containers/EndGame'
import HomeScreen from './src/containers/Home'
import {Provider} from 'react-redux'
import store from './src/redux/store/index'

const StackNav = createStackNavigator({
  Welcome: { 
    screen: WelcomeScreen,
    navigationOptions:{
      title: "Welcome"
    }
 },
  Home: { 
    screen: HomeScreen,
    navigationOptions:{
      title: "Snake and Up!",
    }
  },
  EndGame: {
    screen: EndGameScreen,
    navigationOptions:{
      title: "Replay?",
      headerLeft: null
    }
  }
});


export default class App extends Component{
  render() {
    return (
      <Provider store = {store}>
        <StackNav/>
      </Provider>
    );
  }
}