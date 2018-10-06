import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TableCell from './components/TableCell'

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
        ]
    }

    render() {
        return(
            <ScrollView style = {styles.scrollContainer}>
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
        );
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        paddingVertical: 2,
    }
})

export default Messages