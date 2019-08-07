import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
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
                <TouchableHighlight style={styles.button}
                onPress={() => this.changeColor('yellow')}
                underlayColor="orange">
                    <View style={styles.row}>
                        <View style={[styles.sample, { backgroundColor: 'yellow' }]}>
                            <Text style={styles.text}>Yellow</Text>
                        </View>
                    </View>
                </TouchableHighlight>
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
    button: {
        fontSize: 30,
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

export default TouchHighlight;
