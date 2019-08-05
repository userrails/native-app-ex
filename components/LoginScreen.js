import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.menus}>
          <Button color="orange" title="Home" onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button title="Profile Image" onPress={() => this.props.navigation.navigate('ProfileImage')}
          />
          <Button color="green" title="AlignTextPage" onPress={() => this.props.navigation.navigate('AlignTextCenterScreen')}
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