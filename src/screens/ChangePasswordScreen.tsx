import * as React from 'react'
import { ScrollView, SafeAreaView, View } from 'react-native'
import tw from '../lib/tailwind'
import { Ionicons } from '@expo/vector-icons'
import SettingsHeader from '../components/SettingsHeader'
import SettingsName from '../components/SettingsName'
import SettingsPassword from '../components/SettingsPassword'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ChangePasswordHeader from '../components/ChangePasswordHeader'
import ChangePasswordContent from '../components/ChangePasswordContent'
import { StatusBar } from 'expo-status-bar'

type ChangePasswordScreenProps = {}

const ChangePasswordScreen = ({ navigation }: NativeStackScreenProps<ChangePasswordScreenProps>) => {
   return (
      <SafeAreaView style={tw.style('flex-1')}>
         <StatusBar style='light' />
         <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={tw.style('flex-1')}>

               <ChangePasswordHeader navigation={navigation} />
               <ChangePasswordContent />
            </View>

         </ScrollView>
      </SafeAreaView>
   )
}

export default ChangePasswordScreen
