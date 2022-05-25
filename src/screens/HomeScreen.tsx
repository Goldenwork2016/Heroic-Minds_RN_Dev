import * as React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { ScrollView, SafeAreaView } from 'react-native'

import { AppContext } from '../context'
import HomeHeader from '../components/HomeHeader'
import HomeTheme from '../components/HomeTheme'
import HomeEpisodeSectionContainer from '../components/HomeEpisodeSectionContainer'
import { getAllEpisodes } from '../hooks/useData'

import { Episode } from '../types/types'

import tw from '../lib/tailwind'
import HomeNewEpisodesContainer from '../components/HomeNewEpisodesContainer'

type HomeScreenNavigationProps = {
   Settings: any
   Journal: any
   Themes: any
   Stories: any
   Sessions: any
   ThemeDetails: any
   StoryTopic: any
   SessionCategory: any
   Episode: any
}
type AllEpisodes = {
   [key: string]: Episode
}

const HomeScreen = ({ navigation }: NativeStackScreenProps<HomeScreenNavigationProps>) => {
   const { setRawEpisodes, setAllEpisodes, setContentLoading } = React.useContext(AppContext)

   const iconSize = 30

   const navigateToSessions = () => {
      navigation.navigate('Sessions')
   }

   const navigateToSessionCategory = (category: any) => {
      navigation.navigate('SessionCategory', { category: category })
   }

   const navigateToThemes = () => {
      navigation.navigate('Themes')
   }

   const navigateToThemeDetails = (theme: any) => {
      navigation.navigate('ThemeDetails', { theme: theme })
   }

   const navigateToEpisode = (episode: any) => {
      navigation.navigate('Episode', { episode: episode, forceJournal: false })
   }

   const navigateToSettings = () => {
      navigation.navigate('Settings')
   }

   const navigateToJournal = () => {
      navigation.navigate('Journal')
   }

   const getContent = () => {
      setContentLoading(true);
      getAllEpisodes().then((response) => {
         if (response.data.code === 'HM200') {
            const rawEpisodes = response.data.data.records
            setRawEpisodes(rawEpisodes)
            const result = rawEpisodes.reduce(
               (i: any, episode: any) =>
                  Object.assign(i, {
                     [episode.categoryName]: (i[episode.categoryName] || []).concat({
                        episodeId: episode.episodeId,
                        episodeTitle: episode.episodeTitle,
                        categoryId: episode.categoryId,
                        categoryName: episode.categoryName,
                        categoryDescription: episode.categoryDescription,
                        episodeInspiration: episode.episodeInspiration,
                        episodeText: episode.episodeText,
                        isStory: episode.isStory,
                        uploadDate: episode.uploadDate,
                     }),
                  }),
               {}
            )
            setAllEpisodes(result)
            setContentLoading(false)
         } else {
            // handle no data
         }
      })
   }

   React.useEffect(() => {
      getContent()
   }, [])

   return (
      <ScrollView style={tw.style('pl-2', 'flex-1', 'bg-darkGrey')} showsVerticalScrollIndicator={false}>
         <HomeHeader
            navigateToSettings={navigateToSettings}
            navigateToJournal={navigateToJournal}
         />
         <HomeTheme onTitlePress={navigateToThemes} navigateToDetails={navigateToThemeDetails} />
         <HomeEpisodeSectionContainer navigateToDetails={navigateToSessionCategory} />
         <StatusBar style={'light'} />
      </ScrollView>
   )
}
export default HomeScreen
