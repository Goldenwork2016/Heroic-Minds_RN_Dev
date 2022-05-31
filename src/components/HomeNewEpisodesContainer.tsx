import React from 'react'
import { View, Text } from 'react-native'
import { AppContext } from '../context'

import tw from '../lib/tailwind'
import HomeLoadingEpisodes from './HomeLoadingEpisodes'
import HomeNewEpisodes from './HomeNewEpisodes'

interface HomeNewEpisodesContainerProps {}

const HomeNewEpisodesContainer = (props: HomeNewEpisodesContainerProps) => {
   const { contentLoading } = React.useContext(AppContext)
   return (
      <View style={tw.style('my-4')}>
         <View style={tw.style('flex-row', 'justify-start', 'w-full')}>
            {contentLoading ? (
               <></>
            ) : (
               <Text
                  style={tw.style('text-xl mb-1 text-lightYellow drop-shadow-sm', {
                     fontFamily: 'Gilroy-Medium',
                  })}>
                  New
               </Text>
            )}
         </View>

         <View style={tw.style('flex-row', 'w-screen')}>
            {contentLoading ? <HomeLoadingEpisodes size={40} /> : <HomeNewEpisodes size={40} />}
         </View>
      </View>
   )
}

export default HomeNewEpisodesContainer
