import React from 'react'
import { View, Text, Pressable, PressableProps } from 'react-native'

import tw from '../lib/tailwind'

type Props = {
   onPress: PressableProps['onPress']
   isSelected?: boolean
   theme: any
}

const ThemeButton = ({ onPress, isSelected = false, theme }: Props) => {
   return (
      <Pressable onPress={onPress}>
         <View
            style={tw.style(
               isSelected ? 'bg-lightYellow' : '',
               'border-lightYellow',
               'rounded-2xl',
               'mr-2',
               'flex',
               'justify-center',
               'px-3',
               'py-1',
               'border-2'
            )}>
            <Text
               style={tw.style(
                  'text-center',
                  'text-base drop-shadow-sm',
                  isSelected ? 'text-darkGrey' : 'text-lightYellow',
                  {
                     fontFamily: 'Gilroy-SemiBold',
                  }
               )}>
               {theme.themeName}
            </Text>
         </View>
      </Pressable>
   )
}

export default ThemeButton
