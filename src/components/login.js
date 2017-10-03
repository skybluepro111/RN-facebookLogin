import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Image,
    AsyncStorage,
    ActivityIndicator
} from 'react-native';

import FBSDK from 'react-native-fbsdk';
const {
    LoginButton,
    AccessToken,
    LoginManager,
    GraphRequest,
    GraphRequestManager,
  } = FBSDK;

      
export default class Login extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container} >
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions);
                AccessToken.getCurrentAccessToken().then(
                  (data) => {  
                      console.log("data", data);
                      navigate('WelcomePage');   })

              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });