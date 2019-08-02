import React from 'react';
import { 
        StyleSheet,
        Text,
        View,
        Button
      } from 'react-native';

import { createStackNavigator, createAppContainer } from "react-navigation";


import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen'
import ProfileImage from './components/ProfileImage';
import AlignTextCenterScreen from './components/AlignTextCenterScreen';


const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  ProfileImage: { screen: ProfileImage },
  AlignTextCenterScreen: { screen: AlignTextCenterScreen }
});

const App = createAppContainer(MainNavigator);

export default App;