import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Actions } from 'react-native-router-flux'; 

class Login extends React.Component {

    donePressed = () => {
        //this should activate twilio and sign the person in
    }

    createAccountPressed = () => {

    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput placeholder="phone number" style={styles.input}/>
                <TouchableOpacity onPress={this.donePressed} style={styles.buttons}>
                    <Text> Done </Text>
                </TouchableOpacity>
                <Text> or </Text>
                <TouchableOpacity onPress={this.createAccountPressed} style={styles.buttons}>
                    <Text> Create Account!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input : {
        width: '70%',
        paddingBottom: 5,
    },
    buttons: {
        paddingTop: 10,
        paddingBottom: 10
    }
})

export default Login