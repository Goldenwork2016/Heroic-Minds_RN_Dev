import React from 'react'
import { View, Text, ScrollView, Pressable } from 'react-native'
import { AppContext } from '../context'
import { getThemeEpisodes } from '../hooks/useData'

import tw from '../lib/tailwind'
interface ThemeDetailHeaderProps {
   theme: any
}

const ThemeDetailHeader = (props: ThemeDetailHeaderProps) => {
   const { theme } = props
   const { themeEpisodes, setThemeEpisodes } = React.useContext(AppContext)

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
      setNewEpisodeHandler(theme)
      return () => {
         if (themeEpisodes !== null) {
            clearThemeEpisodes()
         }
      }
   }, [])

   return (
      <View style={tw.style('mt-14', 'ml-5', 'mb-2')}>
         <Text
            style={tw.style('text-4xl', 'pb-3.5', 'leading-10', {
               fontFamily: 'Gilroy-Bold',
               color: '#0B0B0B',
            })}>
            Themes
         </Text>
         <Text
            style={tw.style('text-2xl', 'pb-3.5', 'leading-10', {
               fontFamily: 'Gilroy-Medium',
               color: '#979797',
            })}>
            {theme.themeName}
         </Text>
         <Text
            style={tw.style('text-base', 'leading-6', {
               fontFamily: 'Gilroy-Medium',
               color: '#979797',
            })}>
            {theme.themeDescription}
         </Text>
      </View>
   )
}

export default ThemeDetailHeader
