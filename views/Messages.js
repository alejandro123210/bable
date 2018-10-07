import React from 'react';
import { ScrollView, StyleSheet, View, Button } from 'react-native';
import TableCell from './components/TableCell'
import Dialog from 'react-native-dialog';
import SendBird from 'sendbird'

class Messages extends React.Component {


    //we're gonna need to render all the user's messages in here, this will show recent conversations.
    state = {
        contacts:[
            {
                key: 1,
                name: 'name',
                lastMessage: 'message goes here',
                lastMessageTime: 'time of last message goes here',
                image: 'https://assets-cdn.github.com/images/modules/open_graph/github-mark.png'
            },
        ],
        newText: false,
        message: '',
        otherID: ''
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
        const sb = new SendBird({ 
            'appId': 'AC48960C-67E0-4AE9-BB15-21B3EE4F46CA' 
        });
        sb.GroupChannel.createChannelWithUserIds([this.state.otherID], true, this.props.userID + this.state.otherID, null, this.state.message, null, function(createdChannel, error){
            if (error) {
                alert(error)
                return;
            } else {
                alert('success!')
            }
        });
        this.setState({
            newText: false
        })
        alert('success!')
    }

    render() {
        return(
            <View style={styles.outerView}>
                <ScrollView style = {styles.scrollContainer}>
                    <Button title="New Message" onPress={this.showNewMessage}/>
                    {mappedText = this.state.contacts.map(person =>
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
                <View></View>
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
