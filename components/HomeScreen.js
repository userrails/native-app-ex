import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.menus}>
          <Button color="orange" title="Login Page" onPress={() => navigate('Login', {name: 'Sraj'})}
          />
          <Button title="Profile Image" onPress={() => this.props.navigation.navigate('ProfileImage')}
          />
          <Button color="green" title="AlignTextPage" onPress={() => this.props.navigation.navigate('AlignTextCenterScreen')}
          />
        </View>
        <View>
          <Text style={styles.navigationText}>Welcome to Home Screen.</Text>  
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

export default HomeScreen;