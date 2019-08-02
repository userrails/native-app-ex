import React from "react";
import { View, Text, Button } from "react-native";

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Login Screen</Text>
        <Text>Name: {this.props.name}</Text>
        <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button title="Go to Profile Image" onPress={() => this.props.navigation.navigate('ProfileImage')}
        />
        <Button title="Go to AlignTextPage" onPress={() => this.props.navigation.navigate('AlignTextCenterScreen')}
        />
      </View>
    );
  }
}
export default LoginScreen;