import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import tw from '../lib/tailwind'
import GoBack from './GoBack'
import BackArrowSVG from './SVGs/BackArrowSVG'
interface ThemeDetailHeaderProps {
   theme: any
   navigation: any
}

const ThemeHeader = ({ theme, navigation }: ThemeDetailHeaderProps) => {
   return (
      <SafeAreaView style={tw.style('bg-black text-white')}>
         <StatusBar style='light' />
         <View style={tw.style('my-5', 'px-2')}>
            <View style={tw.style('flex-row', 'items-center',)}>
               <View style={tw.style('w-10', 'h-4', 'mt-2')}>

                  <GoBack navigation={navigation} />

               </View>
               <Text
                  style={tw.style('text-2xl', 'leading-10', 'text-lightYellow', {
                     fontFamily: 'Gilroy-SemiBold',
                  })}>
                  {theme.themeName}
               </Text>
            </View>
            <Text
               style={tw.style('mt-2 text-base', 'leading-6', 'text-lightYellow', {
                  fontFamily: 'Gilroy-Medium',
               })}>
               {theme.themeDescription}
            </Text>
         </View>
      </SafeAreaView>
   )
}

export default ThemeHeader
