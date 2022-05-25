import React from 'react'
import { ScrollView, View, SafeAreaView } from 'react-native'
import tw from '../lib/tailwind'
import { StatusBar } from 'expo-status-bar'

import ThemeTiles from '../components/ThemeTiles'
import ThemeButton from '../components/ThemeButton'

import { AppContext } from '../context'
import { getThemeEpisodes } from '../hooks/useData'
import ThemeHeader from '../components/ThemeHeader'

const ThemeScreen = ({ navigation, route }: any) => {
   const { themes, themeEpisodes, setThemeEpisodes } = React.useContext(AppContext)

   const [selectedTheme, setSelectedTheme] = React.useState(themes[0])

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
            console.log('clearing the episodes')
            clearThemeEpisodes()
         }
      }
   }, [])

   const navigateToEpisode = (episode: any) => {
      navigation.navigate('Episode', { episode: episode })
   }

   return (
      <SafeAreaView style={tw.style('flex-1', 'bg-darkGrey')}>
         <ThemeHeader theme={selectedTheme} navigation={navigation} />
         <ScrollView>
            <View style={tw.style('flex-row', 'w-screen', 'bg-white')}>
               <View style={tw.style('py-4 pl-2')}>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                     {themes &&
                        themes?.map((theme: any, i: number) => {
                           return (
                              <ThemeButton
                                 onPress={() => setSelectedThemeHandler(theme)}
                                 theme={theme}
                                 isSelected={selectedTheme.themeId === theme.themeId}
                                 key={i}
                              />
                           )
                        })}
                  </ScrollView>
               </View>
            </View>
            <ThemeTiles onEpisodePress={navigateToEpisode} />
         </ScrollView>
         <StatusBar style={'light'} />
      </SafeAreaView>
   )
}

export default ThemeScreen
