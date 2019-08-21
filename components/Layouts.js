import React, {Component} from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

class Layouts extends Component {
    render () {
        return (
            <View>
                <Text style={styles.textHeader}>A. Flex Direction</Text>
                <Text>A1. Flex Direction Row</Text>
                <View style={styles.flex_dir_row}>
                    <Text style={[styles.colorRed, styles.button]}>Red</Text>
                    <Text style={[styles.colorYellow, styles.button]}>Yellow</Text>
                    <Text style={[styles.colorGreen, styles.button]}>Green</Text>
                </View>
                <Text>A2. Flex Direction Row Reverse</Text>
                <View style={styles.flex_dir_row_reverse}>
                    <Text style={[styles.colorRed, styles.button]}>Red</Text>
                    <Text style={[styles.colorYellow, styles.button]}>Yellow</Text>
                    <Text style={[styles.colorGreen, styles.button]}>Green</Text>
                </View>
                <Text>A3. Flex Direction Column</Text>
                <View style={styles.flex_dir_column}>
                    <Text style={[styles.colorRed, styles.button]}>Red</Text>
                    <Text style={[styles.colorYellow, styles.button]}>Yellow</Text>
                    <Text style={[styles.colorGreen, styles.button]}>Green</Text>
                </View>
                <Text>A4. Flex Direction Column Reverse</Text>
                <View style={styles.flex_dir_column_reverse}>
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
    },
    flex_dir_row: {
        flexDirection: 'row'
    },
    flex_dir_row_reverse: {
        flexDirection: 'row-reverse'
    },
    flex_dir_column: {
        flexDirection: 'column'
    },
    flex_dir_column_reverse: {
        flexDirection: 'column-reverse'
    },
    textHeader: {
        fontWeight: 'bold',
        color: 'blue',
        textAlign: 'center',
        fontSize: 18
    }
})

export default Layouts;