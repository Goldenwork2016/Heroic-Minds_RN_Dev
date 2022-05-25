import React from 'react'
import { View, Text, Image } from 'react-native'

import tw from '../lib/tailwind'
import GoBack from './GoBack'

type Props = {
   categoryId: string
   categoryName: string
   categoryDescription: string
   navigation: any
}

const CategoryHeader = (props: Props) => {
   const { categoryId, categoryName, categoryDescription, navigation } = props

   const imageBaseURI = { uri: 'https://img.heroicminds.live/' }

   return (
      <View>
         <View style={tw.style('px-2')}>
            <GoBack navigation={navigation} />

         </View>
         <View style={tw.style('w-full', 'h-52')}>
            <Image
               source={{
                  uri: `${imageBaseURI.uri}${categoryId}.png`,
               }}
               style={{
                  height: '100%',
                  width: '100%',
                  resizeMode: 'cover',
               }}
            />
         </View>

         <View style={tw.style('mb-2 px-2')}>
            <Text
               style={tw.style('text-2xl', 'pt-3', 'leading-10', 'break-words', 'text-lightYellow', {
                  fontFamily: 'Gilroy-SemiBold',
               })}>
               {categoryName}
            </Text>
            <Text
               style={tw.style('text-base', 'leading-6', 'break-words', 'text-lightYellow', {
                  fontFamily: 'Gilroy-Regular',
               })}>
               {categoryDescription}
            </Text>
         </View>
      </View>
   )
}

export default CategoryHeader
