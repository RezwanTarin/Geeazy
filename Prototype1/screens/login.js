import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

const LoginPage = ({navigation})=>{
    return(
      <SafeAreaView style={{flexDirection:'column', flex:0.9, justifyContent:'space-between'}}> 
      <Text>Login</Text>
      <Text>Email*</Text>
      <TextInput placeholder="Enter Email" style={{borderColor:'grey', borderWidth: 1, width:300}} />
      <Text>Password*</Text>
      <TextInput placeholder="Enter Password" style={{borderColor:'grey', borderWidth: 1, width:300}} />
      <Button title="Login" />
      <Button title="Sign Up" onPress={()=>{navigation.navigate('MainRegistration');}} />
      <Button title="Forgot Password" />
      </SafeAreaView>
    );
  };

  export {LoginPage};