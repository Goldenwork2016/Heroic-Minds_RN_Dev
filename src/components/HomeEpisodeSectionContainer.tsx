import React from 'react'
import { View, Text, ScrollView, ImageBackground, Pressable } from 'react-native'

import tw from '../lib/tailwind'
import { getSessionCategories } from '../hooks/useData'
import { AppContext } from '../context'
import HomeEpisode from './HomeEpisode'
import HomeEpisodeSection from './HomeEpisodeSection'
import HomeNewEpisodesContainer from './HomeNewEpisodesContainer'

interface HomeEpisodeSectionContainerProps {
   navigateToDetails(topic: any): any
}

const HomeEpisodeSectionContainer = ({ navigateToDetails }: HomeEpisodeSectionContainerProps) => {
   const { allEpisodes } = React.useContext(AppContext)

   const renderCategoryEpisodeComponent = () => {
      let name = []
      for (const category in allEpisodes) {
         name.push(<HomeEpisodeSection category={category} allEpisodes={allEpisodes} />)
      }
      return name
   }

   return (
      <View>
         <HomeNewEpisodesContainer />

         {renderCategoryEpisodeComponent()}
      </View>
   )
}

export default HomeEpisodeSectionContainer
