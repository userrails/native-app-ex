import React from "react";
import { View, Text, Button } from "react-native";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Welcome to Home Screen.</Text>
        <Button title="Go to Login Page" onPress={() => navigate('Login', {name: 'Sraj'})}
        />
        <Button title="Go to Profile Image" onPress={() => navigate('Login', {name: 'Sraj'})}
        />
        <Button title="Go to AlignTextPage" onPress={() => navigate('Login', {name: 'Sraj'})}
        />
      </View>
    );
  }
}
export default HomeScreen;