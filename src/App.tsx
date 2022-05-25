import React, { useState, useEffect } from 'react'
import { registerRootComponent } from 'expo'
import AppLoading from 'expo-app-loading'
import Amplify from 'aws-amplify'
import useFonts from './hooks/useFont'
import 'react-native-gesture-handler'
import * as Updates from 'expo-updates'

import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ThemeProvider } from 'styled-components'
import { ToastProvider } from 'react-native-styled-toast'

import RootTabNavigator from './navigators/RootStackNavigator'

import AuthProvider from './context/AuthContext'
import AudioProvider from './context/AudioContext'

import * as Sentry from 'sentry-expo'

Sentry.init({
   dsn: 'https://21c5322a1ec945f38696f42ac6c95ee1@o1091476.ingest.sentry.io/6109795',
   enableInExpoDevelopment: true,
   debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
})

Amplify.configure({
   Auth: {
      identityPoolId: 'ca-central-1:c40104e9-d285-4ec1-adfe-6f7b3c5352f2', // REQUIRED - Amazon Cognito Identity Pool ID
      region: 'ca-central-1', // REQUIRED - Amazon Cognito Region
      userPoolId: 'ca-central-1_HKvZJZAYq', // OPTIONAL - Amazon Cognito User Pool ID
      userPoolWebClientId: '5sun59unkt640hm39vgq9gdln0', // OPTIONAL - Amazon Cognito Web Client ID
   },
})

const RootStack = createNativeStackNavigator()

const App = () => {
   const [IsReady, SetIsReady] = useState(false)

   const checkUpdates = async () => {
      try {
         const update = await Updates.checkForUpdateAsync()

         if (update.isAvailable) {
            await Updates.fetchUpdateAsync()
            await Updates.reloadAsync()
         }
      } catch (err) {
         console.log(err)
      }
   }

   useEffect(() => {
      checkUpdates()
   }, [])

   const initializeApp = async () => {
      await useFonts()
   }

   const HeroicNavTheme = {
      ...DefaultTheme,
      colors: {
         ...DefaultTheme.colors,
         background: '#1C1C1C',
      },
   }
   const theme = {
      space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48],
      colors: {
         text: '#0A0A0A',
         background: '#FFF',
         border: '#E2E8F0',
         muted: '#F0F1F3',
         success: '#7DBE31',
         error: '#FC0021',
         info: '#00FFFF',
      },
   }

   if (!IsReady) {
      return (
         <AppLoading
            startAsync={initializeApp}
            onFinish={() => SetIsReady(true)}
            onError={() => { }}
         />
      )
   }

   return (
      <AuthProvider>
         <AudioProvider>
            <ThemeProvider theme={theme}>
               <ToastProvider>
                  <NavigationContainer theme={HeroicNavTheme}>
                     <RootStack.Navigator screenOptions={{ headerShown: false }}>
                        <RootStack.Screen name={'RootStack'} component={RootTabNavigator} />
                     </RootStack.Navigator>
                  </NavigationContainer>
               </ToastProvider>
            </ThemeProvider>

         </AudioProvider>
      </AuthProvider>
   )
   // return <RegistrationScreen />;
}

export default registerRootComponent(App)
