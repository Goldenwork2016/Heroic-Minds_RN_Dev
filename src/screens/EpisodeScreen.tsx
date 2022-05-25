import React from 'react'
import { SafeAreaView } from 'react-native'
import tw from '../lib/tailwind'

import EpisodeHeader from '../components/EpisodeHeader'
import EpisodeContent from '../components/EpisodeContent'

const EpisodeScreen = ({ navigation, route }: any) => {
   const { episode, forceJournal } = route.params

   return (
      <SafeAreaView style={tw.style('flex-1 bg-darkGrey')}>
         <EpisodeHeader episode={episode} navigation={navigation} />
         {/* <EpisodeContent episode={episode} forceJournal={forceJournal} /> */}
      </SafeAreaView>
   )
}

export default EpisodeScreen
