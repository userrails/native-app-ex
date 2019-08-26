import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native'

class ZIndex extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <View style={styles.wrapper}>
            <View style={styles.back}></View>
            <View style={styles.front}></View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex:1,
    },
    back: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        zIndex: 1,
    },
    front: {
        position: 'absolute',
        top:25,
        left:25,
        width: 50,
        height:50,
        backgroundColor: 'red',
        zIndex: 1
    }
});

export default ZIndex;