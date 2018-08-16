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

// import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const BottomNav =  createMaterialBottomTabNavigator({
//   Home: { 
//     screen: HomeScreen
//   },
//   Surprise: { screen: SecondPage },
// }, {
//   initialRouteName: 'Home',
//   showIcon: true,
//   showLabel: true,
//   activeTintColor: '#f0edf6',
//   inactiveTintColor: '#3e2465',
//   barStyle: { backgroundColor: 'lightblue' },
//   navigationOptions: ({ navigation }) => ({
//     tabBarIcon: ({ focused, tintColor }) => {
//       const { routeName } = navigation.state;
//       let iconName;
//       if (routeName === 'Home') {
//         iconName = `md-home`;
//       } else if (routeName === 'Surprise') {
//         iconName = `md-contacts`;
//       }
//       return <Ionicons name={iconName} size={25} color={tintColor} />;
//     },
//   }),
// });


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
      title: "Home?",
      // headerLeft: null
    }
  },
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