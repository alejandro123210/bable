import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
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
            <Image
            style={{width:"100%",height:"100%", margin:`0%`,position:"absolute",zIndex:-1,}}
            source={{uri: "http://i.stack.imgur.com/7vMmx.jpg"}}
            />
                <TextInput placeholder="Name" style={styles.input}/>
                <TextInput keyboardType = 'numeric'placeholder="Phone number" style={styles.input}/>
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
        padding: 10,
        margin: 10,
        borderRadius:30,
        borderWidth: 1,

    },
})

export default CreateAccount
