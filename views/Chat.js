import { GiftedChat, Message } from 'react-native-gifted-chat';
import React from 'react';
import SendBird from 'sendbird';
import {View} from 'react-native'

class Chat extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            messages: [
            ]
        }
    }

    //when send is hit
    onSend(messages = []) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
        console.log(this.state.messages)
    }

    //the messages should be loaded here. 
    componentDidMount(){
        messageList = []
        let actualThis = this;
        sb = new SendBird({appId: 'AC48960C-67E0-4AE9-BB15-21B3EE4F46CA'})
        sb.GroupChannel.getChannel("sendbird_group_channel_75337281_4572d512314db4bc1741f7616c4f28d1053b0c60", function (channel, error ){
            if(error){
                console.log(error)
            } else {
                console.log("it's not an error")
                var messageListQuery = channel.createPreviousMessageListQuery();
                messageListQuery.load(5, true, async function(messageList, error){
                    if (error) {
                        console.log(error)
                        return;
                    } else {
                        console.log(messageList)
                        for (var i = 0; i < 2; i++){
                            if (messageList[i]._sender.nickname = actualThis.props.nameOfUser){
                                message = {
                                    _id: 1,
                                    text: messageList[i].message,
                                    createdAt: new Date(),
                                    user: {
                                        _id: 2,
                                        name: messageList[i]._sender.nickname,
                                        avatar: 'https://assets-cdn.github.com/images/modules/open_graph/github-mark.png'
                                    }
                                }
                                console.log(message)
                                messageList.push(message);
                            }
                        } 
                        // actualThis.setState({
                        //     messages: messageList
                        // })
                        console.log(this.state.message)
                    }
                })
            }
        })
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