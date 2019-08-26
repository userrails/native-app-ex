import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default  class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    componentDidMount() {
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {
        var value = await AsyncStorage.getItem("user");
        if (value !== null) {
            this.props.navigation.navigate('Profile')
        }
    } 

    render () {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.header}>LOGIN</Text>
                    <TextInput style={styles.textInput} placeholder="Email"
                        onChangeText={ (email) => this.setState({email}) }
                        underlineColorAndroid='transparent'
                    />
                    <TextInput style={styles.textInput} placeholder="Password"
                        onChangeText={ (password) => this.setState({password}) }
                        underlineColorAndroid='transparent'
                    />
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.login}
                    >
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }

    login = () => {
        alert('test');
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896d3',
        paddingLeft: 40,
        paddingRight: 40,
    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold',
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#01c853',
        padding: 20,
        alignItems: 'center',  
    }  
})