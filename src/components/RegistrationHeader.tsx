import React from 'react'
import { View, Text } from 'react-native'

import tw from '../lib/tailwind'
import LogoSvg from './SVGs/LogoSvg'

const RegistrationHeader = () => {
   return (
      <View style={tw`flex-row h-20 justify-start pl-1`}>
         <LogoSvg adjustedHeight={160} adjustedXAxis={20} />
         <Text
            style={tw.style('text-2xl',
               'pb-3.5', 'leading-10',
               'text-lightYellow',
               'ml--8',
               {
                  fontFamily: 'Gilroy-Bold',
               })}>
            Create an Account
         </Text>

      </View>
   )
}

export default RegistrationHeader
