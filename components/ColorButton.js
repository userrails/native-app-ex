import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native'

const colorButton = ({backgroundColor, onSelect=f=>f}) => (
    <TouchableHighlight style={styles.button}
        onPress={() => onSelect(backgroundColor)}
        underlayColor="orange">
            <View style={styles.row}>
                <View style={[styles.sample, {backgroundColor}]}>
                </View>
                <View>
                  <Text style={styles.text}>{backgroundColor}</Text>
                </View>
            </View>
        </TouchableHighlight>
)

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        fontSize: 20,
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: 'stretch',
        textAlign: 'center'
    },
    sample: {
        height: 20,
        width: 20,
        borderRadius: 10,
        margin: 5,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 20,
        margin: 5
    }
});

export default colorButton;