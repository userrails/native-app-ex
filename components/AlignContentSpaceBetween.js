import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

class AlignContentSpaceBetween extends Component {
    render () {
        return (
            <View>
                <View style={{ flexWrap: 'wrap', flexDirection: 'column', alignContent: 'space-between' }}>
                    <View style={styles.boxStyle} />
                    <View style={styles.boxStyle} />
                    <View style={styles.boxStyle} />
                    <View style={styles.boxStyle} />
                    <View style={styles.boxStyle} />
                    <View style={styles.boxStyle} />
                    <View style={styles.boxStyle} />
                    <View style={styles.boxStyle} />
                    <View style={styles.boxStyle} />
                    <View style={styles.boxStyle} />
                    <View style={styles.boxStyle} />
                    <View style={styles.boxStyle} />
                    <View style={styles.boxStyle} />
                    <View style={styles.boxStyle} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    boxStyle: {
        height: 50, 
        width: 50, 
        borderWidth: 1, 
        backgroundColor: 'orange', 
        marginBottom: 5
      },
})

export default AlignContentSpaceBetween;