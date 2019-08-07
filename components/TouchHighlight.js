import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native'

class TouchHighlight extends Component {
    constructor() {
        super()
        this.state = {
            backgroundColor: 'blue'
        }
        this.changeColor = this.changeColor.bind(this);
    }
    
    changeColor(backgroundColor) {
        this.setState({backgroundColor})
    }

    render () {
        const { backgroundColor } = this.state
        
        return (
            <View style={[styles.container, { backgroundColor }]}>
                <View style={styles.row}>
                    <View style={[styles.sample, { backgroundColor: 'yellow' }]}>
                        <Text style={styles.text}>Yellow</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
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

export default TouchHighlight;
