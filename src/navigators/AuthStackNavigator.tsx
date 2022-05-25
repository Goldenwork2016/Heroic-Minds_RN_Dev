import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import RegistrationScreen from '../screens/RegistrationScreen'
import LoginScreen from '../screens/LoginScreen'

const AuthStack = createNativeStackNavigator()

const AuthStackNavigator = ({ navigation, route }: any) => {
   return (
      <AuthStack.Navigator
         screenOptions={{
            headerShown: false,
         }}>
         <AuthStack.Screen name={'Login'} component={LoginScreen} />
         <AuthStack.Screen name={'Registration'} component={RegistrationScreen} />
      </AuthStack.Navigator>
   )
}

export default AuthStackNavigator
