import React, {Component} from 'react';
import { View, StyleSheet, Button, Text, ScrollView } from 'react-native';

class Layouts extends Component {
    render () {
        return (
            <ScrollView>
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
                <Text style={styles.textHeader}>B. Justify Content</Text>
                <Text>B1. Justify Content Center for flex direction row</Text>
                <View style={styles.justify_content_center}>
                    <Text style={[styles.colorRed, styles.button]}>Red</Text>
                    <Text style={[styles.colorYellow, styles.button]}>Yellow</Text>
                    <Text style={[styles.colorGreen, styles.button]}>Green</Text>
                </View>
                <Text>B2. Justify Content flex end for flex direction row</Text>
                <View style={styles.justify_content_flex_end}>
                    <Text style={[styles.colorRed, styles.button]}>Red</Text>
                    <Text style={[styles.colorYellow, styles.button]}>Yellow</Text>
                    <Text style={[styles.colorGreen, styles.button]}>Green</Text>
                </View>
                <Text>B3. Justify Content flex start for flex direction row</Text>
                <View style={styles.justify_content_flex_start}>
                    <Text style={[styles.colorRed, styles.button]}>Red</Text>
                    <Text style={[styles.colorYellow, styles.button]}>Yellow</Text>
                    <Text style={[styles.colorGreen, styles.button]}>Green</Text>
                </View>
                <Text>B4. Justify Content space around for flex direction row</Text>
                <View style={styles.justify_content_space_around}>
                    <Text style={[styles.colorRed, styles.button]}>Red</Text>
                    <Text style={[styles.colorYellow, styles.button]}>Yellow</Text>
                    <Text style={[styles.colorGreen, styles.button]}>Green</Text>
                </View>
                <Text>B5. Justify Content space between for flex direction row</Text>
                <View style={styles.justify_content_space_between}>
                    <Text style={[styles.colorRed, styles.button]}>Red</Text>
                    <Text style={[styles.colorYellow, styles.button]}>Yellow</Text>
                    <Text style={[styles.colorGreen, styles.button]}>Green</Text>
                </View>
                <Text style={styles.noteText}>Note: Justify content properties with flexDirection: column doesnot work with scroll view in normal case as we did for row wise and it can be implemented on the top level view</Text>
            </ScrollView>
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
        borderRadius: 10,
        width: 65,
        height: 50
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
    },
    justify_content_center: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    justify_content_flex_end: {
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    justify_content_flex_start: {
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    justify_content_space_around: {
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    justify_content_space_between: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    noteText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'orange'
    }
})

export default Layouts;