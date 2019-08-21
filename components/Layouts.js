import React, {Component} from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

class Layouts extends Component {
    render () {
        return (
            <View>
                <View>
                    <Text style={[styles.colorRed, styles.button]}>Red</Text>
                    <Text style={[styles.colorYellow, styles.button]}>Yellow</Text>
                    <Text style={[styles.colorGreen, styles.button]}>Green</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    colorRed: {
        backgroundColor: 'red'
    },
    colorYellow: {
        backgroundColor: 'yellow'
    },
    colorGreen: {
        backgroundColor: 'green'
    },
    button: {
        padding: 10,
        borderWidth: 2,
        borderRadius: 10
    }
})

export default Layouts;