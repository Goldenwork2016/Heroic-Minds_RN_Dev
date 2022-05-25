import React from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'

import tw from '../lib/tailwind'
import { AuthContext } from '../context'

interface SettingsNameProps {
   navigateToChangePassword(): any
   navigateToProfile(): any
   navigateToTermsAndPrivacy(): any
   navigateToContactUs(): any
   navigateToRemindMe(): any
}

const SettingsName = (props: SettingsNameProps) => {
   const { navigateToChangePassword, navigateToProfile,
      navigateToTermsAndPrivacy, navigateToContactUs, navigateToRemindMe } = props


   return (
      <View style={tw`m-8`}>
         <View style={tw.style('mt-4')}>
            <Pressable
               onPress={() => {
                  navigateToProfile()
               }}>
               <View
                  style={tw.style(
                     'w-screen',
                     'h-10',
                     'bg-black',
                     'flex',
                     'justify-center',
                     'border',
                     'border-lightYellow',
                     'rounded-[10px]',

                  )}>
                  <Text
                     style={tw.style('text-center', 'text-base', 'text-lightYellow', {
                        fontFamily: 'Gilroy-Medium',
                     })}>
                     Account/Profile
                  </Text>
               </View>
            </Pressable>
         </View>

         {/* Remind Me */}
         <View style={tw.style('mt-4')}>
            <Pressable
               onPress={() => {
                  navigateToRemindMe()
               }}>
               <View
                  style={tw.style(
                     'w-screen',
                     'h-10',
                     'bg-black',
                     'flex',
                     'justify-center',
                     'border',
                     'border-lightYellow',
                     'rounded-[10px]',
                  )}>
                  <Text
                     style={tw.style('text-center', 'text-base', 'text-lightYellow', {
                        fontFamily: 'Gilroy-Medium',
                     })}>
                     Remind Me
                  </Text>
               </View>
            </Pressable>
         </View>
         <View style={tw.style('mt-4')}>
            <Pressable
               onPress={() => {
                  navigateToChangePassword()
               }}>
               <View
                  style={tw.style(
                     'w-screen',
                     'h-10',
                     'bg-black',
                     'flex',
                     'justify-center',
                     'border',
                     'border-lightYellow',
                     'rounded-[10px]',
                  )}>
                  <Text
                     style={tw.style('text-center', 'text-base', 'text-lightYellow', {
                        fontFamily: 'Gilroy-Medium',
                     })}>
                     Change Password
                  </Text>
               </View>
            </Pressable>
         </View>

         {/* //Terms & Privacy */}
         <View style={tw.style('mt-4')}>
            <Pressable
               onPress={() => {
                  navigateToTermsAndPrivacy()
               }}>
               <View
                  style={tw.style(
                     'w-screen',
                     'h-10',
                     'bg-black',
                     'flex',
                     'justify-center',
                     'border',
                     'border-lightYellow',
                     'rounded-[10px]',
                  )}>
                  <Text
                     style={tw.style('text-center', 'text-base', 'text-lightYellow', {
                        fontFamily: 'Gilroy-Medium',
                     })}>
                     Terms and Privacy
                  </Text>
               </View>
            </Pressable>
         </View>

         {/* //Contact Us */}
         <View style={tw.style('mt-4')}>
            <Pressable
               onPress={() => {
                  navigateToContactUs()
               }}>
               <View
                  style={tw.style(
                     'w-screen',
                     'h-10',
                     'bg-black',
                     'flex',
                     'justify-center',
                     'border',
                     'border-lightYellow',
                     'rounded-[10px]',
                  )}>
                  <Text
                     style={tw.style('text-center', 'text-base', 'text-lightYellow', {
                        fontFamily: 'Gilroy-Medium',
                     })}>
                     Contact Us
                  </Text>
               </View>
            </Pressable>
         </View>

      </View>
   )
}

export default SettingsName
