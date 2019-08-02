import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AlignTextCenterScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
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
  }
})

export default AlignTextCenterScreen;