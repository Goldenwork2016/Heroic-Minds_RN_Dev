import React from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import tw from '../lib/tailwind'
import { AuthContext } from '../context'

interface SettingsPasswordProps {}

const SettingsPassword = (props: SettingsPasswordProps) => {
   const { user } = React.useContext(AuthContext)
   return (
      <View style={tw`m-5`}>
         <View style={tw`mt-4`}>
            <Text
               style={tw.style('text-sm', 'leading-6', {
                  fontFamily: 'Gilroy-Medium',
                  color: '#979797',
               })}>
               Current Password
            </Text>
            <TextInput
               style={tw.style('border', 'border-solid', 'rounded-lg', 'h-10', 'pl-4', {
                  backgroundColor: 'rgba(112, 115, 128, 0.08)',
                  borderColor: 'rgba(112, 115, 128, 0.2)',
               })}
               returnKeyType='done'
            />
         </View>
         <View style={tw`mt-4`}>
            <Text
               style={tw.style('text-sm', 'leading-6', {
                  fontFamily: 'Gilroy-Medium',
                  color: '#979797',
               })}>
               New Password
            </Text>
            <TextInput
               style={tw.style('border', 'border-solid', 'rounded-lg', 'h-10', 'pl-4', {
                  backgroundColor: 'rgba(112, 115, 128, 0.08)',
                  borderColor: 'rgba(112, 115, 128, 0.2)',
               })}
               returnKeyType='done'
            />
         </View>

         <View style={tw`mt-4`}>
            <Text
               style={tw.style('text-sm', 'leading-6', {
                  fontFamily: 'Gilroy-Medium',
                  color: '#979797',
               })}>
               Confirm Password
            </Text>
            <TextInput
               style={tw.style('border', 'border-solid', 'rounded-lg', 'h-10', 'pl-4', 'mb-4', {
                  backgroundColor: 'rgba(112, 115, 128, 0.08)',
                  borderColor: 'rgba(112, 115, 128, 0.2)',
               })}
               returnKeyType='done'
            />
            <Pressable
               onPress={() => {
                  console.log('hi')
               }}>
               <View
                  style={tw.style(
                     'w-screen',
                     'h-10',
                     'bg-black',
                     'flex',
                     'justify-center',
                     'rounded-lg'
                  )}>
                  <Text
                     style={tw.style('text-center', 'text-lg', {
                        fontFamily: 'Gilroy-Medium',
                        color: '#ffffff',
                     })}>
                     save
                  </Text>
               </View>
            </Pressable>
         </View>
      </View>
   )
}

export default SettingsPassword
