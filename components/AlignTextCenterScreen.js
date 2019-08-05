import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class AlignTextCenterScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.menus}>
          <Button color="orange" title="Home" onPress={() => this.props.navigation.navigate('Home')} />
          <Button color="orange" title="Login" onPress={() => navigate('Login', {name: 'Sraj'})}
          />
          <Button title="Profile" onPress={() => this.props.navigation.navigate('ProfileImage')}
          />
          <Button color="green" title="Notes" onPress={() => this.props.navigation.navigate('AlignTextCenterScreen')}
          />
        </View>

        <View style={styles.position}>
          <Text>My favourite pet animal</Text>
        </View>
        <View style={styles.pets_position}>
            <Text style={styles.defaultText}>Cow</Text>
            <Text style={styles.defaultText}>Dog</Text>
            <Text style={styles.defaultText}>Cat</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  position: {
    top: 180
  },
  pets_position: {
    top: 220,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  defaultText: {
    backgroundColor: 'pink',
    margin: 5,
    padding: 10,
    color: 'grey',
    borderWidth: 1
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

export default AlignTextCenterScreen;