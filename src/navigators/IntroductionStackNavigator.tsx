import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import IntroductionScreen from '../screens/IntroductionScreen'
import TutorialScreen from '../screens/TutorialScreen'

import { AppProvider } from '../context/AppContext'


const IntroductionStack = createNativeStackNavigator()

const IntroductionStackNavigator = () => {
   return (
      <AppProvider>
         <IntroductionStack.Navigator
            screenOptions={{
               headerShown: false,
            }}>
            <IntroductionStack.Screen name={'Introduction'} component={IntroductionScreen} />
            <IntroductionStack.Screen name={'Tutorial'} component={TutorialScreen} />
         </IntroductionStack.Navigator>
      </AppProvider>
   )
}

export default IntroductionStackNavigator
