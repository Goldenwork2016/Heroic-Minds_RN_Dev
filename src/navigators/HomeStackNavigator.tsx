import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'
import CategoryScreen from '../screens/CategoryScreen'

import ThemeScreen from '../screens/ThemeScreen'
import JournalScreen from '../screens/JournalScreen'

import { AppProvider } from '../context/AppContext'
import ThemeDetailScreen from '../screens/ThemeDetailScreen'
import EpisodeScreen from '../screens/EpisodeScreen'
import SettingsScreen from '../screens/SettingsScreen'
import ChangePasswordScreen from '../screens/ChangePasswordScreen'
import SendFeedbackScreen from '../screens/SendFeedbackScreen'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import IntroductionScreen from '../screens/IntroductionScreen'
import TutorialScreen from '../screens/TutorialScreen'
import AccountSettingScreen from '../screens/AccountSettingScreen'
import NotificationSettingsScreen from '../screens/NotificationSettingsScreen'
import ContactScreen from '../screens/ContactScreen'
import TcScreen from '../screens/TcScreen'
import JournalQuestionsScreen from '../screens/JournalQuestionsScreen'

const HomeStack = createNativeStackNavigator()

const SettingsStack = createNativeStackNavigator()

const screensWithHiddenTab = ['Themes', 'Category', 'Settings', 'Episode', 'Journal', 'JournalQuestions']

const HomeStackNavigator = ({ navigation, route }: any) => {
   React.useLayoutEffect(() => {
      const routeName = getFocusedRouteNameFromRoute(route);
      if (screensWithHiddenTab.includes(routeName!)) {
         navigation.setOptions({
            tabBarStyle: { display: 'none', borderTopWidth: 0, elevation: 0 },
         })
      }
      else {
         navigation.setOptions({
            tabBarStyle: { display: 'flex', borderTopWidth: 0, elevation: 0 },
         })
      }

   }, [navigation, route]);

   return (
      <AppProvider>
         <HomeStack.Navigator
            screenOptions={{
               headerShown: false,
            }}>
            <HomeStack.Screen name={'Home'} component={HomeScreen} />
            <HomeStack.Screen name={'Journal'} component={JournalScreen} />
            <HomeStack.Screen name={'Settings'} component={SettingsStackNavigation} />
            <HomeStack.Screen name={'SendFeedback'} component={SendFeedbackScreen} />
            <HomeStack.Screen name={'Themes'} component={ThemeScreen} />
            <HomeStack.Screen name={'ThemeDetails'} component={ThemeDetailScreen} />
            <HomeStack.Screen name={'Category'} component={CategoryScreen} />
            <HomeStack.Screen name={'Episode'} component={EpisodeScreen} />
            <HomeStack.Screen name={'JournalQuestions'} component={JournalQuestionsScreen} />
         </HomeStack.Navigator>
      </AppProvider>
   )
}

const SettingsStackNavigation = () => {
   return (
      <SettingsStack.Navigator
         screenOptions={{
            headerShown: false,
         }}
      >
         <SettingsStack.Screen name={'SettingsHome'} component={SettingsScreen} />
         <SettingsStack.Screen name={'AccountSettingScreen'} component={AccountSettingScreen} />
         <SettingsStack.Screen
            name={'NotificationSettingsScreen'}
            component={NotificationSettingsScreen}
         />
         <SettingsStack.Screen name={'ChangePassword'} component={ChangePasswordScreen} />
         <SettingsStack.Screen name={'RemindMe'} component={NotificationSettingsScreen} />
         <SettingsStack.Screen name={'ContactScreen'} component={ContactScreen} />
         <SettingsStack.Screen name={'TcScreen'} component={TcScreen} />


      </SettingsStack.Navigator>
   )
}

export default HomeStackNavigator
