import { View, Text } from 'react-native'
import React from 'react'
import IntroScreen from './introScreen'
import LoginScreen from './loginScreen'
import RegisterScreen from './registerScreen'
import MainScreen from './mainScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const IndexRootCompoment = () => {
  return (
    //<IntroScreen/>
    //<LoginScreen/>
    //<RegisterScreen/>
    //<MainScreen/>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default IndexRootCompoment