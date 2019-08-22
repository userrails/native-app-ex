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
import ColorList from './components/ColorList';
import TouchHighlight from './components/TouchHighlight';
import Layouts from './components/Layouts';

const MainNavigator = createStackNavigator({
  Home: { screen: Layouts },
  Login: { screen: LoginScreen },
  ProfileImage: { screen: ProfileImage },
  AlignTextCenterScreen: { screen: AlignTextCenterScreen },
  ColorList: { screen: ColorList },
  TouchHighlight: { screen: TouchHighlight },
  Layouts: { screen: Layouts }
});

const App = createAppContainer(MainNavigator);

export default App;