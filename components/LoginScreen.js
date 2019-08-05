import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menus}>
          <Button color="orange" title="Home" onPress={() => navigate('Login', {name: 'Sraj'})}
          />
          <Button title="Profile Image" onPress={() => navigate('Login', {name: 'Sraj'})}
          />
          <Button color="green" title="AlignTextPage" onPress={() => navigate('Login', {name: 'Sraj'})}
          />
        </View>
        <View>
          <Text style={styles.navigationText}>Login Screen</Text>
          <Text style={styles.navigationText}>Name: {this.props.navigation.state.params.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  menus: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center'
  },
  navigationText: {
    fontSize: 20,
    color: 'red',
    marginLeft: 40
  },
})

export default LoginScreen;