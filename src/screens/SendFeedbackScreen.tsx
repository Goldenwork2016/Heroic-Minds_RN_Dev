import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ScrollView, SafeAreaView } from 'react-native'
import tw from '../lib/tailwind'
import { Ionicons } from '@expo/vector-icons'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ChangePasswordHeader from '../components/ChangePasswordHeader'
import SendFeedbackHeader from '../components/SendFeedbackHeader'
import SendFeedbackContent from '../components/SendFeedbackContent'

const SendFeedbackScreen = () => {
   return (
      <SafeAreaView style={tw.style('flex-1')}>
         <ScrollView showsVerticalScrollIndicator={false}>
            <SendFeedbackHeader />
            <SendFeedbackContent />
         </ScrollView>
      </SafeAreaView>
   )
}

export default SendFeedbackScreen
