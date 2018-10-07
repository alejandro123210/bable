import React from 'react';
import { ScrollView, StyleSheet, View, Button } from 'react-native';
import TableCell from './components/TableCell'
import Dialog from 'react-native-dialog';
import SendBird from 'sendbird'

class Messages extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            contacts:[
            
            ],
            newText: false,
            message: '',
            otherID: '',
        };
    }

    componentWillMount () {
        contactList = []
        let actualThis = this;
        sb = new SendBird({appId: 'AC48960C-67E0-4AE9-BB15-21B3EE4F46CA'})
        sb.GroupChannel.getChannel("sendbird_group_channel_75337281_4572d512314db4bc1741f7616c4f28d1053b0c60", function (channel, error ){
            if(error){
                alert(error)
            } else {
                var messageListQuery = channel.createPreviousMessageListQuery();
                messageListQuery.load(5, true, async function(messageList, error){
                    if (error) {
                        alert(error);
                        return;
                    }
                    date = "";
                    
                    for (var i = 0; i < 3; i++){
                        contact = {
                            key: messageList[i]._sender.userId + String(i),
                            name: messageList[i]._sender.nickname,
                            lastMessage: messageList[i].message,
                            lastMessageTime: date,
                            image:'https://assets-cdn.github.com/images/modules/open_graph/github-mark.png',
                        }
                        contactList.push(contact);
                    } 
                    actualThis.setState({
                        contacts: contactList
                    })
                })
            }
        })
    }


    showNewMessage = () => {
        this.setState({
            newText: true
        })
        
    }

    cancelPressed = () => {
        this.setState({
            newText: false
        })
    }

    submitPressed = () => {
        sb = new SendBird({appId: 'AC48960C-67E0-4AE9-BB15-21B3EE4F46CA'})
        //creates channel
        sb.GroupChannel.createChannelWithUserIds(['9734779880'], true, this.props.userID + this.state.otherID, null, null, null, function(createdChannel, error){
            if (error) {
                alert(error)
                return;
            } else {
                
            }
        });
        
        sb.GroupChannel.getChannel("sendbird_group_channel_75337281_4572d512314db4bc1741f7616c4f28d1053b0c60", function (channel, error ){
            myChannel = channel
            if (error) {
                alert('there was a problem /:')
            } else {
                alert(channel)
                myChannel.sendUserMessage(this.state.message, null, null, function(message, error){
                    if (error) {
                        alert(error);
                        return;
                    } else {
                        alert(message)
                    }
                })
            }

        }.bind(this))

        //turns off the popup view
        this.setState({
            newText: false
        })
        // alert('success!')
    }

    

    render() {
        return(
            <View style={styles.outerView}>
                <ScrollView style = {styles.scrollContainer}>
                    <Button title="New Message" onPress={this.showNewMessage}/>
                    {this.state.contacts.map(person =>
                    //tableCell is a custom class, check it out it's in here
                        <TableCell
                            name={person.name}
                            lastMessage={person.lastMessage}
                            key={person.key}
                            lastMessageTime={person.lastMessageTime}
                            image={person.image}
                        />
                    )}
                </ScrollView>
                <Dialog.Container visible={this.state.newText}>
                    <Dialog.Title>New Message</Dialog.Title>
                    <Dialog.Description>
                        who's getting this message?
                    </Dialog.Description>
                    <Dialog.Input placeholder="phone number" onChangeText={(text) => {this.setState({otherID: text})}}/>
                    <Dialog.Input placeholder="message" onChangeText={(text)=>{this.setState({message: text})}}/>
                    <Dialog.Button label="Cancel" onPress={this.cancelPressed}/>
                    <Dialog.Button label="Send" onPress={this.submitPressed}/>
                </Dialog.Container>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        paddingVertical: 2,
    },
})

export default Messages