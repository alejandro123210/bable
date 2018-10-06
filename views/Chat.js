import { GiftedChat, Message } from 'react-native-gifted-chat';
import React from 'react';

class Chat extends React.Component {

    //when send is hit
    onSend(messages = []) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
    }

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
            <GiftedChat 
                renderAvatar={null}
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        );
    }
}

export default Chat;