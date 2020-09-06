


import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import home from './screens/home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import splashScreen from './screens/splash';
import signup from './screens/signup';
import login from './screens/login';
import features from './screens/features';
import loading from './screens/loading'
const Stack=createStackNavigator();

const styles = StyleSheet.create({
  appview:{
    flex:1,
    backgroundColor: '#000000',
    
  }
});


export default function App(){
  
    return (
      
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#ffb6c1'}}}>
          <Stack.Screen name="Vishesh" component={splashScreen}/>
          <Stack.Screen name="loading" component={loading}/>
          <Stack.Screen name="Home" component={home}/>
          <Stack.Screen name="Options" component={features}/>
          <Stack.Screen name="Login" component={login}/>
          <Stack.Screen name="SignUp" component={signup}/>
         </Stack.Navigator>
         </NavigationContainer>
    );
  

}


