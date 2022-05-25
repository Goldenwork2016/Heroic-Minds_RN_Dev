import React from 'react'
import { View, Text, ScrollView, Pressable } from 'react-native'
import tw from '../lib/tailwind'
import { getThemes } from '../hooks/useData'
import { AppContext } from '../context'
import ThemeButton from './ThemeButton'
import SkeletonContent from 'react-native-skeleton-content'

interface HomeThemeProps {
   onTitlePress: any
   navigateToDetails(theme: any): any
}

const HomeTheme = (props: HomeThemeProps) => {
   const { onTitlePress, navigateToDetails } = props
   const { themes, setThemes } = React.useContext(AppContext)
   const [themeLoading, setThemeLoading] = React.useState<boolean>(true)
   const loadingThemes = [{}, {}, {}, {}]

   React.useEffect(() => {
      setThemeLoading(true)
      getThemes()
         .then((response) => {
            if (response.data.code === 'HM200') {
               let themesResponse = response.data.data.records
               setThemes(themesResponse)
               setThemeLoading(false)
            } else {
               // handle no data
            }
         })
         .catch((err) => {})
   }, [])

   return (
      <View style={tw.style('my-4')}>
         <Pressable onPress={onTitlePress}>
            {themeLoading ? (
               <SkeletonContent
                  layout={[{ width: 130, height: 25 }]}
                  boneColor='#121212'
                  highlightColor='#333333'
                  animationDirection='horizontalLeft'
                  isLoading={true}
                  containerStyle={{ flex: 1, width: 20, marginBottom: 5, marginTop: 10 }}
               />
            ) : (
               <View style={tw.style('flex-row', 'justify-start ')}>
                  <Text
                     style={tw.style('text-2xl mb-1 text-lightYellow drop-shadow-sm', {
                        fontFamily: 'Gilroy-SemiBold',
                     })}>
                     Themes
                  </Text>
               </View>
            )}
         </Pressable>

         <View style={tw.style('flex-row', 'w-screen')}>
            {themeLoading ? (
               <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  {loadingThemes &&
                     loadingThemes.map((load: any, i: any) => {
                        return (
                           <SkeletonContent
                              layout={[{ flex:1, width: 90, height: 30 }]}
                              boneColor='#121212'
                              highlightColor='#333333'
                              animationDirection='horizontalLeft'
                              isLoading={true}
                              containerStyle={{ width: 20, marginRight: 80 }}
                           />
                        )
                     })}
               </ScrollView>
            ) : (
               <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  {themes &&
                     themes?.map((theme: any, i: number) => {
                        return (
                           <ThemeButton
                              onPress={() => navigateToDetails(theme)}
                              theme={theme}
                              key={i}
                           />
                        )
                     })}
               </ScrollView>
            )}
         </View>
      </View>
   )
}

export default HomeTheme
