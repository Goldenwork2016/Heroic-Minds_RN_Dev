import React from 'react'
import { ScrollView } from 'react-native'
import { AppContext } from '../context'

import HomeEpisode from './HomeEpisode'

interface HomeNewEpisodesProps {
   size: number
}

const HomeNewEpisodes = (props: HomeNewEpisodesProps) => {
   const { rawEpisodes } = React.useContext(AppContext)

   return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
         {rawEpisodes &&
            rawEpisodes.map((episode: any, i: any) => (
               <HomeEpisode key={episode.episodeId} episode={episode} showCategory={true} />
            ))}
      </ScrollView>
   )
}

export default HomeNewEpisodes
