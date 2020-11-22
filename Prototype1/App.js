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

//Stack navigator
import { createStackNavigator } from '@react-navigation/stack';
//Tab navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Drawer navigator
import { createDrawerNavigator } from '@react-navigation/drawer';

import {HomeScreen} from './screens/Home.js';
import {RegistrationScreen} from './screens/MainRegistration.js';

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <NavComponent.Navigator>
          <NavComponent.Screen
            name="Home"
            component={HomeScreen}
            options={{title:'Welcome'}}
          />
          <NavComponent.Screen
            name="MainRegistration"
            component={RegistrationScreen}

          />
          <NavComponent.Screen
            name="Login"
            component={LoginPage}

          />
          <NavComponent.Screen
            name="UploadProject"
            component={UploadProjectPage}

          />
          <NavComponent.Screen
            name="Review"
            component={Review}

          />
        </NavComponent.Navigator>
      </NavigationContainer>
    </>
  );
};



export default App;
