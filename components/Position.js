import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native'

class Position extends Component {
    render() {
      return (
        <View style={styles.container}>
          <View >
          <View style={styles.box1}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.box3}>
            <Text style={styles.text}>3</Text>
          </View>
        </View>

        <View>
          <View style={styles.box4}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.box5}>
            <Text style={styles.text}>2</Text>
          </View>
        </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    box1: {
      position: 'absolute',
      top: 40,
      left: 40,
      width: 100,
      height: 100,
      backgroundColor: 'red'
    },
    box2: {
      position: 'absolute',
      top: 80,
      left: 80,
      width: 100,
      height: 100,
      backgroundColor: 'blue'
    },
    box3: {
      position: 'absolute',
      top: 120,
      left: 120,
      width: 100,
      height: 100,
      backgroundColor: 'green'
    },
    box4: {
      top: 300,
      left: 10,
      height: 100,
      backgroundColor: 'orange'
    },
    box5: {
      top: 350,
      left: 10,
      height: 100,
      backgroundColor: 'navy'
    },

    text: {
      color: '#ffffff',
      fontSize: 80
    }
  });

  export default Position;