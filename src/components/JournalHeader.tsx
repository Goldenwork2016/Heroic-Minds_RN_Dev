import React from 'react'
import { View, Text } from 'react-native'
import SessionLogo from './sessionLogo'
import { Ionicons } from '@expo/vector-icons'

import tw from '../lib/tailwind'

const JournalHeader = () => {
   return (
      <View style={tw.style('mx-5', 'mb-2')}>
         <View style={tw.style('flex-row justify-center items-center')}>
            <Ionicons style={tw.style('px-2 text-lightYellow')} name='pencil' size={30} />
            <Text
               style={tw.style('text-4xl', 'pt-2', 'leading-10', 'text-lightYellow', {
                  fontFamily: 'Gilroy-Bold',
               })}>
               Journal
            </Text>
         </View>

         <Text
            style={tw.style('text-base text-center', 'leading-6', 'mt-2', 'text-lightYellow', {
               fontFamily: 'Gilroy-Medium',
            })}>
            A place to keep track of your thoughts, ideas, reflections and discoveries.
         </Text>
      </View>
   )
}

export default JournalHeader
