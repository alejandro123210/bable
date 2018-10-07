// import React from 'react';
import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text , Image, AppRegistry,PixelRatio} from 'react-native';
import { Actions } from 'react-native-router-flux';

const remote = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8dAs0xewuQbajg6f2CtuQ4jJr2qOWzN--0iJ53tPgs8luF4h';
class Login extends React.Component {

    donePressed = () => {
        //this should activate twilio and sign the person in
        Actions.messages();
    }

    createAccountPressed = () => {
        Actions.createAccount();
    }

    render() {

        return(

            <View style={styles.container}>
            <Image
            style={{width:"100%",height:"100%", margin:`0%`,position:"absolute",zIndex:-1,}}
            source={{uri: "http://i.stack.imgur.com/7vMmx.jpg"}}
            />
            <Image
            style={{top:"10%",width:PixelRatio.getPixelSizeForLayoutSize(100),height:PixelRatio.getPixelSizeForLayoutSize(100),position:"absolute"}}
            source={{uri: "https://i.imgur.com/msB1D8r.png"}}
            />

                <TextInput placeholder="Phone number" style={styles.input}keyboardType = 'numeric'/>
                <TouchableOpacity onPress={this.donePressed} style={styles.buttons}>
                    <Text> Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.createAccountPressed} style={styles.buttons}>
                    <Text> Create Account</Text>
                </TouchableOpacity>


            </View>
        );
    }
}
AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    input : {
        width: '70%',
        padding: 10,
        borderWidth:1,
        borderRadius:30,
        borderRightColor: 'black',
    },
    buttons: {
        paddingTop: 10,
        paddingBottom: 10
    }
})

export default Login
