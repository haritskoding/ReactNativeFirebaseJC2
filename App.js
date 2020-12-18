import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import moduleName from 'react-native'

import LoginScreen from './src/Screens/LoginScreen';
import OnBoarding from './src/Screens/OnBoarding';
import AddUser from './src/Screens/AddUser';
import ListUser from './src/Screens/ListUser';
import ListScreen from './src/Screens/ListScreen';
import ShowMap from './src/Screens/ShowMap';

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Onboarding"
        headerMode="none"
      >
        <AppStack.Screen name="Onboarding" component={OnBoarding} />
        <AppStack.Screen name="Login" component={LoginScreen} />
        <AppStack.Screen name="AddUser" component={AddUser} />
        <AppStack.Screen name="ListUser" component={ListUser} />
        <AppStack.Screen name="ListScreen" component={ListScreen} />
        <AppStack.Screen name="LoginScreen" component={LoginScreen} />
        <AppStack.Screen name="ShowMap" component={ShowMap} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default App

