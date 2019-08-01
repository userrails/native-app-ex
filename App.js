import React from 'react';
import { 
        StyleSheet,
        Text,
        View
      } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={[styles.defaultText, styles.selectedText, styles.fontBlue]}>Hello World</Text>
        <Text style={[styles.defaultText, styles.selectedText, styles.fontBlue]}>Shiv</Text>
        <Text style={[styles.defaultText, styles.selectedText, styles.fontBlue]}>Raj</Text>
        <Text style={[styles.defaultText, styles.selectedText, styles.fontBlue]}>Badu</Text>
        <Text style={[styles.defaultText, styles.nepaliText, styles.fontWhite]}>शिव राज बडु</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 22,
    backgroundColor: '#DDD',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around', // move content to center of screen, other options: flex-start, flex-end, space-between, space-around
  },
  defaultText: {
    fontSize: 12,
    padding: 10,
    margin: 5,
    borderWidth: StyleSheet.hairlineWidth
  },
  selectedText: {
    backgroundColor: 'yellow',
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  nepaliText: {
    backgroundColor: 'blue',
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  fontBlue: {
    color: 'blue'
  },
  fontWhite: {
    color: 'white'
  }
});
