import React from 'react';
import { 
        StyleSheet,
        Text,
        View
      } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={[styles.defaultText, styles.selectedText]}>Shiv</Text>
        <Text style={[styles.defaultText, styles.selectedText]}>Raj</Text>
        <Text style={[styles.defaultText, styles.selectedText]}>Badu</Text>
        <Text style={styles.defaultText}>Prz</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultText: {
    fontSize: 22,
    padding: 10,
    margin: 5,
    color: 'black',
    borderWidth: StyleSheet.hairlineWidth
  },
  selectedText: {
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: 'bold'
  }
});
