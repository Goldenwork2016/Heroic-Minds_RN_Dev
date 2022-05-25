import React from 'react'
import { ScrollView, View, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import ThemeHeader from '../components/ThemeHeader'
import ThemeDetailTiles from '../components/ThemeDetailTiles'
import ThemeButton from '../components/ThemeButton'

import { AppContext } from '../context'
import { getThemeEpisodes } from '../hooks/useData'

import tw from '../lib/tailwind'

const ThemeDetailScreen = ({ navigation, route }: any) => {
   const { theme } = route.params
   const { themes, themeEpisodes, setThemeEpisodes } = React.useContext(AppContext)

   const [selectedTheme, setSelectedTheme] = React.useState(theme || themes[0])

   const setSelectedThemeHandler = (theme: any): void => {
      setSelectedTheme(theme)
      setNewEpisodeHandler(theme)
   }

   const setNewEpisodeHandler = (theme: any) => {
      getThemeEpisodes(theme.themeId).then((response) => {
         if (response.data.code === 'HM200') {
            let themeEpisodes = response.data.data.records
            setThemeEpisodes(themeEpisodes)
         } else {
            // handle no data
         }
      })
   }

   const clearThemeEpisodes = () => {
      setThemeEpisodes(null)
   }

   React.useEffect(() => {
      setNewEpisodeHandler(selectedTheme)
      return () => {
         if (themeEpisodes !== null) {
            clearThemeEpisodes()
         }
      }
   }, [])

   const navigateToEpisode = (episode: any) => {
      navigation.navigate('Episode', { episode: episode })
   }

   return (
      <SafeAreaView style={tw.style('flex-1')}>
         {/* <ThemeHeader theme={theme} /> */}
         <ThemeHeader theme={selectedTheme} />
         <ScrollView showsVerticalScrollIndicator={false}>
            <View style={tw.style('flex-row', 'w-screen', 'bg-white')}>
               <View style={tw.style('py-4 px-5')}>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                     {themes &&
                        themes?.map((theme: any, i: number) => {
                           return (
                              <ThemeButton
                                 onPress={() => setSelectedThemeHandler(theme)}
                                 theme={theme}
                                 isSelected={selectedTheme.themeId == theme.themeId}
                                 key={i}
                              />
                           )
                        })}
                  </ScrollView>
               </View>
            </View>
            <ThemeDetailTiles onEpisodePress={navigateToEpisode} />
            <StatusBar style={'dark'} />
         </ScrollView>
      </SafeAreaView>
   )
}

export default ThemeDetailScreen
