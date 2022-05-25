import React from 'react'
import { View, Text } from 'react-native'

import tw from '../lib/tailwind'
import LogoSvg from './SVGs/LogoSvg'

const LoginHeader = () => {
   return (
      <View style={tw.style(`items-center`)}>
         <LogoSvg />
         <Text
            style={tw.style('text-2xl', 'pb-3.5', 'leading-10', 'text-lightYellow', 'mt-2', {
               fontFamily: 'Gilroy-Bold',
            })}>
            Welcome to Heroic Minds™
         </Text>
      </View >
   )
}

export default LoginHeader
