import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Login from './views/Login';
import Messages from './views/Messages';
import Chat from './views/Chat';
import Dialog from 'react-native-dialog';

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
          // <Scene
          //   key = 'createAccount'
          //   component = { CreateAccount }
          //   hideNavBar = { false }
          // />
          <Scene
            key = 'messages'
            component = { Messages }
            hideNavBar = { false }
            renderRightButton={() =>
              <TouchableOpacity
                style={styles.profileButton}
                onPress={() => {
                  alert('new feature coming soon!')
                }}
              >
              {/* <Text style={{fontSize: 30}}>+</Text> */}
              </TouchableOpacity>
            }
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
  profileButton: {
    marginRight: 10,
    height: 30,
    width: 30,
    marginBottom:10
  }
});
