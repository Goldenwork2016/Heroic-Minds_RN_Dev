import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CommunityScreen from '../screens/CommunityScreen'
import { AppProvider } from '../context/AppContext'
import Discover from '../screens/Discover'
import { hasPlatformFeatureAsync } from 'expo-device'
import { UsageData } from '@aws-amplify/cli/lib/domain/amplify-usageData'
import PostDetail from '../screens/PostDetailScreen'
import SubscriberScreen from '../screens/SubscriberScreen'
import NotificationScreen from '../screens/NotificationScreen'
import CommentScreen from '../screens/CommentScreen'
import ProfileScreen from '../screens/ProfileScreen'
// import SearchScreen from '../screens/SearchScreen'
import SettingsNewScreen from '../screens/SettingsNewScreen'
import AccountSettingScreen from '../screens/AccountSettingScreen'
import ContactScreen from '../screens/ContactScreen'
import TcScreen from '../screens/TcScreen'
import NotificationSettingsScreen from '../screens/NotificationSettingsScreen'
import CreatePost from '../components/CreatePost'
import UploadImage from '../components/UploadImage'
import EditPost from '../components/EditPost'
import PlayAudio from '../components/PlayAudio'
import UploadAudio from '../components/UploadAudio'
import DeletePost from '../components/DeletePost'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import SettingsScreen from '../screens/SettingsScreen'
import ChangePasswordScreen from '../screens/ChangePasswordScreen'
import FollowingsScreen from '../screens/FollowingsScreen'
import EpisodeScreen from '../screens/EpisodeScreen'

const CommunityStack = createNativeStackNavigator()

const SettingsStack = createNativeStackNavigator()

const screensWithTabShown = ['Community']


const CommunityStackNavigator = ({ navigation, route }: any) => {

   React.useLayoutEffect(() => {
      const routeName = getFocusedRouteNameFromRoute(route);
      if (routeName == undefined || screensWithTabShown.includes(routeName!)) {
         navigation.setOptions({ tabBarStyle: { display: 'flex' } })
      }
      else {
         navigation.setOptions({ tabBarStyle: { display: 'none' } })
      }

   }, [navigation, route]);

   return (
      <AppProvider>
         <CommunityStack.Navigator
            screenOptions={{
               headerShown: false,
            }}
         >
            <CommunityStack.Screen name={'Community'} component={CommunityScreen} />
            <CommunityStack.Screen name={'Discover'} component={Discover} />
            <CommunityStack.Screen name={'PostDetail'} component={PostDetail} />
            <CommunityStack.Screen name={'CommentScreen'} component={CommentScreen} />
            <CommunityStack.Screen name={'ProfileScreen'} component={ProfileScreen} />

            <CommunityStack.Screen name={'NotificationScreen'} component={NotificationScreen} />
            <CommunityStack.Screen name={'SubscriberScreen'} component={SubscriberScreen} />
            <CommunityStack.Screen name={'SettingsNewScreen'} component={SettingsNewScreen} />
            {/* <CommunityStack.Screen name={'SearchScreen'} component={SearchScreen} /> */}

            <CommunityStack.Screen name={'CreatePost'} component={CreatePost} />
            <CommunityStack.Screen name={'EditPost'} component={EditPost} />
            <CommunityStack.Screen name={'UploadImage'} component={UploadImage} />
            <CommunityStack.Screen name={'PlayAudio'} component={PlayAudio} />
            <CommunityStack.Screen name={'UploadAudio'} component={UploadAudio} />
            <CommunityStack.Screen name={'DeletePost'} component={DeletePost} />

            <CommunityStack.Screen name={'Settings'} component={SettingsStackNavigation} />
            <CommunityStack.Screen name={'FollowingScreen'} component={FollowingsScreen} />

            {/* Episode screen is redundant in Community and HomeStack since
            When the user opens the Episode screen from MusicPlayer and navigates back
            This will ensure that the app remains in the same stack it was redirected from */}
            <CommunityStack.Screen name={'Episode'} component={EpisodeScreen} />


         </CommunityStack.Navigator>
      </AppProvider >
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

export default CommunityStackNavigator
