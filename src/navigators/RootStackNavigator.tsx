import * as React from 'react'

import AppLoading from 'expo-app-loading'

import HomeStackNavigator from './HomeStackNavigator'
import AuthStackNavigator from './AuthStackNavigator'
import CommunityStackNavigator from './CommunityStackNavigator'
import IntroductionStackNavigator from './IntroductionStackNavigator'

import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'
import HomeBulbLogo from '../components/tabBarHomeIcon'
import { View, SafeAreaView, Platform, StyleSheet, Image } from 'react-native'
import MusicPlayerBar from '../components/MusicPlayerBar'

// Import SVG icons
import HomeIconSVG from '../components/SVGs/HomeIconSVG'
import ActiveHomeIconSVG from '../components/SVGs/ActiveHomeIconSVG'
import SearchIconSVG from '../components/SVGs/SearchIconSVG'
import ActiveSearchIconSVG from '../components/SVGs/ActiveSearchIconSVG'
import CommunityIconSVG from '../components/SVGs/CommunityIconSVG'
import ActiveCommunityIconSVG from '../components/SVGs/ActiveCommunityIconSVG'

import tw from '../lib/tailwind'

import { AuthContext } from '../context'
import { isAuth } from '../hooks/useAuth'

import DiscoverScreen from '../screens/Discover'

import AsyncStorage from '@react-native-async-storage/async-storage'

const TabBarMusicPlayer = (props: any) => {
   const { user } = props
   return (
      <View>
         {user ? <MusicPlayerBar /> : <></>}
         <BottomTabBar {...props} />

      </View>
   )
}

const Tabs = createBottomTabNavigator()

const RootTabNavigator = () => {
   const { user, setUser } = React.useContext(AuthContext)
   const { tutorialStatus, setTutorialStatus } = React.useContext(AuthContext)
   const [IsReady, SetIsReady] = React.useState(false)

   const checkTutorialStatus = () => {
      AsyncStorage.getItem('isShowTutorial').then(async (value) => {
         if (value == null) {
            await setTutorialStatus(false)
         } else {
            await setTutorialStatus(true)
         }
      })
   }

   const isAuthHandler = async () => {
       checkTutorialStatus()
      await isAuth()
         .then((res) => {
            setUser(res)
         })
         .catch((err) => {
            setUser(null)
         })
   }

   const renderScreen = () => {
      return user !== null ? (
         tutorialStatus == false ? (
            <Tabs.Navigator
               screenOptions={{
                  headerShown: false,
               }}>
               <Tabs.Screen
                  name={'IntroductionStack'}
                  component={IntroductionStackNavigator}
                  options={{
                     tabBarLabel: () => {
                        return null
                     },
                     tabBarIcon: (tabInfo) => <HomeBulbLogo />,
                     tabBarStyle: { display: 'none' },
                  }}
               />
            </Tabs.Navigator>
         ) : (
            <Tabs.Navigator
               tabBar={(props) => <TabBarMusicPlayer user={user} {...props} />}
               safeAreaInsets={{ bottom: 0 }}
               tabBarOptions={{
                  activeBackgroundColor: '#1C1C1C',
                  inactiveBackgroundColor: '#1C1C1C',
               }}
               screenOptions={{
                  headerShown: false,
                  tabBarStyle: {
                     borderTopColor: 'transparent',
                     shadowColor: 'transparent',
                     borderTopWidth: 0,
                     elevation: 0,
                     shadowOffset: { width: 0, height: 0 },
                     shadowOpacity: 0,
                  },
               }}>
               <Tabs.Screen
                  name={'HomeStack'}
                  component={HomeStackNavigator}
                  options={{
                     tabBarStyle: { borderTopWidth: 0 },
                     tabBarLabel: () => {
                        return null
                     },
                     tabBarIcon: ({ focused }) =>
                        focused ? <ActiveHomeIconSVG /> : <HomeIconSVG />,
                  }}
               />
               <Tabs.Screen
                  name={'Search'}
                  component={DiscoverScreen}
                  options={{
                     tabBarLabel: () => {
                        return null
                     },
                     tabBarIcon: ({ focused }) =>
                        focused ? <ActiveSearchIconSVG /> : <SearchIconSVG />,
                  }}
               />
               <Tabs.Screen
                  name={'CommunityStack'}
                  component={CommunityStackNavigator}
                  options={{
                     tabBarStyle: { borderTopWidth: 4 },
                     tabBarLabel: () => {
                        return null
                     },
                     tabBarIcon: ({ focused }) =>
                        focused ? <ActiveCommunityIconSVG /> : <CommunityIconSVG />,
                  }}
               />
            </Tabs.Navigator>
         )
      ) : (
         <Tabs.Navigator
            screenOptions={{
               headerShown: false,
            }}>
            <Tabs.Screen
               name={'AuthStack'}
               component={AuthStackNavigator}
               options={{
                  tabBarLabel: () => {
                     return null
                  },
                  tabBarIcon: (tabInfo) => <HomeBulbLogo />,
                  tabBarStyle: { display: 'none' },
               }}
            />
         </Tabs.Navigator>
      )
   }

   if (!IsReady) {
      return (
         <AppLoading
            startAsync={isAuthHandler}
            onFinish={() => SetIsReady(true)}
            onError={() => { }}
         />
      )
   }

   return (
      <>
         <SafeAreaView style={tw.style('flex-1 mt-8 bg-darkGrey')}>
            {Platform.OS == 'android' ? <View style={tw.style('mt-8')}></View> : <></>}
            {renderScreen()}
         </SafeAreaView>
      </>
   )
}

const styles = StyleSheet.create({
   image: {
      width: 32,
      height: 32,
      resizeMode: 'contain',
   },
})
export default RootTabNavigator
