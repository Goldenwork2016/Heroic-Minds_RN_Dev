import React from 'react'
import { View, Image, Pressable, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import tw from '../lib/tailwind'
import { signOut } from '../hooks/useAuth'
import { AuthContext } from '../context'

//Import SVG icons

import PencilIconSVG from '../components/SVGs/PencilIconSVG'
import SettingsIconSVG from '../components/SVGs/SettingsIconSVG'

interface HomeThemeProps {
   navigateToSettings(): any
   navigateToJournal(): any
}

const HomeHeader = (props: HomeThemeProps) => {
   const { navigateToSettings, navigateToJournal } = props
   const { user, setUser } = React.useContext(AuthContext)

   const [first, last] = user.attributes.name.split(' ')

   const setUserHandler = (value: any) => {
      setUser(value)
   }


   const signOutHandler = () => {}

   return (
      <View style={tw.style('mb-2')}>
         <View style={tw.style('justify-between flex-row content-center w-screen')}>
            <Text
               style={tw.style('text-2xl text-lightYellow', {
                  fontFamily: 'Gilroy-SemiBold',
               })}>
               Welcome {!first ? 'Hero' : first}
            </Text>
            <View style={tw.style('flex-row mr-2 justify-between w-20')}>
               <Pressable style={tw.style()} onPress={navigateToJournal}>
                  <PencilIconSVG />
               </Pressable>
               <Pressable style={tw.style('')} onPress={navigateToSettings}>
                  <SettingsIconSVG />
               </Pressable>
            </View>
         </View>
         <Text
            style={tw.style('text-base text-lightYellow ', {
               fontFamily: 'Gilroy-Regular',
            })}>
            {' '}
            Its Your Day
         </Text>
      </View>
   )
}

export default HomeHeader
