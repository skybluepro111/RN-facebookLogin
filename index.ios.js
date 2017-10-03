/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/components/login';
import Welcome from './src/components/welcome';


const WatchList = StackNavigator({
    Home: { screen: Login },
    WelcomePage: { screen: Welcome },
  },
  {
    intialRouteName: 'Home',
    // intialRouteName: 'WelcomePage',
    headerMode: 'none', 
    mode: 'card',
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('WatchList', () => WatchList);
