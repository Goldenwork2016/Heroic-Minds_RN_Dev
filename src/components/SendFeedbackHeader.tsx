import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import tw from '../lib/tailwind'

interface SendFeedbackHeaderProps {}

const SendFeedbackHeader = (props: SendFeedbackHeaderProps) => {
   return (
      <View style={tw.style('mt-14', 'ml-5', 'mb-2')}>
         <Text
            style={tw.style('text-4xl', 'pb-3.5', 'leading-10', {
               fontFamily: 'Gilroy-Bold',
               color: '#0B0B0B',
            })}>
            Send Feedback
         </Text>
      </View>
   )
}

export default SendFeedbackHeader
