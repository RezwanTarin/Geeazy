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

const RegistrationScreen = ({navigation})=>{
    return(
      <SafeAreaView style={{flexDirection:'column', flex:0.9, justifyContent:'space-between'}}> 
      <Text>Geeazy</Text>
      <Text>Register as...</Text>
      <Button title="Handymen"
      onPress={()=>{navigation.navigate('Profile');}}
        />
      <Button title="Local Contractor"
      onPress={()=>{navigation.navigate('Login');}}
        />
      <Button title="Student"
      onPress={()=>{navigation.navigate('Home');}}
        />
      <Button title="Customer"
      onPress={()=>{navigation.navigate('UploadProject');}}
        />  

      
  
      <Button title="Back" onPress={()=>{navigation.goBack();}}/>
      </SafeAreaView>
    );
  };

  export {RegistrationScreen};