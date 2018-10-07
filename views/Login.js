// import React from 'react';
import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text , Image, AppRegistry,PixelRatio} from 'react-native';
import { Actions } from 'react-native-router-flux';
import SendBird from 'sendbird';

const remote = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8dAs0xewuQbajg6f2CtuQ4jJr2qOWzN--0iJ53tPgs8luF4h';
class Login extends React.Component {

    state = {
        userID: null,
        userNickname: null,
        inputPlaceholder: "phone number",
        inputKeyboardType: 'number-pad',
        newUserSignup: false
    }

    donePressed = () => {
        //this configures sendbird.
        const sb = new SendBird({
            'appId': 'AC48960C-67E0-4AE9-BB15-21B3EE4F46CA'
        });
        const { userID } = this.state;
        sb.connect(userID, function(user, error){
            if (error){
                //this tells the user if they done goofed
                alert("there was a problem")
            } else {
                //this checks if the user exists
                if (user.nickname != '') {
                    Actions.messages({
                        // userID: userID,
                        // nickname: user.nickname,
                    });
                } else {
                    //this changes the view so that the user can enter their name
                    this.setState({
                        newUserSignup: true,
                        inputPlaceholder: "Name",
                        //inputKeyboardType: "default",
                    });
                    if (this.state.userNickname != null && this.state.userNickname != ''){
                        //this updates the user to have a name
                        sb.updateCurrentUserInfo(this.state.userNickname, null, (response, error) => {
                            if (error) {
                                alert(error);
                            } else {
                                Actions.messages({
                                    nickname: this.state.userNickname,
                                    userID: userID,
                                })
                            }
                        })
                    } else if (this.state.userNickname == ''){
                        //this just tells the user they need a name!
                        alert('you need a name!')
                    }
                    if (this.state.newUserSignup == true && this.state.userNickname == null){
                        this.myTextInput.clear();
                        this.setState({
                            //this inefficiently gets the user to get the alert when they don't have a username
                            userNickname: ''
                        })
                    }
                }
            }
        }.bind(this))
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
                <TextInput
                    keyboardType = 'numeric'
                    ref={input => { this.myTextInput = input }}
                    placeholder={this.state.inputPlaceholder}
                    style={styles.input}
                    onChangeText={(text)=>{
                        //this is the setup for changing to a name input after the number if there is no user
                        if(this.state.newUserSignup == false){
                            this.setState({
                                userID: text
                            })
                        } else {
                            this.setState({
                                userNickname: text
                            })
                        }

                    }}
                />
                <TouchableOpacity onPress={this.donePressed} style={styles.buttons}>
                    <Text> Login</Text>
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
