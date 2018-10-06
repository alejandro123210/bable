import { GiftedChat, Message } from 'react-native-gifted-chat';
import { Actions } from 'react-native-router-flux';
import React from 'react';
import { View } from 'react-native';


class Chat extends React.Component {

    //the messages should be here. 
    state = {
        messages:[]
    }

    //this is runs before the component mounts, this should load the messages with the specific user
    //this is also the page where translations will happen
    componentWillMount() {

    }

    render() {
        return (
            //configure gifted chat here
            <GiftedChat />
        );
    }
}

export default Chat;