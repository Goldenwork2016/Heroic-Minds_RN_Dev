import * as React from 'react'
import { View, Text, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import tw from '../lib/tailwind'
import GoBack from './GoBack'

interface SettingHeaderProps {
   navigation: any
}

const SettingsHeader = (props: SettingHeaderProps) => {
   return (
      <View style={tw.style('flex-row', 'items-center', 'ml-2', 'mb-4')}>
         <View style={tw.style('h-4', 'mt-1')}>
            <GoBack navigation={props.navigation} />

         </View>
         <Text
            style={tw.style('text-4xl', 'leading-10', 'text-lightYellow', {
               fontFamily: 'Gilroy-Bold',
            })}>
            Settings
         </Text>
      </View >
   )
}

export default SettingsHeader
