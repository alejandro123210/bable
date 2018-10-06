import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Actions } from 'react-native-router-flux'; 

class CreateAccount extends React.Component {

    buttonPressed = () => {
        //this should activate twilio for verification, then sign the person up for bable
    }

    render() {
        return(
            <View>
                <View>
                    <TextInput placeholder="Name" style={styles.inputs}/>
                    <TextInput placeholder="phone number" style={styles.inputs}/>
                    <TouchableOpacity onPress={this.buttonPressed}>
                        <Text> Done </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputs: {
        marginTop: 30,
        paddingTop: 30,
        height: 200
    }
});

export default CreateAccount