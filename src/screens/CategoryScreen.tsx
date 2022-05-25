import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import tw from '../lib/tailwind'

import CategoryHeader from '../components/CategoryHeader'
import CategoryTiles from '../components/CategoryTiles'
import { StatusBar } from 'expo-status-bar'

const CategoryScreen = ({ navigation, route }: any) => {
   const { categoryId, categoryName, categoryDescription, episodes } = route.params

   const navigateToEpisode = (episode: any) => {
      navigation.navigate('Episode', { episode: episode })
   }
   return (
      <SafeAreaView style={tw.style('flex-1 bg-darkGrey')}>
         <StatusBar style={'light'} />
         <ScrollView style={tw.style('flex-1')} showsVerticalScrollIndicator={false}>
            <CategoryHeader
               categoryId={categoryId}
               categoryName={categoryName}
               categoryDescription={categoryDescription}
               navigation={navigation}
            />
            <CategoryTiles episodes={episodes} onEpisodePress={navigateToEpisode} />
         </ScrollView>
      </SafeAreaView>
   )
}

export default CategoryScreen
