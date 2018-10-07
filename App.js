import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Login from './views/Login';
import CreateAccount from './views/CreateAccount';
import Messages from './views/Messages';
import Chat from './views/Chat';

export default class App extends React.Component {

  componentDidMount(){
    //any configuration like API keys goes here
  }


  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene
            key = 'login'
            component = { Login }
            hideNavBar = { true }

          />
          <Scene
            key = 'createAccount'
            component = { CreateAccount }
            hideNavBar = { true }
          />
          <Scene
            key = 'messages'
            component = { Messages }
            hideNavBar = { false }
          />
          <Scene
            key = 'chat'
            component = { Chat }
            hideNavBar = { false }
          />
        </Scene>
      </Router>
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
