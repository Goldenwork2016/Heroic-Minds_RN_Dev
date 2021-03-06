import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Pressable, ScrollView } from 'react-native'
import { AppContext } from '../context'

import tw from '../lib/tailwind'
import HomeEpisode from './HomeEpisode'

interface HomeEpisodeSectionProps {
   category: any
   allEpisodes: any
}

const HomeEpisodeSection = (props: HomeEpisodeSectionProps) => {
   const { category, allEpisodes } = props
   const navigation = useNavigation()

   const onTitlePress = () => {
      // @ts-ignore
      navigation.navigate('Category', {
         categoryId: allEpisodes[category][0].categoryId,
         categoryName: category,
         categoryDescription: allEpisodes[category][0].categoryDescription,
         episodes: allEpisodes[category],
      })
   }

   return (
      <View style={tw.style('my-4')}>
         <Pressable onPress={onTitlePress}>
            <Text
               style={tw.style('text-xl mb-1 text-lightYellow drop-shadow-sm', {
                  fontFamily: 'Gilroy-Medium',
               })}>
               {category}
            </Text>
         </Pressable>

         <View style={tw.style('flex-row', 'w-screen')}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
               {allEpisodes[category]?.length > 0 &&
                  allEpisodes[category].map((episode: any) => (
                     <HomeEpisode key={episode.episodeId} episode={episode} showCategory={false} />
                  ))}
            </ScrollView>
         </View>
      </View>
   )
}

export default HomeEpisodeSection
