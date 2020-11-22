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

import DropDownPicker from 'react-native-dropdown-picker';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

const HomeScreen = ({navigation})=>{
    
    
    return(
      <View style={{flexDirection:'column', flex:0.9, justifyContent:'space-between'}}>
      
      <Text>Geeazy</Text>
      <Button title="Sign Up"
      onPress={()=>{navigation.navigate('MainRegistration');}}
        />
      <Button title="Login"
      onPress={()=>{navigation.navigate('Login');}}
        />
      <Button title="Home"
      onPress={()=>{navigation.navigate('Home');}}
        />
      <Button title="Post a Project"
      onPress={()=>{navigation.navigate('UploadProject');}}
        />
      <Button title="Write a Review"
      onPress={()=>{navigation.navigate('Review');}}
        />
      <Button title="How it Works"
      
        />
      


      <Text>Service Type</Text>
      <TextInput placeholder="Eg. Plumbing, Carpenter, Gardening, etc." style={{borderColor:'grey', borderWidth: 1, width:300}} />
      
      <DropDownPicker
        items={[
            {label: 'Toronto'},
            {label: 'Ottawa'},
            {label: 'Montreal'},
            {label: 'Vancouver'}
        ]}
        defaultNull
        placeholder="Select City"
        containerStyle={{height: 40}}
      />

      <Button title="Search" style={{justifyContent:'space-between'}} />
      </View>  
      
    );
  };

  

  


  export {HomeScreen};