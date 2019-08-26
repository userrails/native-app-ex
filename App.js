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
import FlexWrap from './components/FlexWrap';
import AlignContentFlexEnd from './components/AlignContentFlexEnd';
import AlignContentCenter from './components/AlignContentCenter';
import AlignContentFlexStart from './components/AlignContentFlexStart';
import AlignContentSpaceBetween from './components/AlignContentSpaceBetween';
import AlignContentSpaceAround from './components/AlignContentSpaceAround';
import AlignContentStretch from './components/AlignContentStretch';
import Position from './components/Position';
import ZIndex from './components/ZIndex';
import Login from './components/auth/Login';
import Profile from './components/user/Profile';

const MainNavigator = createStackNavigator({
  Home: { screen: Login },
  Login: { screen: LoginScreen },
  ProfileImage: { screen: ProfileImage },
  AlignTextCenterScreen: { screen: AlignTextCenterScreen },
  ColorList: { screen: ColorList },
  TouchHighlight: { screen: TouchHighlight },
  Layouts: { screen: Layouts },
  FlexWrap: { screen: FlexWrap },
  AlignContentFlexEnd: { screen: AlignContentFlexEnd },
  AlignContentCenter: { screen: AlignContentCenter },
  AlignContentFlexStart: { screen: AlignContentFlexStart },
  AlignContentSpaceBetween: { screen: AlignContentSpaceBetween },
  AlignContentSpaceAround: { screen: AlignContentSpaceAround },
  AlignContentStretch: { screen: AlignContentStretch },
  Position: { screen: Position },
  ZIndex: { screen: ZIndex },
  Login: { screen: Login },
  Profile: { screen: Profile },
});

const App = createAppContainer(MainNavigator);

export default App;