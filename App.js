import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  state = {
    text: 'hello world'
  }

  onPress = () => {
    this.setState({
      text: 'you touched me'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
        <Button title="press me" onPress={this.onPress}/>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
