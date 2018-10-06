import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Actions } from 'react-native-router-flux'; 

class CreateAccount extends React.Component {

    buttonPressed = () => {
        //this should activate twilio for verification, then sign the person up for bable
        //After that it does this
        Actions.messages()
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput placeholder="Name" style={styles.input}/>
                <TextInput placeholder="phone number" style={styles.input}/>
                <TouchableOpacity onPress={this.buttonPressed}>
                    <Text> Done </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input : {
        width: '70%',
        paddingBottom: 5,
        marginTop: 10,
        marginBottom: 10
    },
})

export default CreateAccount