import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import { ScrollView, SafeAreaView, View } from 'react-native'
import tw from '../lib/tailwind'
import { Ionicons } from '@expo/vector-icons'
import SettingsHeader from '../components/SettingsHeader'
import SettingsName from '../components/SettingsName'
import SettingsPassword from '../components/SettingsPassword'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import SettingsFooter from '../components/SettingsFooter'

type SettingScreenNavigationProps = {
   ChangePassword: any
   AccountSettingScreen: any
   NotificationSettingsScreen: any
   ContactScreen: any
   TcScreen: any

}

const SettingsScreen = ({ navigation }: NativeStackScreenProps<SettingScreenNavigationProps>) => {
   const navigateToChangePassword = () => {
      navigation.navigate('ChangePassword')
   }

   const navigateToProfile = () => {
      navigation.navigate('AccountSettingScreen')
   }

   const navigateToRemindMe = () => {
      navigation.navigate('NotificationSettingsScreen')
   }

   const navigateToContactUs = () => {
      navigation.navigate('ContactScreen')
   }

   const navigateToTermsAndPrivacy = () => {
      navigation.navigate('TcScreen')
   }



   return (
      <SafeAreaView style={tw.style('flex-1')}>
         <StatusBar style='light' />
         <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={tw.style('flex-1')} >
               <SettingsHeader navigation={navigation} />


               <View style={tw.style('flex-1')}>
                  < SettingsName
                     navigateToChangePassword={navigateToChangePassword}
                     navigateToProfile={navigateToProfile}
                     navigateToContactUs={navigateToContactUs}
                     navigateToRemindMe={navigateToRemindMe}
                     navigateToTermsAndPrivacy={navigateToTermsAndPrivacy}
                  />
               </View>
               <View style={tw.style('flex-1', 'justify-center')}>
                  <SettingsFooter />
               </View>
            </View>
         </ScrollView >
      </SafeAreaView >
   )
}

export default SettingsScreen
