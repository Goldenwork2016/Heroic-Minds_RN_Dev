import React from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'

import tw from '../lib/tailwind'
import { AuthContext } from '../context'
import { signOut } from '../hooks/useAuth'



const SettingsFooter = (props: any) => {
   const { user, setUser } = React.useContext(AuthContext)

   const setUserHandler = (value: any) => {
      setUser(value)
   }
   const signOutHandler = () => {
      signOut()
         .then(() => {
            setUserHandler(null)
         })
         .catch(() => {
            // error signing out
         })
   }

   return (
      <View style={tw`m-4`}>
         <View style={tw.style('mt-4', 'mx-auto',)}>
            <Pressable
               onPress={() => {
                  signOutHandler()
               }}>
               <View
                  style={tw.style(
                     'w-28',
                     'h-10',
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
                     Log Out
                  </Text>
               </View>
            </Pressable>
         </View>
         <View style={tw.style('mt-10')}>
            <Pressable
               onPress={() => {
                  null
               }}>
               <View
                  style={tw.style(
                     'w-screen',
                     'h-10',
                     'flex',
                     'justify-center',

                  )}>
                  <Text
                     style={tw.style('text-center', 'text-base', 'text-lightGrey', {
                        fontFamily: 'Gilroy-Medium',
                     })}>
                     Cancel Subscription
                  </Text>
               </View>
            </Pressable>
         </View>
         <View style={tw.style('mt-1')}>
            <Pressable
               onPress={() => {
                  null
               }}>
               <View
                  style={tw.style(
                     'w-screen',
                     'h-10',
                     'flex',
                     'justify-center',

                  )}>
                  <Text
                     style={tw.style('text-center', 'text-base', 'text-lightGrey', {
                        fontFamily: 'Gilroy-Medium',
                     })}>
                     Deactivate Account
                  </Text>
               </View>
            </Pressable>
         </View>
      </View>
   )
}

export default SettingsFooter
