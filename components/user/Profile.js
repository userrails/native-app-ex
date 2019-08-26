import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

class AlignContentCenter extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Welcome to your private page !!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896D3'
    },
    text: {
        color: '#fff'
    }
})

export default AlignContentCenter;